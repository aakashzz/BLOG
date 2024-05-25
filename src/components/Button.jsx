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
      className={`${className} ${bgColor} ${textColor}`}
      {...props}
      >
        {children}
      </button>
   );
}

export default Button;
