import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineMenuUnfold, AiFillCloseCircle } from 'react-icons/ai';
import { VscBook } from 'react-icons/vsc';
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './NavBar.local.css'

const NavBar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const [open, setOpen] = useState(false)


    return (

        <nav className='navbar z-10	'>
            <Link to='/' className='nav-logo btn btn-ghost'>
                <div className='flex items-center text-3xl font-bold'>
                    <VscBook className=''></VscBook>&nbsp;
                    <span className=''>Islami Alo</span>
                </div>
            </Link>
            <ul className={open ? "nav-links active" : "nav-links"}>
                <span onClick={() => setOpen(!open)} className='xl:hidden sm:flex flex-col justify-center'>
                    {
                        user ? <>
                            <span className='text-center'>{user?.displayName.split(" ")[0]}</span>
                            <br />
                            <Link onClick={logout} className="nav-link btn btn-accent btn-sm" to='/login'>Log Out</Link>
                        </>
                            : <Link className="nav-link btn btn-accent" to='/login'>Log In</Link>
                    }
                </span>
                <li onClick={() => setOpen(!open)} className="nav-item-list" id='home'><Link className="nav-link" to='/home'>Home</Link></li>
                <li onClick={() => setOpen(!open)} className="nav-item-list"><Link className="nav-link" to='/books'>Books</Link></li>
                {/* <li onClick={() => setOpen(!open)} className="nav-item-list"><Link className="nav-link" to='/announcments'>Announcments</Link></li> */}
                <li onClick={() => setOpen(!open)} className="nav-item-list"><Link className="nav-link" to='/videos'>Videos</Link></li>
                <li onClick={() => setOpen(!open)} className="nav-item-list"><Link className="nav-link" to='/photoes'>Photos</Link></li>
                {
                    user ? <li onClick={() => setOpen(!open)} className="nav-item-list" id='home'><Link className="nav-link" to='/dashboard'>Dashboard</Link></li>
                        : ""
                }
            </ul>
            <span onClick={() => setOpen(!open)} className='menu-icon'>
                {
                    !open ? <AiOutlineMenuUnfold /> : <AiFillCloseCircle />
                }
            </span>
            <span onClick={() => setOpen(!open)} className='sm:hidden xl:flex'>
                {
                    user ? <>
                        <span className='mr-3'>{user?.displayName.split(" ")[0]}</span>
                        <Link onClick={logout} className="nav-link btn btn-accent btn-sm" to='/login'>Log Out</Link>
                    </>
                        : <Link className="nav-link btn btn-accent btn-sm" to='/login'>Log In</Link>
                }
            </span>

        </nav>
    );
};

export default NavBar;