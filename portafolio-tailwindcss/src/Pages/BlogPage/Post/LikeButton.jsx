import { FiHeart } from "react-icons/fi";
import useLikes from "@/hooks/useLikes";
import PropTypes from "prop-types";

export default function LikeButton({ post_id, user_id }) {
  const { postLikes, isPostLiked, toggleLike } = useLikes(post_id, user_id);
  return (
    <button
      onClick={toggleLike}
      className="group flex items-center gap-3 px-6 py-2.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/20 transition-all text-primary"
    >
      <FiHeart
        className={`transition-all duration-300 group-active:scale-125 ${
          isPostLiked ? "fill-primary" : ""
        }`}
      />

      <span className="font-bold">{postLikes}</span>
    </button>
  );
}

LikeButton.propTypes = {
  post_id: PropTypes.string.isRequired,
  user_id: PropTypes.string,
};
