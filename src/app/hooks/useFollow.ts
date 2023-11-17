import axios from "axios";
import { useEffect } from "react";
import useCurrentUser from "./useCurrentUser";
import { toast } from "react-toastify";
import useAllusers from "./useAllusers";

const useFollow = () => {
  const { data } = useCurrentUser();
  const {refreshalluser}=useAllusers()
  const addFollow = async (followid: any) => {
    try {
      const res = await axios.post(`api/users/follow`, {
        userid: data._id,
        followid,
      });
      refreshalluser();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFollow = async (followid: any) => {
    try {
      const res = await axios.delete(`api/users/follow`, {
        data: { followid, userid: data._id },
      });
      toast.error("Unfollow");
      refreshalluser();  
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addFollow,
    removeFollow,
  };
};

export default useFollow;
