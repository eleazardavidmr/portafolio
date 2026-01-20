export default function Comment({ comment }) {
  return (
    <div
      key={comment.id}
      className="group p-6 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-slate-200/60 dark:border-white/10 hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="flex justify-between items-start mb-5">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={comment.author.avatar}
              alt={comment.author.name}
              className="w-12 h-12 rounded-xl object-cover ring-2 ring-white dark:ring-white/10 shadow-sm"
            />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
              {comment.author.name}
            </h4>
            <p className="text-xs font-medium text-slate-500 dark:text-primary/70 mt-0.5">
              {comment.date}
            </p>
          </div>
        </div>
      </div>

      <div className="pl-0 md:pl-16">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
          {comment.content}
        </p>
      </div>
    </div>
  );
}
