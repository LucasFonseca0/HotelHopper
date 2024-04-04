import { useEffect, useState } from "react";
import { getUserInfo } from "@/src/api/userAPI";
import Cookies from "js-cookie";



const useUser = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("access_token");
      if (token) {
        try {
          const userInfo = await getUserInfo(token);
          setUser(userInfo);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  return {
    loading,
    user,
  };
};

export default useUser;
