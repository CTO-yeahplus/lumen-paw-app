### 💡 주요 변경점 설명 (AI가 코드를 "읽는" 방식 최적화)
'''
1.  **`analyze_package_json` 추가**:
    * 스크립트 실행 시 가장 먼저 `package.json`을 읽어 **"이 프로젝트는 Next.js, Supabase, Tailwind를 쓰는구나"**라고 AI에게 먼저 알려줍니다. 문서 최상단 헤더에 이 정보가 박힙니다.

2.  **`analyze_typescript` 함수 고도화**:
    * **Imports 분석**: 외부 라이브러리(`openai`, `lucide-react`)와 내부 모듈(`@/types`, `@/hooks`) 의존성을 요약에 보여줍니다.
    * **Type/Interface 추출**: `export interface UserProfile` 같은 정의를 찾아내어, 해당 파일이 데이터 모델을 정의하는 파일인지 로직 파일인지 구분합니다.
    * **Components & Functions 구분**: 단순 함수인지, React 컴포넌트인지(`export default function`) 구분하여 표기합니다.
    * **Hooks 감지**: `useLibrary`, `useEffect` 등을 감지하여 해당 컴포넌트가 상태 관리나 사이드 이펙트를 다루고 있음을 암시합니다.

3.  **명시적인 AI 프롬프트 포함**:
    * 생성된 Markdown 파일 상단에 `> 🛑 INSTRUCTION FOR AI` 섹션을 추가했습니다.
    * 이 문서는 AI에게 "할루시네이션(없는 파일 지어내기) 하지 말고, 여기 있는 Context Summary를 먼저 읽어라"고 지시합니다.

4.  **가독성 개선**:
    * `Context Summary` 섹션을 더 구조화하여, 코드를 다 읽지 않아도 **이 파일의 역할(Role)**이 무엇인지 1초 만에 파악할 수 있게 했습니다.

이 스크립트로 생성된 `SNAPSHOT_PRO_FE.md`를 저에게 주시면, 저는 단순한 코드 덩어리가 아니라 **"구조화된 프로젝트 청사진"**을 보게 되므로 훨씬 더 정확하고 깊이 있는 답변을 드릴 수 있습니다.
'''

import os
import datetime
import re
import ast
import json

# ⚙️ Configuration
TARGET_EXTENSIONS = {
    '.ts', '.tsx', '.js', '.jsx', 
    '.css', '.json', '.py', 
    '.md', '.env.local', '.env'
}

# 분석에서 제외할 디렉토리 및 파일
IGNORE_DIRS = {
    '.git', '.idea', '.vscode', 'node_modules', 'build', 'dist', 
    '__pycache__', '.gradle', '.fvm', '.next', 'coverage'
}
IGNORE_FILES = {
    'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml', 
    'snapshot_pro_fe.py', 'SNAPSHOT_AURA_FE.md', 'README.md'
}

OUTPUT_FILE = "SNAPSHOT_AURA_FE.md"

