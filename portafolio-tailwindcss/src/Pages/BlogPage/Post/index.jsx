import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useMemo } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { FiArrowLeft, FiCalendar, FiClock, FiShare2 } from "react-icons/fi";
import { MdForum } from "react-icons/md";

import LikeButton from "./LikeButton";
import PostCover from "../blogpage-components/PostCover";
import useProfile from "@/hooks/useProfile";
import ShareModal from "./ShareModal";
import CommentSection from "../CommentSection";

export default function Post({ postInfo }) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { id: userId } = useProfile();

  const {
    id,
    title = "Untitled Post",
    created_at,
    tags = [],
    content,
    summary,
    read_time,
    slug,
  } = postInfo || {};

  const formattedDate = useMemo(() => {
    if (!created_at) return "";
    return new Date(created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [created_at]);

  const handleOpenShareModal = (e) => {
    e.preventDefault();
    setIsShareModalOpen(true);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsShareModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-[800px] mx-auto px-6 py-12 relative"
    >
      {/* Back */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-8 text-sm font-bold text-slate-500 hover:text-primary group"
        >
          <FiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
          Volver al Blog
        </Link>
      </motion.div>

      {/* Header */}
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

        {tags.length > 0 && (
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

        <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
          {formattedDate && (
            <div className="flex items-center gap-2">
              <FiCalendar className="text-lg" />
              {formattedDate}
            </div>
          )}

          {read_time && (
            <div className="flex items-center gap-2">
              <FiClock className="text-lg" />
              {read_time}
            </div>
          )}
        </div>
      </motion.header>

      {/* Content */}
      <motion.article
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="prose prose-lg dark:prose-invert max-w-none"
      >
        {summary && (
          <div className="not-prose p-6 mb-10 bg-slate-50 dark:bg-zinc-900/50 border-l-4 border-primary rounded-lg">
            <p className="text-lg font-medium mb-2">Resumen</p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {summary}
            </p>
          </div>
        )}

        {content ? (
          <ReactMarkdown>{content}</ReactMarkdown>
        ) : (
          <p className="text-slate-500 italic">No content available.</p>
        )}
      </motion.article>
      <hr className="border-t border-slate-200 dark:border-white/10 mt-16" />
      <div className="mt-5 ">
        <div className="flex gap-5 my-5">
          <LikeButton post_id={id} user_id={userId} />

          <button
            onClick={(e) => handleOpenShareModal(e)}
            className="text-slate-500 hover:text-primary transition-colors"
          >
            <FiShare2 className="text-xl" />
          </button>
        </div>

        <CommentSection postId={postInfo.id} />
      </div>
      {isShareModalOpen && (
        <ShareModal
          isOpen={isShareModalOpen}
          onClose={handleCloseModal}
          postTitle={title}
          slug={slug}
        />
      )}
    </motion.div>
  );
}

Post.propTypes = {
  postInfo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    created_at: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.string,
    summary: PropTypes.string,
    read_time: PropTypes.string,
    slug: PropTypes.string,
  }),
};
