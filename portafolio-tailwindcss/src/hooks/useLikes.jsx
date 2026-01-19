import {
  getLikeCount,
  toggleLike,
  hasUserLiked,
  getProfileLikesCount,
} from "@/services/likes.service";
import { useEffect, useState } from "react";

export default function useLikes(postId, userId) {
  const [postLikes, setPostLikes] = useState(0);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [userLikes, setUserLikes] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPostLikes = async () => {
      if (!postId) return;
      const total = await getLikeCount(postId);
      setPostLikes(total);

      if (!userId) {
        setIsPostLiked(false);
        return;
      }

      const userLiked = await hasUserLiked(postId, userId);
      setIsPostLiked(userLiked);
    };

    const loadUserLikes = async () => {
      if (!userId) {
        setUserLikes(0);
      } else {
        const total = await getProfileLikesCount(userId);
        setUserLikes(total);
      }
    };

    if (postId) loadPostLikes();
    if (userId) loadUserLikes();
  }, [postId, userId]);

  const handleToggleLike = async () => {
    if (!postId || !userId || loading) return;

    setLoading(true);

    await toggleLike(postId, userId);

    const total = await getLikeCount(postId);
    const userLiked = await hasUserLiked(postId, userId);

    setPostLikes(total);
    setIsPostLiked(userLiked);

    setLoading(false);
  };

  return {
    postLikes,
    isPostLiked,
    toggleLike: handleToggleLike,
    loading,
    userLikes,
  };
}
