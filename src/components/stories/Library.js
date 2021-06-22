import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { AttractionContext } from '../attractions/AttractionProvider'
import { ScheduleContext } from '../schedules/ScheduleProvider'
import {StoryContext } from './StoryProvider'
import './library.css'

export const Library = () => {
    const {getStories, stories} =useContext(StoryContext)
    const {getSchedules, schedules}=useContext(ScheduleContext)
    const userId = parseInt(localStorage.getItem(`open_user_id`))
    const history =useHistory()
    const [filterStory, setFilterStory] =useState()
    const [filterSchedule, setFilterSchedule] =useState()

    useEffect(() =>{
        getStories()
        .then(()=>getSchedules()
    )},[])

    useEffect(()=>{
        const currentUser = stories.filter(story => parseInt(story.user.id)=== userId)
            setFilterStory(currentUser)
    },[stories])

    useEffect(()=>{
        const currentUser = schedules.filter(schedule => parseInt(schedule.user.id)=== userId)
            setFilterSchedule(currentUser)
    },[schedules])


    return (
        <>  
            <h2 className='header libraryStory'>My Social Stories</h2>
            <Row>
                <Col>
                {filterStory?.map((story) => 
                <Card key ={story.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={story.title_image} />
                <Card.Body>
                  <Card.Title>{story.titlepage}</Card.Title>
                  <Button variant="primary" onClick={()=> history.push(`./story/${story.id}`)}>View Story</Button>
                  <Button variant="primary" onClick={()=> history.push(`./story/edit/${story.id}`)}>Edit</Button>
                </Card.Body>        
              </Card>)}
              </Col>
              <Col>
              <h2 className="header">My Visual Schedules</h2>
              {filterSchedule?.map((sched)=>
              <Card key ={sched.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={sched.image_1} />
              <Card.Body>
                <Card.Title>{sched.title}</Card.Title>
                <Button variant="primary" onClick={()=> history.push(`./schedule/${sched.id}`)}>View Schedule</Button>
                <Button variant="primary" onClick={()=> history.push(`./schedule/edit/${sched.id}`)}>Edit</Button>
              </Card.Body>        
            </Card>
              )}</Col>
            </Row>
        </>
    )
}

