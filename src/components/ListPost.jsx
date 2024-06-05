import React from "react";
import Container from "./container/Container";
import Button from "./Button";
import appwriteService from "../appwrite/configur";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
function ListPost({ $id, content, title, featuredImage }) {
   const navigate = useNavigate();
   function openPost() {
      navigate(`/post/${$id}`);
   }
   return (
      <div className="py-2">
         <Container>
            <div className="grid grid-cols-11 h-40 justify-items-center sm:h-80 border gap-6 py-6 md:px-10">
               <div className="col-span-5 ">
                  <img
                     src={appwriteService.getFileView(featuredImage)}
                     className=" sm:h-auto sm:w-[400px]"
                     alt={title}
                  />
               </div>
               <div className=" h-36 sm:pl-5 sm:h-fit sm:w-full col-span-6">
                  <h2 className="font-Inter text-[12px] font-bold  text-purple-600 sm:text-xl  ">
                  {/* {$createdAt.substring(0,10)} */}
                  </h2>
                  <h3 className="font-Inter text-sm sm:text-2xl font-bold md:pt-2 ">
                     {title}
                  </h3>
                  <article  className=" w-fit h-fit sm:w-full pt-1 font-Inter text-black sm:pt-5 text-[7px] sm:text-sm" >
                     {parse(content)}
                  </article>
                  <Button
                     onClick={openPost}
                     bgColor="bg-pink-200"
                     textColor="text-red-500"
                     className='font-Inter text-[8px] rounded-xl px-1.5 py-0.5 sm:text-sm sm:rounded-lg font-medium mt-2'
                  >
                     More About
                  </Button>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default ListPost;
