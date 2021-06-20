import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { AttractionContext } from '../attractions/AttractionProvider'
import { ScheduleContext } from '../schedules/ScheduleProvider'
import {StoryContext } from './StoryProvider'

export const Library = () => {
    const {getStories, stories} =useContext(StoryContext)
    const {getSchedules, schedules}=useContext(ScheduleContext)
    const{getAttractionDetails, details} = useContext(AttractionContext)
    const userId = parseInt(localStorage.getItem(`lu_token`))
    const history =useHistory()
    const [filterStory, setFilterStory] =useState()

    useEffect(() =>{
        getStories()
        .then(()=>getSchedules()
    )},[])


 

    useEffect(()=>{
        const currentUser = stories.filter(story => parseInt(story.user.id)=== userId)
            setFilterStory(currentUser)
    },[])

    return (
        <>
            <h2>My Social Stories</h2>
            <Row>
                <Col>
                {stories.map((story)=> filterStory ? 
                <Card key ={story.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={story.title_image} />
                <Card.Body>
                  <Card.Title>{story.titlepage}</Card.Title>
                  <Card.Text>{}</Card.Text>
                  <Button variant="primary" onClick={()=> history.push(`./story/${story.id}`)}>View Story</Button>
                </Card.Body>        
              </Card> : <></>)}
              </Col>
              <Col>
              <h2>My Visual Schedules</h2>
              {schedules.map((sched)=>
              <Card key ={sched.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={sched.image_1} />
              <Card.Body>
                <Card.Title>{sched.title}</Card.Title>
                <Button variant="primary" onClick={()=> history.push(`./story/${sched.id}`)}>View Story</Button>
              </Card.Body>        
            </Card>
              )}</Col>
            </Row>
        </>
    )
}

