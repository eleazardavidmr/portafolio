import { client } from "@/supabase/client";

export const getLikeCount = async (post_id) => {
  if (!post_id) return 0;

  const { count, error } = await client
    .from("likes")
    .select("id", { count: "exact", head: true })
    .eq("post_id", post_id);

  if (error) {
    console.error(error);
    return 0;
  }

  return count ?? 0;
};

export const toggleLike = async (post_id, user_id) => {
  if (!post_id || !user_id) return { liked: false };

  const { data: existingLike } = await client
    .from("likes")
    .select("id")
    .eq("post_id", post_id)
    .eq("user_id", user_id)
    .maybeSingle();

  if (existingLike) {
    const { error } = await client
      .from("likes")
      .delete()
      .eq("post_id", post_id)
      .eq("user_id", user_id);

    if (error) {
      console.error(error);
      return { liked: true }; // fallback
    }

    return { liked: false };
  }

  const { error } = await client.from("likes").insert([{ post_id, user_id }]);

  if (error) {
    console.error(error);
    return { liked: false };
  }

  return { liked: true };
};
export const hasUserLiked = async (post_id, user_id) => {
  if (!post_id || !user_id) return false;

  const { data } = await client
    .from("likes")
    .select("id")
    .eq("post_id", post_id)
    .eq("user_id", user_id)
    .maybeSingle();

  return !!data;
};
