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
  if (!post_id || !user_id) return null;

  // 1. Ver si existe
  const { data: existingLike } = await client
    .from("likes")
    .select("id")
    .eq("post_id", post_id)
    .eq("user_id", user_id)
    .maybeSingle();

  // 2. Si existe → delete
  if (existingLike) {
    const { error } = await client
      .from("likes")
      .delete()
      .eq("post_id", post_id)
      .eq("user_id", user_id);

    if (error) {
      console.error(error);
      return null;
    }

    return { liked: false };
  }

  // 3. Si no existe → insert
  const { error } = await client.from("likes").insert([
    {
      post_id,
      user_id,
    },
  ]);

  if (error) {
    console.error(error);
    return null;
  }

  return { liked: true };
};

export const hasUserLiked = async (post_id, user_id) => {
  if (!post_id || !user_id) return false;

  const { data, error } = await client
    .from("likes")
    .select("id")
    .eq("post_id", post_id)
    .eq("user_id", user_id)
    .maybeSingle();

  if (error) return false;

  return Boolean(data);
};
