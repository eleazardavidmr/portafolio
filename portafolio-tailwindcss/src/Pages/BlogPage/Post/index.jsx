import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

import PostCover from "../blogpage-components/PostCover";

export default function Post({ postInfo }) {
  const { title, created_at, tags, content, summary, read_time } =
    postInfo || {};
  // ... (rest of imports/component logic)

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    // <Layout> Removed Layout to avoid nesting

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[800px] mx-auto px-6 py-12 relative"
    >
      {/* Back Button - Floating or Sticky could be nice, but keeping it simple for now */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-8 text-sm font-bold text-slate-500 hover:text-primary transition-colors group"
        >
          <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Volver al Blog
        </Link>
      </motion.div>

      {/* Header Section */}
      <motion.header
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-10"
      >
        <div className="rounded-2xl overflow-hidden mb-8 shadow-xl">
          <PostCover
            title={title}
            tags={tags}
            className="h-64 md:h-80 w-full"
          />
        </div>

        {tags && tags.length > 0 && (
          <div className="flex gap-2 mb-6 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 text-slate-900 dark:text-white">
          {title || "Untitled Post"}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium font-sans">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">
              calendar_today
            </span>
            {formatDate(created_at)}
          </div>
          {read_time && (
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                schedule
              </span>
              {read_time}
            </div>
          )}
        </div>
      </motion.header>

      {/* Content Article */}
      <motion.article
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:font-pixel prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
      >
        {/* Summary Box */}
        {summary && (
          <div className="not-prose p-6 bg-slate-50 dark:bg-zinc-900/50 border-l-4 border-primary rounded-lg mb-10">
            <p className="text-lg font-medium text-slate-900 dark:text-white mb-2 font-pixel">
              Resumen
            </p>
            <p className="text-slate-600 dark:text-slate-400 m-0 leading-relaxed font-sans">
              {summary}
            </p>
          </div>
        )}

        {content ? (
          <ReactMarkdown>{content}</ReactMarkdown>
        ) : !summary ? (
          <p className="text-slate-500 italic">No content available.</p>
        ) : null}
      </motion.article>
    </motion.div>
    // </Layout>
  );
}

import PropTypes from "prop-types";

Post.propTypes = {
  postInfo: PropTypes.shape({
    title: PropTypes.string,
    created_at: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.string,
    summary: PropTypes.string,
    read_time: PropTypes.string,
  }),
};
