import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function AuthLayout({ children, authentication = true }) {
   const authStatus = useSelector((state) => state.auth.status);
   const navigate = useNavigate("/");
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      if (authentication && authStatus !== authentication) {
         navigate("/login");
      } else if (!authentication && authStatus !== authentication) {
         navigate("/");
      }
      setLoading(false);
   }, [authStatus, navigate, authentication]);
   return (
      <>
         {loading ? (
            <div className="w-full h-screen gap-x-2 flex justify-center items-center">
               <div className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"></div>
               <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"></div>
               <div className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"></div>
            </div>
         ) : (
            <div>{children}</div>
         )}
      </>
   );
}
export default AuthLayout;
