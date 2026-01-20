import { client } from "@/supabase/client";
import { useState, useCallback } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [postsError, setPostsError] = useState("");
  const [loading, setLoading] = useState(true);

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error } = await client.from("posts").select("*");

      if (error) {
        console.error(error);
        setPostsError(error.message);
      } else {
        setPosts(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []); // 👈 clave

  return {
    loading,
    posts,
    postsError,
    loadPosts,
  };
}
