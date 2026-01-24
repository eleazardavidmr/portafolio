import { client } from "@/supabase/client";

export const getCommentsByPost = async (postId) => {
  if (!postId) throw new Error("Post ID is required");

  const { data, error } = await client
    .from("comments")
    .select(
      `
      id,
      content,
      created_at,
      user_id,
      author:profiles!user_id (
        username,
        avatar_url
      )
    `,
    )
    .eq("post_id", postId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching comments:", error);
    return [];
  }

  // Transform data to match Comment.jsx expectations
  return data.map((comment) => ({
    id: comment.id,
    content: comment.content,
    date: new Date(comment.created_at).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: {
      name: comment.author?.username || "Anonymous",
      avatar:
        comment.author?.avatar_url ||
        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    },
  }));
};

export const publishComment = async (postId, userId, content) => {
  if (!postId || !userId || !content)
    throw new Error("All parameters have to be completed.");

  const { error } = await client.from("comments").insert([
    {
      post_id: postId,
      user_id: userId,
      content: content,
    },
  ]);

  if (error) {
    console.error("Error publishing comment:", error);
    throw error;
  }
};
