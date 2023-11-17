import React, { useState } from "react";
import { useEffect } from "react";
import MainBar from "./Layouts/MainBar";
interface User{
  name:string,
  email:string,
  profileimg:string,
  _id:string
}
export default function Home():any {
  return (
    <div>
      <div>
        <main className="flex w-[87%] m-auto gap-2 ">
          <div className={`${"shadow-lg"} middle h-[99%] flex-auto w-3/6 `}>
            <MainBar/>
          </div>
        </main>
      </div>
    </div>
  );
}
