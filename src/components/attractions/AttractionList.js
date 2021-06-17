import React, { useContext, useEffect, useState } from "react"
import { Card, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AttractionContext } from "./AttractionProvider"

export const AttractionList = () => {
    const {getAttractions, setAttraction, attraction, getLocation, local, searchTerms}=useContext(AttractionContext)
    // const[locations, setLocations] = useState()

    useEffect(()=>{
        if( searchTerms !== ""){
            getLocation()
            .then((local) =>  getAttractions(local).then((response) => setAttraction(response))) 
        }
    },[searchTerms])

    return(
        <>
            {searchTerms ? <section className="Attraction" >
                <h2>{local.name} {local.country}</h2>
                { Array.isArray(attraction) ? attraction.map(place =>
                <Card style={{ width: '18rem' }} key ={place.xid}>
                <ListGroup variant="flush" >
                    <ListGroup.Item action href={`/attractions/details/${place.xid}`}>{place.name}</ListGroup.Item>
                </ListGroup>
                </Card>) : <></>}
            </section> : <></>}
        
            
        </>
    )
}