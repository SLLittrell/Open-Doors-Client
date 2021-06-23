import React, { useEffect, useContext, useState } from "react"
import { Nav } from "react-bootstrap"
import ModalHeader from "react-bootstrap/esm/ModalHeader"
import { Link } from "react-router-dom"
import { ProfileContext } from "./auth/ProfileProvider"
import "./Profile.css"

export const Profile = () => {
    const { profile, getProfile } = useContext(ProfileContext)
    const [users, setUser] =useState()
    const [currentUser, setCurrentUser] =useState()

    useEffect(() => {
        getProfile()
    }, [])


    
    return (
        <>
            
                <article className="profile">
                    <header className="profileHeader">
                    <nav>
                        <h4>{profile.user?.user.first_name}</h4>
                    </nav> 
                    </header>
                </article>
        </>
    )
}