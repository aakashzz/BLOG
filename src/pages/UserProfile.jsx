import React, { useEffect, useState } from "react";
import Logout from "../components/Header/Logout";
import Container from "../components/container/Container";
import authService from "../appwrite/authService";
import Loading from "../components/Loading";


function UserProfile() {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState("");
   useEffect(() => {
      if (loading) {
         authService
            .getCurrentUser()
            .then((user) => {
              setData(user)
            })
            .finally(() => setLoading(false));
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
                  <section className="px-2">
                     <div className="mx-auto max-w-7xl py-10">
                        <div>
                           <div className="max-w-2xl">
                              <h1 className="text-2xl font-bold text-black">
                                 Frequently Asked Questions
                              </h1>
                              <p className="mt-4 text-sm leading-6 tracking-wide text-gray-500">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor
                                 incididunt ut labore et dolore magna aliqua. Ut
                                 enim ad minim veniam.
                              </p>
                           </div>
                           <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                              {Array.from({ length: 3 }).map((_, i) => (
                                 <div
                                    key={i}
                                    className="rounded-md border border-black/30 p-6"
                                 >
                                    <dt className="text-lg font-semibold leading-6 text-gray-900">
                                       How do I get started?
                                    </dt>
                                    <dd className="mt-2 text-sm text-gray-500">
                                       Lorem ipsum dolor sit amet consectetur,
                                       adipisicing elit. In, et? Obcaecati, nemo
                                       sit. Delectus, totam obcaecati aliquid
                                       omnis cumque ex.
                                    </dd>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </section>
               </>
            )}
         </Container>
      </div>
   );
}

export default UserProfile;
