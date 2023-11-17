import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useLike = ({ userId, postId }: { userId: string; postId: string }) => {
  const [loading, setLoading] = useState(false);
  const [likes, setLikes] = useState([]);
  //console.log(likes)
  const getLikes = async () => {
    try {
      if (!postId || typeof postId !== "string") {
        throw new Error("Invalid postId");
      }

      const res = await axios.put("api/users/like", { postId });
      //console.log(res.data.likes);
      setLikes(res.data.likes);
    } catch (error) {
      console.error("Error fetching likes:", error);
    } finally {
      setLoading(false);
    }
  };
  const toLike = async () => {
    setLoading(true);
    try {
      const res = await axios.post("api/users/like", { userId, postId });
      getLikes();
    } catch (error) {
      console.error("Error liking post:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteLike = async () => {
    setLoading(true);
    try {
      const res = await axios.delete("api/users/like", {
        data: { userId, postId },
      });
      getLikes();
    } catch (error) {
      console.error("Error unliking post:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    likes,
    getLikes,
    loading,
    deleteLike,
    toLike,
  };
};

export default useLike;
