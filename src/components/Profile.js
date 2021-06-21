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
        </>
    )
}