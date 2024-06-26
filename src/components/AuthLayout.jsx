import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
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
           <Loading />
         ) : (
            <div>{children}</div>
         )}
      </>
   );
}
export default AuthLayout;
