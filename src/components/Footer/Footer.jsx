import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 border-t ">
    <div className="relative z-10 mx-auto max-w-7xl px-4">
       <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
             <div className="flex h-full flex-col justify-between">
                <div className="mb-4 inline-flex items-center pl-3">
                   <Logo width="100px" />
                </div>
                <div>
                   <p className="text-sm text-gray-600">
                      &copy; Copyright 2023.Owner is Aakash Malviya
                   </p>
                </div>
             </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12 ">
             <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                   Company
                </h3>
                <ul>
                   <li className="mb-4 text-base font-medium text-black hover:text-gray-400">
                      
                         Features
                     
                   </li>
                   <li className="mb-4  text-base font-medium text-black hover:text-gray-400">
                     
                         Pricing
                      
                   </li>
                   <li className="mb-4  text-base font-medium text-black hover:text-gray-400">
                      
                         Affiliate Program
                      
                   </li>
                   <li className=' text-base font-medium text-black hover:text-gray-400'>
                
                         Press Kit
                     
                   </li>
                </ul>
             </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
             <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-400">
                   Support
                </h3>
                <ul>
                   <li className="mb-4  text-base font-medium text-black hover:text-gray-400">
                     
                         Account
                     
                   </li>
                   <li className="mb-4  text-base font-medium text-black hover:text-gray-400">
                      
                         Help
                     
                   </li>
                   <li className="mb-4  text-base font-medium text-black hover:text-gray-400">
                      
                         Contact Us
                      
                   </li>
                   <li className=' text-base font-medium text-black hover:text-gray-400'>
                     
                         Customer Support
                      
                   </li>
                </ul>
             </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
             <div className="h-full ">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                   Legals
                </h3>
                <ul>
                   <li className="mb-4  text-base font-medium text-black hover:text-gray-400">
                      
                         Terms &amp; Conditions
                     
                   </li>
                   <li className="mb-4  text-base font-medium text-black hover:text-gray-400">
                      
                         Privacy Policy
                     
                   </li>
                   <li className=' text-base font-medium text-black hover:text-gray-400'>
                      
                         Licensing
                      
                   </li>
                </ul>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default Footer
