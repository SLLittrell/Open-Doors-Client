import React, { createContext, useState } from 'react'

export const StoryContext = createContext()

export const StoryProvider = props => {
    const [stories, setStories] = useState([])

    const getStories = () => {
        return fetch(`http://localhost:8000/stories`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(res => res.json())
            .then(setStories)
    }

    const addStory = storyObj => {
        return fetch("http://localhost:8000/stories", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(storyObj),
            responseType: 'blob' //Force to receive data in a Blob Format
        })
        .then(response => {
            //Create a Blob from the PDF Stream
                const file = new Blob(
                  [response.data], 
                  {type: 'application/pdf'});

                console.log(file)

            //Build a URL from the file
                const fileURL = URL.createObjectURL(file);
            //Open the URL on new Window
                window.open(fileURL);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <StoryContext.Provider value={{
            addStory, getStories, stories

        }}>
            {props.children}
        </StoryContext.Provider>
    )
}