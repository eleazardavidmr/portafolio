import { useState, useEffect, useCallback } from "react";
import { client } from "@/supabase/client";

export default function useNotifications() {
  const [hasNewPosts, setHasNewPosts] = useState(false);
  const [latestPostDate, setLatestPostDate] = useState(null);

  const checkNewPosts = useCallback(async () => {
    try {
      const { data, error } = await client
        .from("posts")
        .select("created_at")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code !== "PGRST116") {
          // Ignore "no rows returned"
          console.error("Error checking for new posts:", error);
        }
        return;
      }

      if (data) {
        const lastViewed = localStorage.getItem("lastViewedPosts");
        const currentLatest = new Date(data.created_at).getTime();
        setLatestPostDate(data.created_at);

        if (!lastViewed || currentLatest > parseInt(lastViewed)) {
          setHasNewPosts(true);
        } else {
          setHasNewPosts(false);
        }
      }
    } catch (err) {
      console.error("Unexpected error checking notifications:", err);
    }
  }, []);

  const markAsRead = useCallback(() => {
    if (latestPostDate) {
      const timestamp = new Date(latestPostDate).getTime();
      localStorage.setItem("lastViewedPosts", timestamp.toString());
      setHasNewPosts(false);
    } else {
      // Fallback if we haven't fetched yet but want to mark current time as read
      localStorage.setItem("lastViewedPosts", Date.now().toString());
      setHasNewPosts(false);
    }
  }, [latestPostDate]);

  useEffect(() => {
    checkNewPosts();
  }, [checkNewPosts]);

  return {
    hasNewPosts,
    markAsRead,
    checkNewPosts,
  };
}
