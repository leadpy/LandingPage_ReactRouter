import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

function Navbar(props){
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return(
        <div className='flex flex-col md:flex-row gap-8 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
          <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
          </Link>

          {/* Login - Signup - LogOut - Dashboard */}
          <div className='flex items-center gap-x-4'>
            {  !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Login</button>
                </Link>
            }
            {   !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>SignUp</button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/">
                    <button onClick={() =>{
                        setIsLoggedIn(false)
                        toast.success("Logged Out");
                    }} className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>LogOut</button>
                </Link>
            }
            {
                isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
                </Link>
            }
          </div>
        </div>
    )
};

export default Navbar;