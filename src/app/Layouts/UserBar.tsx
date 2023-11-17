"use client";
import React, { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile/page";
import useCurrentUser from "../hooks/useCurrentUser";
import useAllusers from "../hooks/useAllusers";
import useFollow from "../hooks/useFollow";
import { toast } from "react-toastify";

const UserBar = () => {
  const { data, fetchData, refreshData }: any = useCurrentUser();
  const { allusersdata, getusers } = useAllusers();

  const { addFollow, removeFollow } = useFollow();
  const handleToFollow = (id: any) => {
    addFollow(id);
    toast.success("Following");
    getusers();
  };
  const hanldeToUnFollow = (id: any) => {
    removeFollow(id);
    getusers();
  };


  
  return (
    <div className="h-[60%]">
      {data && (
        <>
          <div className="shadow-lg">
            <UserProfile />
          </div>
          <div>
            {allusersdata.map((item: any) => (
              <div key={item._id}>
                {item.name}
                {data.FollowingIds.includes(item._id) ? (
                  <button onClick={() => hanldeToUnFollow(item._id)}>
                    following
                  </button>
                ) : (
                  <button onClick={() => handleToFollow(item._id)}>
                    follow
                  </button>
                )}

                <hr />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserBar;
