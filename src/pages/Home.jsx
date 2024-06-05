import React, { useEffect, useState } from "react";
import TempComp from "../components/Slider/TempComp";
import ListPost from "../components/ListPost";
import appwriteService from "../appwrite/configur";
import { useSelector } from "react-redux";
import DumyHome from "./DumyHome";
function Home() {
   const [posts, setPosts] = useState([]);

   const userData = useSelector((state) => state.auth.status);
   useEffect(() => {
      appwriteService
         .listPost([])
         .then((data) => {
            if (data) {
               if (data.documents.length === data.total) {
                  setPosts(data.documents);
               }
            }
         })
         .catch((err) => {
            throw err;
         });
   }, [posts]);
   return (
      <div className="m-3 h-auto">
         {userData ? (
            <>
               {" "}
               <TempComp />
               {posts.map((post) => (
                  <div key={post.$id} className="">
                     <ListPost {...post} />
                  </div>
               ))}
            </>
         ) : (
            <>
            <DumyHome /></>
         )}
      </div>
   );
}

export default Home;
