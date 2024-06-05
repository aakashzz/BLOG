import React, { useEffect, useState } from "react";
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
               {posts.map((post) => (
                  <div key={post.$id} className="">
                     <ListPost {...post} />
                  </div>
               ))}
            </>
         ) : (
            <>
               <DumyHome />
            </>
         )}
      </div>
   );
}

export default Home;
