import React, { useContext, useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory, useParams } from 'react-router-dom';
import { StoryContext } from "./StoryProvider";
import './StoryForm.css'

export const StoryForm = () => {
    const {addStory} = useContext(StoryContext)
    const attractionId = useParams()

    const [story, setStory] =useState({
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
        page_5_image:""
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
                <Button variant="primary" type="submit" onClick ={createStory}>
                    Submit
                </Button>
            </Form.Group>
        </>
    )
}