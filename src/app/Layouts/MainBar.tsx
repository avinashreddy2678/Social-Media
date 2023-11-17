"use client";
import Main from "../components/Main/page";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useData } from "../ContextApi/CurrentUser/Context";
import useCurrentUser from "../hooks/useCurrentUser";
interface User {
  name: string;
  email: string;
  profileimg: string;
  _id: string;
}
const MainBar = () => {
  const { data }: any = useCurrentUser();
  return (
    <>
    
      {data ? (
        <div>
          <Main profileimg={data.profileimg} id={data._id} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MainBar;
