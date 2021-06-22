import React, { createContext, useState } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
   
    const [profile, setProfile] = useState([])

    const getProfile = () => {
        return fetch("http://localhost:8000/profiles", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(response => response.json())
            .then((res) => setProfile(res))         
    }

    

    return (
        <ProfileContext.Provider value={{ profile, getProfile }}>
            {props.children}
        </ProfileContext.Provider>
    )
}