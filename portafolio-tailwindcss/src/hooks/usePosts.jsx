import { client } from "@/supabase/client";
import { useState } from "react";
export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [postsError, setPostsError] = useState("");
  const [loading, setLoading] = useState(true);
  const loadPosts = async () => {
    try {
      const { data, error } = await client.from("posts").select("*");
      if (error) {
        console.error(error);
        setPostsError(error);
        setLoading(false);
      } else {
        setPosts(data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loading,
    posts,
    postsError,
    loadPosts,
  };
}
