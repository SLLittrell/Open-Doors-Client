import React, { createContext, useState } from 'react'
import { baseApi } from '../APISettings'

export const UserContext = createContext();

export const UserProvider = props => {
    const [users, setUsers] = useState([])

    const getAllUsers = () => {
        return fetch(`${baseApi.apiBaseUrl}/users`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(res => res.json())
            .then(setUsers)
    }

    const getUserById = (id) => {
        return fetch(`${baseApi.apiBaseUrl}/users/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(res => res.json())
    }

    const updateAdminStatus = user => {
        return fetch(`${baseApi.apiBaseUrl}/users/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("open_token")}`
          },
          body: JSON.stringify(user)
        })
          .then(getAllUsers)
      }

    return (
        <UserContext.Provider value={{
            users, getAllUsers, getUserById, updateAdminStatus
        }}>
            {props.children}
        </UserContext.Provider>
    )
}