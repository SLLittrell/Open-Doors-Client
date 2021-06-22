import React, { createContext, useState } from 'react'

export const StoryContext = createContext()

export const StoryProvider = props => {
    const [stories, setStories] = useState([])
    const [oneStory, setOneStory] = useState({})

    const getStories = () => {
        return fetch(`http://localhost:8000/stories`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(res => res.json())
            .then(setStories)
    }
    
    const getStoryById = (storyId) => {
        return fetch(`http://localhost:8000/stories/${storyId}`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(res => res.json())
            .then(setOneStory)
    }

    const addStory = storyObj => {
        return fetch("http://localhost:8000/stories", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(storyObj),
        })
        .then(()=>getStories)
    }

    const updateStory = story => {
        return fetch(`http://localhost:8000/stories/${story.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(story)
        })
            .then(getStories)
    }

    const deleteStory = storyId => {
        return fetch(`http://localhost:8000/stories/${storyId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(getStories)
            .then(setStories)
    }

    return (
        <StoryContext.Provider value={{
            addStory, getStories, stories, getStoryById, oneStory, deleteStory, updateStory

        }}>
            {props.children}
        </StoryContext.Provider>
    )
}