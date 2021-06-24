import React, { createContext, useState } from 'react'
import { baseApi } from '../APISettings'

export const CategoryContext = createContext()

export const CategoryProvider = props => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch(`${baseApi.apiBaseUrl}/categories`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(res => res.json())
            .then(setCategories)
    }

    return (
        <CategoryContext.Provider value={{
            categories, getCategories
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}