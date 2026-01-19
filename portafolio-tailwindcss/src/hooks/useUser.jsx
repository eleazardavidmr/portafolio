import { getSession } from "@/services/auth.service";
import { useEffect, useState } from "react";

export default function useUser() {
  const [userId, setUserId] = useState(null);

  const getUserId = async () => {
    const result = await getSession();
    setUserId(result.data.user.id);
  };

  useEffect(() => {
    getUserId();
  }, []);

  return {
    userId,
  };
}
