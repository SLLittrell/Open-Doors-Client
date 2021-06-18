import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import {StoryContext } from './StoryProvider'

export const Library = () => {
    const {getStories, stories} =useContext(StoryContext)
    const userId = parseInt(localStorage.getItem(`lu_token`))
    const [filterStory, setFilterStory] =useState()

    useEffect(() =>{
        getStories()
    },[])

    useEffect(()=>{
        const currentUser = stories.filter(story => parseInt(story.user.id)=== userId)
            setFilterStory(currentUser)
    },[])

    return (
        <>
            <h2>My Social stories</h2>
            <div>
                {stories.map((story)=> filterStory ? 
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>{story.title}</Card.Header>
                    <Card.Body>
                    <Card.Title>{story.pdf}</Card.Title>
                    </Card.Body>
                </Card> : <></>)}
            </div>
        </>
    )
}

