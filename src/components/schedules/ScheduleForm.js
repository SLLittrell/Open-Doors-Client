import React, { useContext, useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from 'react-router-dom';
import { ScheduleContext } from "./ScheduleProvider";


export const ScheduleForm = () => {
    const {addSchedule, deleteSchedule, getScheduleById, updateSchedule, singleSched} = useContext(ScheduleContext)
    const {scheduleId} = useParams()
    const userId = parseInt(localStorage.getItem(`open_user_id`))
    const history = useHistory()

    useEffect(()=>{
        getScheduleById(scheduleId)
    },[])

    useEffect(() =>{
        setSchedule(singleSched)
    },[singleSched])

    // Set initial state for schedule input object
    const [schedule, setSchedule] =useState({
        user: userId,
        title: "",
        activity_1: "",
        image_1: "",
        activity_2: "",
        image_2: "",
        activity_3: "",
        image_3: "",
        activity_4: "",
        image_4: "",
        activity_5: "",
        image_5: "",
        activity_6: "",
        image_6: "",
        activity_7: "",
        image_7: "",
        activity_8: "",
        image_8:"",
        activity_9: "",
        image_9: "",
        activity_10:"", 
        image_10: ""
    })
    
    // handle change events on input fields
    const handleInputChange = (event) => {
        const newSchedule = { ...schedule }
        newSchedule[event.target.id] = event.target.value
        setSchedule(newSchedule)
    }

    // handles schedule delete with confirmation
    const handleDelete = (event) => {
        if(window.confirm("Are you sure you would like to delete this Visual Schedule?")===true){
            deleteSchedule(event.target.id)
            .then(() => {
            history.push("/library")
            })
        }
    }

    // save state and handle POST request data
    const createSchedule = () => {
        if(scheduleId){
            updateSchedule(schedule)
            .then(() => history.push('/library')) 
        }else{
          addSchedule(schedule)
        .then(() => history.push('/library'))  
        }
        
    }

    return (
        <>
            <header><h2 className="scheduleHeader">{scheduleId ?"Edit Schedule" : "Create a Visual Schedule" }</h2></header>
            <Form.Group className="storyForm">
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.title} onChange={handleInputChange} id="title" size="lg" type="text" placeholder="Title" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.activity_1} onChange={handleInputChange} id="activity_1" size="lg" type="text" placeholder="Activity 1" />
                    </Col>
                    <Col>
                    <Form.Control value={schedule.image_1} onChange={handleInputChange} id="image_1" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.activity_2} onChange={handleInputChange} id="activity_2" size="lg" type="text" placeholder="Activity 2" />
                    </Col>
                    <Col>
                    <Form.Control value={schedule.image_2} onChange={handleInputChange} id="image_2" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.activity_3} onChange={handleInputChange} id="activity_3" size="lg" type="text" placeholder="Activity 3" />
                    </Col>
                    <Col>
                    <Form.Control value={schedule.image_3} onChange={handleInputChange} id="image_3" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.activity_4} onChange={handleInputChange} id="activity_4" size="lg" type="text" placeholder="Activity 4" />
                    </Col>
                    <Col>
                    <Form.Control value={schedule.image_4} onChange={handleInputChange} id="image_4" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.activity_5} onChange={handleInputChange} id="activity_5" size="lg" type="text" placeholder="Activity 5" />
                    </Col>
                    <Col>
                    <Form.Control value={schedule.image_5} onChange={handleInputChange} id="image_5" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.activity_6} onChange={handleInputChange} id="activity_6" size="lg" type="text" placeholder="Activity 6" />
                    </Col>
                    <Col>
                    <Form.Control value={schedule.image_6} onChange={handleInputChange} id="image_6" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.activity_7} onChange={handleInputChange} id="activity_7" size="lg" type="text" placeholder="Activity 7" />
                    </Col>
                    <Col>
                    <Form.Control value={schedule.image_7} onChange={handleInputChange} id="image_7" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.activity_8} onChange={handleInputChange} id="activity_8" size="lg" type="text" placeholder="Activity 8" />
                    </Col>
                    <Col>
                    <Form.Control value={schedule.image_8} onChange={handleInputChange} id="image_8" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.activity_9} onChange={handleInputChange} id="activity_9" size="lg" type="text" placeholder="Activity 9" />
                    </Col>
                    <Col>
                    <Form.Control value={schedule.image_9} onChange={handleInputChange} id="image_9" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Col>
                    <Form.Control value={schedule.activity_10} onChange={handleInputChange} id="activity_10" size="lg" type="text" placeholder="Activity 10" />
                    </Col>
                    <Col>
                    <Form.Control value={schedule.image_10} onChange={handleInputChange} id="image_10" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Button variant="primary" type="submit" onClick ={createSchedule}>
                   {scheduleId ? "Save" : "Submit" } 
                </Button>
                { scheduleId ? <Button variant="primary" id={scheduleId} onClick={handleDelete}>Delete</Button> : <></>}
            </Form.Group>
        </>
    )
}