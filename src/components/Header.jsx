import React from 'react'
import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout,reset } from '../features/auth/authSlice'

function Header() {


    const {user,onLogout} = useSelector((state)=>state.auth)

  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>Support Desk</Link>
        </div>
        <ul>
            {user?(
                <li>
                    <button onClick={onLogout} className="btn">
                        <FaSignOutAlt/>Logout
                    </button>
                </li>
            ):(
                <>
                <li>
                <Link to='/login'>
                    <FaSignInAlt/>Sign In
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser/>Register
                </Link>
            </li></>
            )}
           
        </ul>
    </header>
  )
}

export default Header