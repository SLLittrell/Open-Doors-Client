import React, { createContext, useState } from 'react'

export const StoryContext = createContext()

export const StoryProvider = props => {
    const [stories, setStories] = useState([])
    const [story, setStory] = useState({})

    const getStories = () => {
        return fetch(`http://localhost:8000/stories`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(res => res.json())
            .then(setStories)
    }
    
    const getStoryById = (storyId) => {
        return fetch(`http://localhost:8000/stories/${storyId}`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(res => res.json())
            .then(setStory)
    }

    const addStory = storyObj => {
        return fetch("http://localhost:8000/stories", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(storyObj),
        })
        .then(()=>getStories)
    }

    return (
        <StoryContext.Provider value={{
            addStory, getStories, stories, getStoryById, story

        }}>
            {props.children}
        </StoryContext.Provider>
    )
}