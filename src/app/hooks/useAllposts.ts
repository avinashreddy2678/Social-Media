import axios from 'axios'
import { useEffect, useState } from 'react'
const useAllPosts=()=>{
    const [allposts,setallposts]=useState([]);
    const fetchdata = async () => {
        const res = await axios.get("/api/users/Allposts");
        //console.log(res)
        setallposts(res.data.allPosts);
      };
//getting data in the from of array [ one,two,{three,four},five  ]


      useEffect(() => {
        fetchdata();
      }, []);
      const refreshAllPosts=()=>{
        fetchdata();
      }
return{
    allposts,
    refreshAllPosts
}
}
export default useAllPosts;