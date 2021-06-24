import React, { createContext, useState } from 'react'
import { baseApi } from '../APISettings'
export const PostContext = createContext()

export const PostProvider = props => {
    const [posts, setPosts] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getPosts = () => {
        return fetch(`${baseApi.apiBaseUrl}/posts`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(res => res.json())
            .then(setPosts)
    }
    const getPostById = (id) => {
        return fetch(`${baseApi.apiBaseUrl}/posts/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(res => res.json())
                
            
    }
            

    const addPost = postObj => {
        return fetch(`${baseApi.apiBaseUrl}/posts`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
        })
        .then(getPosts)
    }

    const updatePost = post => {
        return fetch(`${baseApi.apiBaseUrl}/posts/${post.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(getPosts)
    }

    const deletePost = postId => {
        return fetch(`${baseApi.apiBaseUrl}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(getPosts)
            .then(setPosts)
    }

    

    return (
        <PostContext.Provider value={{
            posts, getPosts, getPostById, addPost, updatePost, deletePost, searchTerms, setSearchTerms
        }}>
            {props.children}
        </PostContext.Provider>
    )
}