import React, { useContext, useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from 'react-router-dom';
import { StoryContext } from "./StoryProvider";
import './StoryForm.css'

export const StoryForm = () => {
    const {addStory} = useContext(StoryContext)
    const attractionId = useParams()
    const userId = parseInt(localStorage.getItem(`open_user_id`))

    const [story, setStory] =useState({
        user: userId,
        title: "",
        title_image:"",
        page_1_text: "",
        page_1_image:"",
        page_2_text:"",
        page_2_image:"",
        page_3_text: "",
        page_3_image:"",
        page_4_text:"",
        page_4_image:"",
        page_5_text:"",
        page_5_image:"",
        page_6_text:"",
        page_6_image:"",
        page_7_text:"",
        page_7_image:"",
        page_8_text:"",
        page_8_image:"",
        page_9_text:"",
        page_9_image:"",
        page_10_text:"",
        page_10_image:""
    })
    
    const handleInputChange = (event) => {
        const newStory = { ...story }
        newStory[event.target.id] = event.target.value
        setStory(newStory)
    }

    const createStory = () => {
        addStory(story)
    }

    return (
        <>
            <header><h2>Create a Social Story</h2></header>
            <Form.Group className="storyForm">
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                    Title Page:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="title" size="lg" type="text" placeholder="Title" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="title_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                        Page One:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_1_text" size="lg" type="text" placeholder="Text" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_1_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                        Page Two:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_2_text" size="lg" type="text" placeholder="Text" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_2_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                        Page Three:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_3_text" size="lg" type="text" placeholder="Text" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_3_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                        Page Four:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_4_text" size="lg" type="text" placeholder="Text" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_4_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                        Page Five:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_5_text" size="lg" type="text" placeholder="Text" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_5_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                        Page Six:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_6_text" size="lg" type="text" placeholder="Text" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_6_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                        Page Seven:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_7_text" size="lg" type="text" placeholder="Text" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_7_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                        Page Eight:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_8_text" size="lg" type="text" placeholder="Text" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_8_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                        Page Nine:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_9_text" size="lg" type="text" placeholder="Text" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_9_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Form.Row className = "page">
                    <Form.Label column="lg" lg={2}>
                        Page Ten:
                    </Form.Label>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_10_text" size="lg" type="text" placeholder="Text" />
                    </Col>
                    <Col>
                    <Form.Control onChange={handleInputChange} id="page_10_image" size="lg" type="text" placeholder="Image URL" />
                    </Col>
                </Form.Row>
                <Button variant="primary" type="submit" onClick ={createStory}>
                    Submit
                </Button>
            </Form.Group>
        </>
    )
}