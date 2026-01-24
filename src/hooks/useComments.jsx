import {
  getCommentsByPost as fetchCommentsByPost,
  publishComment as fetchPublishComment,
} from "@/services/comments.service";
import { useCallback, useEffect, useState } from "react";
export default function useComments(postId) {
  const [postComments, setPostComments] = useState([]);

  const getComments = useCallback(async () => {
    if (!postId) return;
    const comments = await fetchCommentsByPost(postId);
    setPostComments(comments);
  }, [postId]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  const publishComment = async (userId, content) => {
    await fetchPublishComment(postId, userId, content);
    await getComments();
  };

  return {
    postComments,
    publishComment,
  };
}
