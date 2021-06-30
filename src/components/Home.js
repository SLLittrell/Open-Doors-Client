import React, { useContext, useEffect } from "react"
import "./Home.css"
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { Card, Carousel, Container, Figure } from "react-bootstrap";

export const Home = () => {

    return(
        <>
            <section className="Home-welcome">
                <h1 className="header">Welcome to Open Doors</h1>
            </section>
            <Container>
                <h3 className="header">An application to help families, educators, and caregivers<br></br> explore local attractions with confidence. </h3>
            </Container>
    
        </>
    )
}