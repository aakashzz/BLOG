import React from "react";
import Container from "./container/Container";
import Button from "./Button";

function ListPost({ listPost, title, userName, desc, slug }) {
   return (
      <div className="py-8">
         <Container>
            <div className="grid grid-cols-11 h-40 justify-items-center sm:h-80 gap-6 py-6 md:px-10">
               <div className="col-span-5">
                  <img
                     src="../../public/Imagedemopng.png"
                     className=" sm:h-auto sm:w-[400px]"
                     alt=""
                  />
               </div>
               <div className=" h-36 sm:pl-5 sm:h-fit sm:w-full col-span-6">
                  <h2 className="font-Inter text-xs font-bold  text-purple-600 sm:text-xl  ">
                     Aakash malviya , 13 May 2024
                  </h2>
                  <p className="font-Inter text-sm sm:text-2xl font-bold md:pt-2 ">
                     Frontend Development
                  </p>
                  <p className=" w-36 h-16 sm:w-full font-Inter sm:pt-5 text-xs sm:text-sm" >
                     How do you create compelling presentations that wow your
                     colleagues and impress your managers ?
                  </p>
                  <Button bgColor="bg-pink-200" textColor="text-red-500">
                     More About
                  </Button>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default ListPost;
