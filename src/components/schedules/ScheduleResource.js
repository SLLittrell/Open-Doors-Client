import React, { useContext, useEffect, useState } from 'react'
import { Card, Carousel, Container, Row, Col, NavLink } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'


export const ScheduleResource = () => {

    return (
        <>
            <h1 className="header ScheduleBanner">Visual Schedules</h1>
            <Container>
                <Row>
                    <Col>
                    <h3>What are Visual Schedules?</h3>
                    <p>A visual schedule is a sequence of
                    photographs, videos, line drawings, symbols, text,
                    or other visual format that is used to show specific tasks
                    an individual is expected to do, or a series of events that will occur.<br/></p>
                    
                    </Col>
                    <Col>
                    <NavLink href="/schedules/create"><h2>Create a Visual Schedule</h2></NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3>Who can benefit from a visual schedule?</h3>
                    <p>Visual schedules have been effectively used
                        with people of all ages,
                        from toddlerhood
                        through adulthood.</p>

                    </Col>
                    <Col>
                    <h4> Tips for visual supports an schedules</h4>
                    <NavLink href="https://pre.hseschools.org/getattachment/FAMILIES/Family-Education/Visual-Schedules.pdf?lang=en-US">Click here Icon</NavLink>
                    </Col>
                </Row>
            </Container>

        </>
    )
}