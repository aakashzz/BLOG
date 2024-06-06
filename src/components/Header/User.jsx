import React from 'react'
import {Link} from 'react-router-dom'
import userImage from '../../../public/static/userIcon.svg'

function User() {
  return (
   
      <div className='h-16 rounded-full w-fit cursor-pointer'>
        <Link to={`/user`}> 
            <img src={userImage}className='h-16 rounded-full' alt="" />
        </Link>
      </div>
   
  )
}

export default User
