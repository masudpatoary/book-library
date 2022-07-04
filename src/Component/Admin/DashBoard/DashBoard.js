import React, { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { RiLayoutGridFill } from 'react-icons/ri';
import './Dashboard.local.css'

const DashBoard = () => {
    const [open, setOpen] = useState(false)
    const listItems = <>
        <li><Link to='/dashboard/addbook'>Add Book</Link></li>
        <li><Link to='/addnews'>Add News</Link></li>
        <li><Link to='/adannouncement'>Add Announcement</Link></li>
        <li><Link to='/addphoto'>Add Photo</Link></li>
        <li><Link to='/addvideo'>Add Video</Link></li>
    </>

    const activeLink = ({ isActive }) => {
        return (
            {
                color: isActive ? "#fff" : "#000", fontWeight: isActive ? "700" : "400",
            }
        )
    }
    return (

        <div  className="dashboard">
            <div className='bg-primary menubar ' onClick={() => setOpen(!open)}>
                <h4 className='justify-self-start pl-5 font-bold text-xl text-base-100'>Dashboard</h4>
                <ul className={open ? "nav-links active" : "nav-links"}>
                    <li >
                        <NavLink
                            to="/dashboard/addbook"
                            style={activeLink}
                            className="btn btn-ghost btn-sm"
                        >
                            Add Book
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/addnews"
                            style={activeLink}
                            className="btn btn-ghost btn-sm"
                        >
                            Add News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/adannouncement"
                            style={activeLink}
                            className="btn btn-ghost btn-sm"
                        >
                            Add Announcement
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/addphoto"
                            style={activeLink}
                            className="btn btn-ghost btn-sm"
                        >
                            Add Photo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/addvideo"
                            style={activeLink}
                            className="btn btn-ghost btn-sm"
                        >
                            Add Video
                        </NavLink>
                    </li>
                </ul>
                <span onClick={() => setOpen(!open)} className='menu-icon justify-self-end'>
                    {
                        !open ? <RiLayoutGridFill /> : <RiLayoutGridFill />
                    }
                </span>
            </div>
            <div className='bg-base-100 w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;