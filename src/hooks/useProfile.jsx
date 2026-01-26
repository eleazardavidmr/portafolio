import { getSession } from "@/services/auth.service";
import { useEffect, useState } from "react";
import {
  getProfileInfo as fetchProfileInfo,
  getAllProfiles as fetchAllProfiles,
} from "@/services/profile.service";

export default function useProfile() {
  const [profile, setProfile] = useState(null);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allProfiles, setAllProfiles] = useState(null);

  useEffect(() => {
    const getUserId = async () => {
      try {
        const result = await getSession();
        const userId = result.data?.user?.id;
        if (userId) {
          setId(userId);
        } else {
          // No session, load common data and stop loading
          await getAllProfiles();
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        await getAllProfiles();
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

    const getAllProfiles = async () => {
      const allProfiles = await fetchAllProfiles();
      setAllProfiles(allProfiles);
    };

    if (!id) {
      getUserId();
    } else {
      getProfileInfo();
    }
  }, [id]);

  const refreshProfile = async () => {
    setLoading(true);
    try {
      if (id) {
        const profile = await fetchProfileInfo(id);
        setProfile(profile);
      }
      const all = await fetchAllProfiles();
      setAllProfiles(all);
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
    allProfiles,
  };
}
