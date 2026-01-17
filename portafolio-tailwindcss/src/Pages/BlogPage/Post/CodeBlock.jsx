export default function CodeBlock() {
  return (
    <div className="rounded-xl overflow-hidden mt-6 border border-border-dark bg-surface-dark shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border-dark bg-white/5">
        <span className="text-xs font-mono text-slate-400">
          DNS Configuration
        </span>
        <button className="flex items-center gap-1 text-xs text-primary hover:text-white transition-colors group">
          <span className="material-symbols-outlined text-sm group-hover:animate-pulse">
            content_copy
          </span>
          Copy
        </button>
      </div>
      <div className="p-6 font-mono text-sm overflow-x-auto leading-relaxed text-slate-300">
        <div className="flex gap-4 mb-2 hover:bg-white/5 p-1 rounded transition-colors -mx-1 px-1">
          <span className="text-slate-600 select-none w-4 text-right">1</span>
          <span>
            <span className="text-primary font-semibold">Type:</span> A
          </span>
        </div>
        <div className="flex gap-4 mb-2 hover:bg-white/5 p-1 rounded transition-colors -mx-1 px-1">
          <span className="text-slate-600 select-none w-4 text-right">2</span>
          <span>
            <span className="text-primary font-semibold">Name:</span> @
          </span>
        </div>
        <div className="flex gap-4 mb-6 hover:bg-white/5 p-1 rounded transition-colors -mx-1 px-1">
          <span className="text-slate-600 select-none w-4 text-right">3</span>
          <span>
            <span className="text-primary font-semibold">Value:</span>{" "}
            76.76.21.21
          </span>
        </div>

        <div className="flex gap-4 mb-2 hover:bg-white/5 p-1 rounded transition-colors -mx-1 px-1">
          <span className="text-slate-600 select-none w-4 text-right">4</span>
          <span>
            <span className="text-primary font-semibold">Type:</span> CNAME
          </span>
        </div>
        <div className="flex gap-4 mb-2 hover:bg-white/5 p-1 rounded transition-colors -mx-1 px-1">
          <span className="text-slate-600 select-none w-4 text-right">5</span>
          <span>
            <span className="text-primary font-semibold">Name:</span> www
          </span>
        </div>
        <div className="flex gap-4 hover:bg-white/5 p-1 rounded transition-colors -mx-1 px-1">
          <span className="text-slate-600 select-none w-4 text-right">6</span>
          <span>
            <span className="text-primary font-semibold">Value:</span>{" "}
            cname.vercel-dns.com
          </span>
        </div>
      </div>
    </div>
  );
}
