import React, { useContext, useEffect, useState } from 'react'
import { Card, Carousel, Col, Container, Figure, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'
import { ScheduleContext } from './ScheduleProvider'
import './Schedule.css'

export const ScheduleView = () => {
    const {getScheduleById, singleSched} =useContext(ScheduleContext)
    const userId = parseInt(localStorage.getItem(`open_token`))
    const {scheduleId} = useParams()
   

    
    useEffect(() =>{
        getScheduleById(scheduleId)
    },[])

    return (
        <>
            <h1 className="scheduleTitle">{singleSched.title}</h1>
            <div></div>
            <Container className="scheduleContainer">
                <Row className="schedRow"><h2>1</h2>
                    <Col lg={8}><h2 className="activity">{singleSched.activity_1}</h2></Col>
                    <Col sm={2}>
                        <Figure>
                            <Figure.Image
                                width={100}
                                height={180}
                                alt={singleSched.activity_1}
                                src={singleSched.image_1}
                            />
                        </Figure>
                    </Col>
                </Row>
                <hr/>
                <Row className="schedRow"><h2>2</h2>
                    <Col md={8}><h2 className="activity">{singleSched.activity_2}</h2></Col>
                    <Col sm={2}><Figure>
                        <Figure.Image
                            width={100}
                            height={180}
                            alt={singleSched.activity_2}
                            src={singleSched.image_2}
                        />
                    </Figure></Col>
                </Row>
                <hr/>
                <Row className="schedRow"><h2>3</h2>
                    <Col md={8}><h2 className="activity">{singleSched.activity_3}</h2></Col>
                    <Col sm={2}><Figure>
                        <Figure.Image
                            width={100}
                            height={180}
                            alt={singleSched.activity_3}
                            src={singleSched.image_3}
                        />
                    </Figure></Col>
                </Row>
                <hr/>
                <Row className="schedRow"><h2>4</h2>
                    <Col md={8}><h2 className="activity">{singleSched.activity_4}</h2></Col>
                    <Col sm={2}><Figure>
                    <Figure.Image
                            width={100}
                            height={180}
                            alt={singleSched.activity_4}
                            src={singleSched.image_4}
                        />
                    </Figure></Col>
                </Row>
                <hr/>
                <Row className="schedRow"><h2>5</h2>
                    <Col md={8}><h2 className="activity">{singleSched.activity_5}</h2></Col>
                    <Col sm={2}><Figure>
                        <Figure.Image
                            width={100}
                            height={180}
                            alt={singleSched.activity_5}
                            src={singleSched.image_5}
                        />
                    </Figure></Col>
                </Row>
                <hr/>
                <Row className="schedRow"><h2>6</h2>
                    <Col md={8}><h2 className="activity">{singleSched.activity_6}</h2></Col>
                    <Col sm={2}><Figure>
                        <Figure.Image
                            width={100}
                            height={180}
                            alt={singleSched.activity_6}
                            src={singleSched.image_6}
                        />
                    </Figure></Col>
                </Row>
                <hr/>
                <Row className="schedRow"><h2>7</h2>
                    <Col md={8}><h2 className="activity">{singleSched.activity_7}</h2></Col>
                    <Col sm={2}><Figure>
                        <Figure.Image
                            width={100}
                            height={180}
                            alt={singleSched.activity_7}
                            src={singleSched.image_7}
                        />
                    </Figure></Col>
                </Row>
                <hr/>
                <Row className="schedRow"><h2>8</h2>
                    <Col md={8}><h2 className="activity">{singleSched.activity_8}</h2></Col>
                    <Col sm={2}><Figure>
                        <Figure.Image
                            width={100}
                            height={180}
                            alt={singleSched.activity_8}
                            src={singleSched.image_8}
                        />
                    </Figure></Col>
                </Row>
                <hr/>
                <Row className="schedRow"><h2>9</h2>
                    <Col md={8}><h2 className="activity">{singleSched.activity_9}</h2></Col>
                    <Col sm={2}><Figure>
                        <Figure.Image
                            width={100}
                            height={180}
                            alt={singleSched.activity_9}
                            src={singleSched.image_9}
                        />
                    </Figure></Col>
                </Row>
                <hr/>
                <Row className="schedRow"><h2>10</h2>
                    <Col md={8}><h2 className="activity">{singleSched.activity_10}</h2></Col>
                    <Col sm={2}><Figure>
                        <Figure.Image
                            width={100}
                            height={180}
                            alt={singleSched.activity_10}
                            src={singleSched.image_10}
                        />
                    </Figure></Col>
                </Row>
            </Container>
        </>
    )
}