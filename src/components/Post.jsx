import React from 'react'
import Container from './container/Container'

function Post({userName, dateTime, content,}) {
  return (
    <div className='py-8 border'>
        <Container>
            <div className='grid  justify-items-center'>
                <div className='flex justify-center'>
                    <img src="../../public/post.png" className=' w-80 sm:w-auto md:w-auto' alt="" />
                </div>
                <div className='w-80 sm:w-full py-8 lg:px-44'>
                    <h2 className="font-Inter text-xs    sm:text-lg font-bold  text-purple-600 md:text-2xl md:text-left ">
                        Monday , 13 May 2024
                    </h2>
                    <p className="font-Inter text-sm sm:text-xl font-bold  md:text-3xl md:pt-2 md:text-left">
                        Frontend Development
                    </p>
                    <p className="  sm:w-full sm:pt-5 font-Inter text-xs sm:text-base pt-2  md:text-left">
                                How do you create compelling presentations that wow your
                                colleagues and impress your managers?{" "}
                    </p>
                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Post
