import { getSession } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { getProfileInfo as fetchProfileInfo } from "@/services/profile.service";

export default function useProfile() {
  const [profile, setProfile] = useState({
    username: "",
    location: "",
    avatar: null,
  });

  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserId = async () => {
      try {
        const result = await getSession();
        setId(result.data.user.id);
      } catch (error) {
        console.error("Error fetching session:", error);
        setLoading(false);
      }
    };

    const getProfileInfo = async () => {
      if (!id) return;
      try {
        const profile = await fetchProfileInfo(id);
        setProfile(profile);
      } catch (error) {
        console.error("Error fetching profile info:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!id) {
      getUserId();
    } else {
      getProfileInfo();
    }
  }, [id]);

  const refreshProfile = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const profile = await fetchProfileInfo(id);
      setProfile(profile);
    } catch (error) {
      console.error("Error refreshing profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    id,
    profile,
    loading,
    refreshProfile,
  };
}
