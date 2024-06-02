import React from "react";
import Container from "./container/Container";
import Button from "./Button";
import appwriteService from "../appwrite/configur";
import { Link, useNavigate} from "react-router-dom";
import parse from "html-react-parser";
function ListPost({$id, content, title, featuredImage}) {
   const navigate = useNavigate();
   function openPost(){
      navigate(`/post/${$id}`)
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
                        Aakash Malviya, 13 May 2024
                     </h2>
                     <p className="font-Inter text-sm sm:text-2xl font-bold md:pt-2 ">
                        {title}
                     </p>
                     <p className=" w-fit h-16 sm:w-full pt-1 font-Inter text-black sm:pt-5 text-[7px] sm:text-sm">
                        {parse(content)}
                     </p>
                     <Button onClick={openPost} bgColor="bg-pink-200" textColor="text-red-500">
                        More About
                     </Button>
                  </div>
               </div>
               
         </Container>
      </div>
   );
}

export default ListPost;
