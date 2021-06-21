import React, { useContext, useEffect, useState } from "react"
import { Button, Nav } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { ProfileContext } from "../auth/ProfileProvider"
import "./NavBar.css"


export const NavBar = (props) => {
    const history = useHistory()
    const { profile, getProfile } = useContext(ProfileContext)
    const [isStaff, setIsStaff] = useState()

    useEffect(() => {
        getProfile()
    }, [])
    console.log(profile)
    useEffect(()=>{
         if(profile.user?.user.is_staff === true){
            setIsStaff(true)
            
        }
    },[profile])

    return (
        <nav class="menu" tabindex="0">
        <ul className="navbar">
            <li tabIndex="1" className="icon-users">
                <Nav.Link className="nav-link" href="/profile">Home</Nav.Link>
            </li>
            <li tabIndex="2" className="icon-attractions">
                <Nav.Link className="nav-link" href="/attractions">Search Attractions</Nav.Link>
            </li>
            <li tabIndex="3" className="icon-story">
                <Nav.Link className="nav-link" href="/stories">Social Stories</Nav.Link>
            </li>
                
            <li tabIndex="4" className="icon-story">
                <Nav.Link className="nav-link" href="/stories/create">Create Social Stories</Nav.Link>
            </li> 
                
            <li tabIndex="4" className="icon-schedule">
                <Nav.Link className="nav-link" href="/schedules">Visual Schedules</Nav.Link>
            </li> 

            <li tabIndex="4" className="icon-schedule">
                <Nav.Link className="nav-link" href="/schedules/create">Create Schedules</Nav.Link>
            </li>
                
            <li tabIndex="5" className="icon-library">
                <Nav.Link className="nav-link" href="/library">My Library</Nav.Link>
            </li>
            <li tabIndex="6" className="icon-dashboard">
                <Nav.Link className="nav-link" href="/myposts">My Posts</Nav.Link>
            </li>
                
            <li tabIndex="7" className="icon-dashboard">
                <Nav.Link className="nav-link" href="/posts/create">Add Post</Nav.Link>
            </li>
            {isStaff ? <li tabIndex="8" className="icon-dashboard">
                <Nav.Link className="nav-link" href={`/admin/${profile.user?.user.id}`}>Admin Portal</Nav.Link>
            </li>: <></>}
            
               
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li tabindex="5"  class="icon-logout">
                           <Link className="nav-link" onClick={() => {
                                localStorage.removeItem("lu_token")
                                history.push({ pathname: "/" })
                            }}>
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
