import { Link } from "react-router-dom";
import PostCover from "./blogpage-components/PostCover";

export default function PostCard({ post }) {
  const { title, resume, created_at, slug, tags, read_time, id } = post;

  const { likes } = useLikes(id, null);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="group relative flex flex-col justify-between h-full bg-white dark:bg-neutral-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <Link
        to={`/blog/${slug}`}
        className="block h-48 overflow-hidden relative"
      >
        <PostCover
          title={title}
          tags={tags}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-6 ">
        <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-4">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              calendar_today
            </span>
            {formatDate(created_at)}
          </span>
          {read_time && (
            <>
              •
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  schedule
                </span>
                {read_time}
              </span>
            </>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {resume || "No summary available."}
        </p>
      </div>
      {/* LIKES AND COMMENTS COUNT */}
      <div className="flex items-center gap-4 px-6 mb-4">
        {/* Likes Count */}
        <div className="flex items-center gap-1.5 group/stat">
          <span className="material-symbols-outlined text-[25px] text-rose-500 transition-transform group-hover/stat:scale-110">
            favorite
          </span>
          <span className="text-xl font-mono font-medium text-slate-600 dark:text-slate-400">
            {likes || 0}
          </span>
        </div>

        {/* Comments Count (Placeholder para el futuro)
        
        <div className="flex items-center gap-1.5 group/stat">
          <span className="material-symbols-outlined text-[18px] text-slate-400 dark:text-slate-500 transition-transform group-hover/stat:scale-110">
            chat_bubble
          </span>
          <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
            0
          </span>
        </div>
        */}
      </div>
      <div className="flex items-center justify-between mt-auto mx-6 pt-4 pb-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex gap-2">
          {tags &&
            tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          {tags && tags.length > 2 && (
            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 dark:bg-white/5 rounded-full">
              +{tags.length - 2}
            </span>
          )}
        </div>

        <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Read Article
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </span>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
import useLikes from "@/hooks/useLikes";

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    resume: PropTypes.string,
    created_at: PropTypes.string,
    slug: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    read_time: PropTypes.string,
  }),
};
