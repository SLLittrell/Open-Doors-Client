import React from "react"
import { Button } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"


export const NavBar = (props) => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/profile">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/attractions">Search Attractions</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/stories">Social Stories</Link>
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/schedules">Visual Schedules</Link>
            </li>
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="navbar__item">
                        <Button className="btn"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</Button>
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
    )
}
