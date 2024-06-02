import React from "react";


function Button({
   type,
   className,
   children,
   bgColor = "",
   textColor = "",
   ...props
}) {
   return (
      <button
      
      className={`${className ? className : "text-xs sm:text-sm font-Inter sm:font-medium sm:p-1.5 p-0.5 rounded-full mt-2 sm:mt-5 "} ${bgColor} ${textColor}`}
      {...props}
      >
        {children}
      </button>
   );
}

export default Button;
