import React, { useEffect, useContext, useState } from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ProfileContext } from "./auth/ProfileProvider"
import "./Profile.css"

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
                </article>
                <section className="userProfile">
                    <article className='user_nav'>
                    {/* <Nav fill variant = "tabs" defaultActiveKey="/home" className="justify-content-center">
                        <Nav.Link href="/profile">Home</Nav.Link>
                        <Nav.Link href="/library">My Library</Nav.Link>
                        <Nav.Link href="/myposts">My Posts</Nav.Link>
                        <Nav.Link href="/posts/create">Add Post</Nav.Link>
                        <Nav.Link href="/stories/create">Create Social Stories</Nav.Link>
                        <Nav.Link href="/schedules/create">Create Schedules</Nav.Link>
                    </Nav> */}
                    </article>
                </section>
        </>
    )
}