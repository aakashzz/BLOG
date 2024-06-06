import React from 'react'
import logo from '../../public/static/logo.svg'

function Logo() {
  return (
    <div className='h-16 min-w-36 flex justify-start items-center'>
        <img src={logo} className='sm:h-16 md:h-16 h-12' alt="" />
    </div>
  )
}

export default Logo
