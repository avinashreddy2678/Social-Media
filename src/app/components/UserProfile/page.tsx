import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import EditIcon from "@mui/icons-material/Edit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Logout from "./Logout";
import axios from "axios";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import useAllusers from "@/app/hooks/useAllusers";

interface PageProps {
  name: string;
  email: string;
  profileimg: string;
}

const Page = () => {
  const router = useRouter();
  const { data, fetchData, refreshData } = useCurrentUser();
  const [dataone, setdata] = useState([data]);
  const { allusersdata } = useAllusers();
  // console.log(allusersdata)
  useEffect(() => {
    // This effect will run when data changes
    setdata(data);
  }, [data,refreshData]);
  // console.log(dataone)
  const hanldelogout = async () => {
    const response = await axios.get("api/users/logout");
    if (response) {
      refreshData();
      router.push("/Login");

       setdata(data);
    }
  };
  console.log(data);
  return (
    <>
      {dataone && (
        <div className="flex flex-col">
          <div className="userimage py-3 flex justify-center">
            <Image
              className=" h-20 w-20 rounded-full"
              src={dataone.profileimg}
              height={0}
              width={0}
              alt=""
            />
          </div>
          <div className="editUser btn w-[70%] m-auto flex justify-center align-middle">
            Edit Profile
            <EditIcon className=" cursor-pointer" />
          </div>
          <div className="name">
            <p className="text-center">{dataone.name}</p>
            <p className="text-center">{dataone.email}</p>
          </div>
          <div className="joinedon text-center">
            <CalendarMonthIcon />
            <span>Joined on 2nd Nov 2023</span>
          </div>

          <div className="userfollow text-center flex justify-center">
            <Link href={"/followers"}>
              Followers<span className="px-2">-20</span>
            </Link>
            <Link href={"/followers"}>
              Following<span className="px-2">-20</span>
            </Link>
          </div>
          <Logout logout={hanldelogout} />
        </div>
      )}
    </>
  );
};
export default Page;
