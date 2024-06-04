import React, { useEffect, useState } from "react";
import Logout from "../components/Header/Logout";
import Container from "../components/container/Container";
import authService from "../appwrite/authService";
import Loading from "../components/Loading";
import appwriteService from '../appwrite/configur'

function UserProfile() {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState("");
   useEffect(() => {
      if (loading) {
         authService
            .getCurrentUser()
            .then((user) => setData(user))
            .finally(() => setLoading(false));
      }
      else if(loading){
      }
   }, [loading]);
   return (
      <div className="h-full">
         <Container>
            {loading ? (
               <>
                  <Loading />
               </>
            ) : (
               <>
                  <div className="sm:h-60 w-full border">
                     <div className="flex h-full  justify-center gap-2">
                        <div className=" h-fit w-auto pt-6 sm:p-4 ">
                           <img
                              src="../../public/DP.svg"
                              className=" rounded-full w-20 sm:w-32 lg:w-40 "
                              alt=""
                           />
                        </div>
                        <div className="lg:w-96 h-fit w-fit  sm:w-fit py-8">
                           <p className="font-Inter text-sm sm:text-xl font-bold   md:text-3xl md:pt-2 md:text-left">
                              {data.name}
                           </p>
                           <p className=" sm:w-fit sm:pt-2 font-Inter text-xs sm:text-base md:text-left">
                              {data.email}
                           </p>
                           <span className=" block pt-3">
                              <Logout />
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className=" w-full mt-4">
                     <h1 className="font-Inter lg:text-2xl sm:text-xl text-base font-bold">
                        Post:
                     </h1>
                     <div className="h-auto w-auto grid grid-cols-3 gap-x-2 gap-y-4 pt-4">
                        <div className="border w-full">
                           <img src="../../public/API.png" className="p-2 w-full" alt="" />
                        </div>
                        <div className="border w-full">
                           <img src="../../public/Imagedemopng.png" className="p-2 w-full" alt="" />
                        </div>
                        <div className="border w-full">
                           <img src="../../public/Imagedemopng.png" className="p-2 w-full" alt="" />
                        </div>
                     </div>
                  </div>
               </>
            )}
         </Container>
      </div>
   );
}

export default UserProfile;
