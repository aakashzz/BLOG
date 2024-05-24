import React from "react";
import Container from "./container/Container";
import Button from "./Button";

function Main() {
   return (
      <main className="h-auto">
         <Container>
            {/* // slider component ready */}
            <div className=" w-full h-40 sm:h-fit bg-white border border-gray-300 mt-8 rounded-lg  flex justify-between">
               <div className="p-2 pl-4 sm:w-full w-fit md:p-14 md:w-1/2 ">
                  <h2 className="font-Inter text-sm sm:text-lg font-bold text-purple-600 md:text-2xl ">
                     Monday , 13 May 2024
                  </h2>
                  <p className="font-Inter sm:text-xl text-base  font-bold  md:text-3xl md:pt-2">
                     Frontend Development
                  </p>
                  <p  className=" sm:w-full w-fit sm:max-h-fit font-Inter text-xs sm:text-base text-gray-500 sm:pt-5">
                            How do you create compelling presentations that wow your
                            colleagues and impress your managers? 
                        </p>
                        <Button className="mt-2 sm:mt-5 " bgColor="bg-pink-200" textColor="text-red-500" children={"Read More"} />
               </div>
               <div className="flex w-fit justify-center p-1 sm:p-6">
                  <img
                     src="../../public/Imagedemopng.png"
                     className=" sm:w-fit w-80 h-36 sm:h-auto px-4 py-2 md:max-h-80  "
                     alt=""
                  />
               </div>
            </div>
         </Container>
      </main>
   );
}

export default Main;
