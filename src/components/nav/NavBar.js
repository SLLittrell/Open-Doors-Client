import React, { useContext, useEffect, useState } from "react"
import { Button, Nav } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { ProfileContext } from "../auth/ProfileProvider"
import "./NavBar.css"


export const NavBar = (props) => {
    const history = useHistory()
    const { profile, getProfile } = useContext(ProfileContext)
    const [isStaff, setIsStaff] = useState()

    // Get Profile of current user
    useEffect(() => {
        getProfile()
    }, [])

    // Check to see if user is staff for admin privileges
    useEffect(()=>{
         if(profile.user?.user.is_staff === true){
            setIsStaff(true)
            
        }
    },[profile])

    return (
        <nav className="menu" tabIndex="0">
        <ul className="navbar">
            <li tabIndex="1" className="icon-logo">
                <div className="nav-link">OpenDoors</div>
            </li>
            <li tabIndex="1" className="icon-profile">
                <div className="nav-link">{profile.user?.user.first_name}</div>
            </li>
            <li tabIndex="1" className="icon-users">
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
            </li>
            <li tabIndex="2" className="icon-attractions">
                <Nav.Link className="nav-link" href="/attractions">Search Attractions</Nav.Link>
            </li>
            <li tabIndex="3" className="icon-story">
                <Nav.Link className="nav-link" href="/stories">Social Stories</Nav.Link>
            </li> 
                
            <li tabIndex="4" className="icon-schedule">
                <Nav.Link className="nav-link" href="/schedules">Visual Schedules</Nav.Link>
            </li> 

            <li tabIndex="5" className="icon-library">
                <Nav.Link className="nav-link" href="/library">My Library</Nav.Link>
            </li>
            <li tabIndex="6" className="icon-dashboard">
                <Nav.Link className="nav-link" href="/profile">Community Board</Nav.Link>
            </li>
            <li tabIndex="6" className="icon-dashboard">
                <Nav.Link className="nav-link" href="/myposts">My Posts</Nav.Link>
            </li>
                
            <li tabIndex="7" className="icon-dashboard">
                <Nav.Link className="nav-link" href="/posts/create">Add Post</Nav.Link>
            </li>
            {/* If Staff show link to admin portal */}
            {isStaff ? <li tabIndex="8" className="icon-dashboard">
                <Nav.Link className="nav-link" href={`/admin/${profile.user?.user.id}`}>Admin Portal</Nav.Link>
            </li>: <></>}
            
               
            {
                (localStorage.getItem("open_token") !== null) ?
                    <li tabIndex="5"  className="icon-logout">
                           <Link className="nav-link" onClick={() => {
                                localStorage.removeItem("open_token")
                                history.push({ pathname: "/" })
                            }} to='/'>
                        Logout</Link>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        
                    </>
            }        </ul>
            </nav>
    )
}
