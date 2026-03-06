"use client";
import { useRouter } from "next/navigation";

interface EditorialType { id: string; slug: string; title: string; image_url: string; content: string; }

export default function EditorialTab({ editorials }: { editorials: EditorialType[] }) {
  const router = useRouter();

  return (
    <div className="px-6 py-10 border-t border-zinc-900 bg-black">
      <div className="mb-12 text-center">
        <h3 className="text-white text-2xl font-serif font-bold tracking-tight mb-2">LUMEN Editorial</h3>
        <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase">The Brand Storytelling</p>
      </div>
      
      <div className="flex flex-col gap-12">
        {editorials.map((edit) => (
          <article key={edit.id} className="cursor-pointer group" onClick={() => router.push(`/editorial/${edit.slug}`)}>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-5 border border-zinc-800/50">
              <div className="absolute inset-0 bg-cover bg-center  group-hover:scale-105 transition-transform grayscale duration-1000" style={{ backgroundImage: `url('${edit.image_url}')` }} />
            </div>
            <div className="px-2">
              <h4 className="text-white text-lg font-bold tracking-tight mb-2 group-hover:text-blue-400 transition-colors">{edit.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 font-light">{edit.content}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}