import React, { useEffect, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ProfileContext } from "./auth/ProfileProvider"
// import "./Profile.css"


export const Profile = () => {
    const { profile, getProfile } = useContext(ProfileContext)
    const [users, setUser] =useState()
    const [currentUser, setCurrentUser] =useState()

    useEffect(() => {
        getProfile()
        .then((res) => {
            setUser(res)
        })
    }, [])

    useEffect(() => {
       const currentUser = users?.user
       setCurrentUser(currentUser)
       
    }, [setUser])
    
    return (
        <>
            <article className="profile">
                <header>
                    <h1>Welcome {profile.user?.user.first_name} {profile.user?.user.last_name}</h1>
                </header>
                <section className="profile__info">
                    <div className="profile__username">Username: {profile.user ? profile.user.user.username : <></>}</div>
                </section>
            </article>
            <article className='user_nav'>
            <ul className="navbar">
                <li className="navbar__item">
                    <Link className="nav-link" to="/profile">Home</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/library">My Library</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/myposts">My Posts</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/posts/create">Add Post</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/stories/create">Create Social Stories</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/schedules/create">Create Schedules</Link>
                </li>
            </ul>

            </article>
        </>
    )
}