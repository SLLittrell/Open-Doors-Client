import React, { useContext, useEffect, useState } from "react"
import { Card, Container, Jumbotron, NavLink } from "react-bootstrap"
import { Link, useHistory, useParams } from "react-router-dom"
import { AttractionContext } from "./AttractionProvider"
import Button from 'react-bootstrap/Button'
import "./Attraction.css"

export const AttractionDetails = () => {
    const{getAttractionDetails, details} = useContext(AttractionContext)

    const [url, setUrl] = useState()
    const [splitUrl, setSplitUrl] = useState()
    const {attractionId} =useParams()
    const history = useHistory()

    
    useEffect(() =>{
        getAttractionDetails(attractionId)
    },[])

        

    return(
        <>
            <Card className="attractionDetails">
                <Card.Img variant="top" src={details.preview?.source} width="25%" />
                <Card.Body>
                <Jumbotron fluid>
                    <Container>
                        <h1>{details.name}</h1>
                    </Container>
                </Jumbotron>
                <Card.Text>
                   {details.wikipedia_extracts?.text}
                </Card.Text>
                <Card.Text>
                    Address: {details.address?.house_number}{details.address?.road} {details.address?.city} {details.address?.state}
                </Card.Text>
                </Card.Body>
            <Button className="createStory-btn" onClick={()=>history.push(`/story/create/${attractionId}`)}>Create a story</Button>
            </Card>
        </>
    )
}
