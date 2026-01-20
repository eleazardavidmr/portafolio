import { Link } from "react-router-dom";
import PostCover from "@pages/BlogPage/blogpage-components/PostCover";
import { FiCalendar, FiClock, FiHeart, FiArrowRight } from "react-icons/fi";

export default function PostCard({ post }) {
  const { title, resume, created_at, slug, tags, read_time, id } = post;

  const { postLikes } = useLikes(id, null);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="group relative flex flex-col h-full bg-white dark:bg-neutral-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1.5 duration-500">
      {/* Cover Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Link to={`/blog/${slug}`} className="block h-full w-full">
          <PostCover
            title={title}
            tags={tags}
            className="h-full w-full transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Floating Category/Tag */}
        {tags && tags.length > 0 && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase">
              {tags[0]}
            </span>
          </div>
        )}

        {/* Reading Time Badge */}
        {read_time && (
          <div className="absolute bottom-4 left-6 z-10 flex items-center gap-1.5 text-white/90 text-xs font-medium">
            <FiClock className="text-sm" /> {/* Replaced schedule icon */}
            {read_time}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-7">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs font-mono">
            <FiCalendar className="text-sm" />{" "}
            {/* Replaced calendar_today icon */}
            {formatDate(created_at)}
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs font-semibold">
            <FiHeart className="text-sm text-rose-500" />
            {postLikes || 0}
          </div>
        </div>

        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
            {title}
          </h3>
        </Link>

        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed mb-6 font-medium">
          {resume || "No summary available."}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
          <div className="flex gap-2">
            {tags &&
              tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight"
                >
                  #{tag}
                </span>
              ))}
            {tags && tags.length > 2 && (
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight">
                +{tags.length - 2}
              </span>
            )}
          </div>

          <Link
            to={`/blog/${slug}`}
            className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide group/btn"
          >
            <span className="relative">
              Read Article
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover/btn:w-full" />
            </span>
            <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
import useLikes from "@/hooks/useLikes";

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    resume: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    read_time: PropTypes.string,
  }).isRequired,
};
