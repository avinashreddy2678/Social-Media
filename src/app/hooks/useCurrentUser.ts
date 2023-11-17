import axios from "axios";
import { useEffect, useState } from "react";

const useCurrentUser = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const result = await axios.get("/api/users/userid");
      if (result.data.user) {
        setData(result.data.user);
      } else {
        return "failed";
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  //  console.log(data)
  useEffect(() => {
    fetchData();
  }, []);
  const refreshData = () => {
    fetchData();
  };

  return {
    fetchData,
    data,
    refreshData,
  };
};

export default useCurrentUser;
