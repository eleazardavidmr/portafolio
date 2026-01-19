import useLikes from "@/hooks/useLikes";

export default function LikeButton({ post_id, user_id }) {
  const { likes, liked, toggleLike } = useLikes(post_id, user_id);
  return (
    <button
      onClick={toggleLike}
      className="group flex items-center gap-3 px-6 py-2.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/20 transition-all text-primary"
    >
      <span
        className="material-symbols-outlined transition-transform group-active:scale-125"
        style={{
          fontVariationSettings: `'FILL' ${liked ? 1 : 0}`,
        }}
      >
        favorite
      </span>

      <span className="font-bold">{likes}</span>
    </button>
  );
}
