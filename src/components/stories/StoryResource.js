import React, { useContext, useEffect, useState } from 'react'
import { Card, Carousel, Container, Row, Col, NavLink } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'


export const StoryResource = () => {

    return (
        <>
            <h1 className="header StoryBanner">Social Stories</h1>
            <Container>
                <Row>
                    <Col>
                    <h3>What are Social Stories?</h3>
                    <p>Social Stories are used as a tool to help individuals better understand the nuances of social communication. They provide guidance and directions for responding to various types of social situations,<br/>
                        and are primarily used to promote self-awareness, self-calming, and to clarify expectations when visiting an unfamiliar place.</p>
                    </Col>
                    <Col>
                    <NavLink href="/stories/create"><h2>Create a Social Story</h2></NavLink>
                    </Col>
                    <Col>
                    <NavLink href="/attractions"><h2>Choose an attraction and create a Social Story</h2></NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>When do I use a Social Story?</h3>
                    <p>Social Stories can be used for many situations such as developing<br/> 
                    self-care skills, social skills, or to better understand how others react in particular situations.<br/></p>
                    <p>At Open Doors we focus on creating Social Stories to help individual prepare for new environments by setting clear expectations.</p>
                    </Col>
                    <Col>
                    <h4> How to write a Social Story from Vanderbilt Kennedy Center</h4>
                    <NavLink href="https://vkc.vumc.org/assets/files/tipsheets/socialstoriestips.pdf">Click here Icon</NavLink>
                    </Col>
                </Row>
            </Container>

        </>
    )
}