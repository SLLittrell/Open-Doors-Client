import React, { useEffect, useContext, useState } from "react"
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
    
    console.log(currentUser)
    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: {currentUser.user?.first_name} {currentUser.last_name}
                </div>
                <div className="profile__username">Username: {currentUser.user?.username}</div>
            </section>
        </article>
    )
}