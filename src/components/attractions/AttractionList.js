import React, { useContext, useEffect, useState } from "react"
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
                { Array.isArray(attraction) ? attraction.map(place =><Link to={`/attractions/${place.xid}/details`} key ={place.xid}><h2>{place.name}</h2></Link>) : <></>}
            </section> : <></>}
        
            
        </>
    )
}