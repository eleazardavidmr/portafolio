import {
  getLikeCount,
  toggleLike,
  hasUserLiked,
} from "@/services/likes.service";
import { useEffect, useState } from "react";

export default function useLikes(postId, userId) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!postId) return;

    const loadLikes = async () => {
      const total = await getLikeCount(postId);
      setLikes(total);

      if (userId) {
        const userLiked = await hasUserLiked(postId, userId);
        setLiked(userLiked);
      }
    };

    loadLikes();
  }, [postId, userId]);

  const handleToggleLike = async () => {
    if (!postId || !userId || loading) return;

    setLoading(true);

    await toggleLike(postId, userId);

    const total = await getLikeCount(postId);
    const userLiked = await hasUserLiked(postId, userId);

    setLikes(total);
    setLiked(userLiked);

    setLoading(false);
  };

  return {
    likes,
    liked,
    toggleLike: handleToggleLike,
    loading,
  };
}
