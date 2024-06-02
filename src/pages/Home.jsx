import React, { useEffect, useState } from "react";
import TempComp from "../components/Slider/TempComp";
import ListPost from "../components/ListPost";
import appwriteService from "../appwrite/configur";
function Home() {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      appwriteService
         .listPost([])
         .then((data) => {
            if (data) {
               if (data.documents.length === data.total) {
                  //   console.log(data.total);
                  //   console.log(data.documents);
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
         <TempComp />
         {posts.map((post) => (
            <div key={post.$id} className="">
               <ListPost {...post} />
            </div>
         ))}
      </div>
   );
}

export default Home;
