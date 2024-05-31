import React, { useId } from "react";

function Selector({ options, label, className, ...props }, ref) {
   const id = useId();
   return (
      <div className="w-full">
         {label && <label htmlFor="" className="">{label}</label>}
         <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
         >
            {options.map((item) => (
               <option key={item} value={item}>
                  {item}
               </option>
            ))}
         </select>
      </div>
   );
}

export default React.forwardRef(Selector);