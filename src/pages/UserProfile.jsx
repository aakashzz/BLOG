import React, { useEffect, useState } from "react";
import Logout from "../components/Header/Logout";
import Container from "../components/container/Container";
import { useSelector } from "react-redux";

function UserProfile() {
   const userData = useSelector(state => state.auth.userData);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (userData) {
      setUserName(userData.name || '');
      setUserEmail(userData.email || '');
    }
  }, [userData]);

   return (
      <div className="h-screen">
         <Container>
            
            <div className="sm:h-60 w-full border">
               <div className="flex h-full  justify-center gap-2">
                  <div className=" h-fit w-auto pt-6 sm:p-4 ">
                     <img
                        src="../../public/DP.svg"
                        className=" rounded-full w-14 sm:w-32 lg:w-40 "
                        alt=""
                     />
                  </div>
                  <div className="lg:w-96 h-fit w-fit  sm:w-fit py-8">
                     <p className="font-Inter text-sm sm:text-xl font-bold   md:text-3xl md:pt-2 md:text-left">
                        {userName }
                     </p>
                     <p className=" sm:w-fit sm:pt-2 font-Inter text-xs sm:text-base md:text-left">
                        {userEmail }
                     </p>
                     <span className=" block pt-3">
                        <Logout />
                     </span>
                  </div>
               </div>
            </div>
            <div className=" h-auto w-full mt-4">
               <h1 className="font-Inter lg:text-2xl sm:text-xl text-base font-bold">
                  Post:
               </h1>
               <div className="h-auto w-3/4">{/* post list */}</div>
            </div>
         </Container>
      </div>
   );
}

export default UserProfile;
