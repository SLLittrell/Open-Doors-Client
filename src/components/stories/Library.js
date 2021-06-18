import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import {StoryContext } from './StoryProvider'

export const Library = () => {
    const {getStories, stories} =useContext(StoryContext)
    const userId = parseInt(localStorage.getItem(`lu_token`))
    const history =useHistory()
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
                <Card key ={story.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={story.title_image} />
                <Card.Body>
                  <Card.Title>{story.titlepage}</Card.Title>
                  <Button variant="primary" onClick={()=> history.push(`./story/${story.id}`)}>View Story</Button>
                </Card.Body>
              </Card> : <></>)}
            </div>
        </>
    )
}

