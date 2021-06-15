import React, { createContext, useState } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    /*
        Must profile a default value for the `events` property
        so that React doesn't throw an error when you try to
        iterate the events array in the view.
    */
    const [profile, setProfile] = useState({events:[]})

    const getProfile = () => {
        return fetch("http://localhost:8000/profiles", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
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