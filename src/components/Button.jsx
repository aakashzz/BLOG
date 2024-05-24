import React,{forwardRef} from "react";


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
      className={` text-xs sm:text-sm font-Inter sm:font-medium sm:p-1.5 p-0.5 rounded-full ${className} ${bgColor} ${textColor}`}
      {...props}
      >
        {children}
      </button>
   );
}

export default forwardRef(Button);
