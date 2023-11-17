import useLike from "@/app/hooks/useLike";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import React, { useEffect, useCallback } from "react";
import { ToastContainer } from 'react-toastify';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface PostDetails {
  currentuserid: string;
  img: string;
  post: string;
  name: string;
  postId: string;
  isLiked: Array<string>;
}

const PostCard: React.FC<PostDetails> = ({
  currentuserid,
  postId,
  img,
  post,
  name,
}) => {
  const {   getLikes, likes, deleteLike, toLike } = useLike({
    userId: currentuserid,
    postId: postId,
  });

  const liked: boolean = likes.includes(currentuserid);
//console.log(currentuserid);
  useEffect(() => {
    getLikes();
  }, [postId, currentuserid]);

  const handleButtonClick = useCallback(() => {
    if (!liked) {
      toast.success("liked");
      toLike();
    } else {
      deleteLike();
       toast.error("removed like");
    }
  }, [liked, toLike, deleteLike  ]);

  return (
    <div>
      <div className="card w-[100%] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{post}</p>
        </div>
        <figure>
          {img !== "" ? (
            <Image
              className="object-cover"
              src={img}
              height={100}
              width={200}
              alt="Shoes"
            />
          ) : null}
        </figure>
        <button onClick={handleButtonClick}>
          {liked ? <AiFillHeart /> 
          
          : <AiOutlineHeart />}
        </button>
        <ToastContainer/>
        <span>{likes.length}</span>
      </div>
    </div>
  );
};

export default PostCard;
