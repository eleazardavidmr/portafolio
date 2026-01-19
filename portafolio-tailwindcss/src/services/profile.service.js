import { client } from "@/supabase/client";

//for getting username, location and avatar
export const getProfileInfo = async (userId) => {
  if (!userId) throw new Error("User ID is required");

  const { data, error } = await client
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
};

export const updateProfileInfo = async (userId, newInfo) => {
  if (!userId) throw new Error("User ID is required");

  const { data, error } = await client
    .from("profiles")
    .upsert({
      id: userId,
      username: newInfo.username,
      location: newInfo.location,
      avatar_url: newInfo.avatar,
      bio: newInfo.bio,
    })
    .select()
    .single();

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
};
