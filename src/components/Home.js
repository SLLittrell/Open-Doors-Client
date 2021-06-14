import React, { useContext, useEffect } from "react"
import "./Home.css"
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";


export const Home = () => {

    return(
        <>
            <section className="Home-welcome">
                <h1>Welcome to Open Doors</h1>
            </section>
            <Container>
                <Image src="https://images.unsplash.com/photo-1510521212584-6d33ce4408d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" rounded />
            </Container>
        </>
    )
}