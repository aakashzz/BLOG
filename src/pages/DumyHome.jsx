import React from "react";
import {
   CheckCircle,
   ChevronDown,
   ChevronUp,
   Menu,
   Star,
   X,
} from "lucide-react";
function DumyHome() {
   return (
      <div className="w-full">
         {/* Hero Section */}
         <div className="relative w-full py-10 bg-white">
            <div className="mx-auto max-w-8xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
               <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                  <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                     Let's grow with BLOG
                  </h1>
                  <p className="mt-8 text-lg text-gray-700">
                     A BLOG is a social and resource, technology and futuristic
                     changes etc meaning full article/ Content storing that new
                     GenZ scaling a new journey.
                  </p>
                  
               </div>
               <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                  <img
                     className=" bg-white "
                     src="../../public/blog-poster.jpeg"
                  />
               </div>
            </div>
         </div>
         {/* Features Section */}
        
         {/* FAQs */}
         <section className="mx-auto max-w-7xl bg-white px-2 py-14 md:px-0">
            <div>
               <div className="mx-auto max-w-2xl lg:text-center">
                  <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                     Frequently Asked Questions
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                    some question about BLOG
                  </p>
               </div>
               <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
                  <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
                     <button
                        type="button"
                        className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                     >
                        <span className="flex text-lg font-semibold text-black">
                           How do I get started?
                        </span>

                        <ChevronUp className="h-5 w-5 text-gray-500" />
                     </button>
                     <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                        <p className="text-gray-500">
                           Go Login/ Signup page and enter information than login and enjoy.
                        </p>
                     </div>
                  </div>
                  {Array.from({ length: 2 }).map((_, i) => (
                     <div
                        key={i}
                        className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
                     >
                        <button
                           type="button"
                           className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                        >
                           <span className="flex text-start text-lg font-semibold text-black">
                              What is the difference between a free and paid
                              account?
                           </span>
                           <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
                        </button>
                     </div>
                  ))}
               </div>
               <p className="textbase mt-6 text-center text-gray-600">
                  Can&apos;t find what you&apos;re looking for?{" "}
                  <a
                     href="#"
                     title=""
                     className="font-semibold text-black hover:underline"
                  >
                     Contact our support
                  </a>
               </p>
            </div>
         </section>
         {/* Pricing Section */}
         

       

         {/* footer */}
      </div>
   );
}

export default DumyHome;
