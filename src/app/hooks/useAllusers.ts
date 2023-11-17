import axios from "axios";
import { useEffect, useState } from "react";
const useAllusers = () => {
    const [allusersdata,setdata]=useState([]);
  const getusers = async () => {
    const res:any = await axios.get("api/users/allusers");
    setdata(res.data.allusers);
  };
  useEffect(()=>{
    getusers();
  },[])
  const refreshalluser=()=>{
    getusers();
  }
  return {
    getusers,
    allusersdata,
    refreshalluser
  }
};

export default useAllusers;