def get_file_content(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            return f.read()
    except:
        return ""

def analyze_package_json(content):
    """package.json을 분석하여 프로젝트의 핵심 기술 스택을 추출합니다."""
    try:
        data = json.loads(content)
        deps = data.get('dependencies', {})
        dev_deps = data.get('devDependencies', {})
        
        stack = []
        if 'next' in deps: stack.append("Next.js")
        if 'react' in deps: stack.append("React")
        if 'tailwindcss' in deps or 'tailwindcss' in dev_deps: stack.append("Tailwind CSS")
        if '@supabase/supabase-js' in deps: stack.append("Supabase")
        if 'firebase' in deps: stack.append("Firebase")
        if 'openai' in deps: stack.append("OpenAI API")
        if 'framer-motion' in deps: stack.append("Framer Motion")
        
        return {
            "name": data.get('name', 'Unknown'),
            "version": data.get('version', '0.0.0'),
            "stack": ", ".join(stack),
            "dependencies": list(deps.keys())
        }
    except:
        return None

def analyze_typescript(content):
    """TypeScript/React 파일의 구조를 정밀 분석합니다."""
    details = []
    
    # 1. Imports (의존성 파악)
    imports = re.findall(r'^import\s+(?:\{([^}]+)\}|(\w+))\s+from\s+[\'"]([^\'"]+)[\'"]', content, re.MULTILINE)
    if imports:
        libs = [match[2] for match in imports]
        # 주요 라이브러리만 요약 (너무 많으면 noise가 됨)
        key_libs = [l for l in libs if not l.startswith('.')]
        if key_libs:
            details.append(f"🔗 **Imports:** `{', '.join(key_libs[:5])}`" + ("..." if len(key_libs)>5 else ""))

    # 2. Interfaces / Types (데이터 모델)
    interfaces = re.findall(r'export\s+(?:interface|type)\s+(\w+)', content)
    for name in interfaces:
        details.append(f"wb **Type/Intf:** `{name}`")

    # 3. Components & Functions (핵심 로직)
    # export default function Name...
    func_default = re.findall(r'export\s+default\s+function\s+(\w+)', content)
    for name in func_default:
        details.append(f"🧩 **Component (Default):** `{name}`")
    
    # export function Name...
    func_named = re.findall(r'export\s+function\s+(\w+)', content)
    for name in func_named:
        details.append(f"wf **Function:** `{name}`")

    # const Name = () => ... (Arrow Function Components)
    arrow_funcs = re.findall(r'const\s+(\w+)\s*:\s*React\.FC', content)
    for name in arrow_funcs:
        details.append(f"🧩 **Component (Arrow):** `{name}`")

    # 4. Hooks Usage (로직 흐름 파악)
    hooks = re.findall(r'\b(use[A-Z]\w+)\(', content)
    unique_hooks = list(set(hooks))
    if unique_hooks:
        # React 기본 훅 제외하고 커스텀 훅 위주로 보면 좋지만, 일단 다 보여줌
        details.append(f"ww **Hooks:** `{', '.join(unique_hooks[:7])}`")

    # 5. API/Server Actions
    if 'NextResponse' in content or 'api/' in content:
        details.append("⚡ **API Route / Server Action Detected**")
        
    return details

def analyze_file(filepath, content):
    _, ext = os.path.splitext(filepath)
    
    if filepath.endswith('package.json'):
        return ["📦 **Package Config** (See Project Overview)"]
        
    if ext in ['.ts', '.tsx', '.js', '.jsx']:
        return analyze_typescript(content)
        
    if ext == '.py':
        # 기존 Python 분석 유지
        details = []
        try:
            tree = ast.parse(content)
            for node in tree.body:
                if isinstance(node, ast.ClassDef):
                    details.append(f"📦 **Class:** `{node.name}`")
                elif isinstance(node, ast.FunctionDef):
                    details.append(f"wf **Function:** `{node.name}`")
        except:
            pass
        return details

    return []

def write_snapshot():
    start_time = datetime.datetime.now()
    current_time_str = start_time.strftime("%Y-%m-%d %H:%M:%S")
    
    # 프로젝트 루트의 package.json 분석
    pkg_content = get_file_content('package.json')
    pkg_info = analyze_package_json(pkg_content) if pkg_content else None
    
    # 1. 문서 헤더 작성 (AI에게 역할을 부여하는 프롬프트 포함)
    md_content = f"""# 🧠 Deep Context Snapshot

**Generated at:** {current_time_str}
**Project:** {pkg_info['name'] if pkg_info else 'Unknown'} ({pkg_info['version'] if pkg_info else 'v0.0'})
**Tech Stack:** {pkg_info['stack'] if pkg_info else 'Unknown'}

> **🛑 INSTRUCTION FOR AI (GEMINI/GPT):**
> 1. This document contains the **entire source code** of the project.
> 2. The **File Map** below shows the structure.
> 3. Each file section has a **Context Summary** analyzing imports, components, and types.
> 4. Use this context to answer questions about architecture, debugging, or feature implementation.
> 5. **Do not hallucinate** files that are not in this list.

---

## 🗺️ File Map
"""
    
    file_list = [] # (path, content, analysis, ext)
    
    # 2. 파일 순회 및 맵 작성
    tree_str = "```text\n.\n"
    total_files = 0
    
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        
        # 트리 구조 렌더링
        level = root.replace('.', '').count(os.sep)
        indent = '│   ' * level
        subindent = '├── '
        if root != '.':
            tree_str += f"{indent}{os.path.basename(root)}/\n"
            
        for f in files:
            _, ext = os.path.splitext(f)
            if f in IGNORE_FILES: continue
            if ext in TARGET_EXTENSIONS:
                filepath = os.path.join(root, f)
                content = get_file_content(filepath)
                analysis = analyze_file(filepath, content)
                
                # 파일 경로 정규화 (./ 제거)
                clean_path = filepath.replace('.\\', '').replace('./', '')
                
                file_list.append((clean_path, content, analysis, ext))
                tree_str += f"{indent}│   {subindent}{f}\n"
                total_files += 1
    
    tree_str += "```"
    md_content += f"**Total Files Scanned:** {total_files}\n\n"
    md_content += tree_str + "\n\n---\n\n## 💻 Source Details\n"

    # 3. 상세 코드 작성
    for path, content, analysis, ext in file_list:
        lang = ext.replace('.', '')
        if lang == 'tsx': lang = 'typescript'
        if lang == 'jsx': lang = 'javascript'
        if lang == 'json': lang = 'json'

        # 분석 내용 포맷팅
        if analysis:
            analysis_text = "\n".join([f"* {item}" for item in analysis])
        else:
            analysis_text = "* (No structural elements detected)"

        md_content += f"""
        ### 📄 {path}
        > **Context Summary**
        {analysis_text}

        ```{lang}
        {content}"""
        

    # 파일 쓰기
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(md_content)

    end_time = datetime.datetime.now()
    duration = (end_time - start_time).total_seconds()

    print(f"✅ Snapshot created: {OUTPUT_FILE}")
    print(f"⏱️ Time taken: {duration:.2f}s")
    print(f"📂 Files processed: {total_files}")
    if pkg_info:
        print(f"🛠️ Stack detected: {pkg_info['stack']}")

if __name__ == "__main__":
    write_snapshot()