import React from 'react'
import {Link} from 'react-router-dom'

function UserIcon() {
  const userName = "Aakash-Malviya"
  return (
   
      <div className='h-16 rounded-full w-fit cursor-pointer'>
        <Link to={`/user`}> 
            <img src="../../../public/userIcon.svg" className='h-16 rounded-full' alt="" />
        </Link>
      </div>
   
  )
}

export default UserIcon
