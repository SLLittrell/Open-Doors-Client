import React, { createContext, useEffect, useState } from "react"


export const AttractionContext = createContext()

export const AttractionProvider = (props) => {
    const [ attraction, setAttraction ] = useState([])
    const [ local, setLocations ] = useState([])
    const [details, setDetails] =useState([])



    const getLocation = () => {
        return fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${searchTerms}&country=us&apikey=${process.env.REACT_APP_API_TOKEN}`)
            .then(response => response.json())
            .then(parsed => {
                setLocations(parsed)
                return parsed
            })
    }
    
    const getAttractions = (local) => {
        return fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=8000&lon=${local.lon}&lat=${local.lat}&src_geom=osm&src_attr=wikidata&format=json&apikey=${process.env.REACT_APP_API_TOKEN}`, {
        })
            .then(response => response.json())
            // .then(parsedAttractions => 
            //     setPlaces(parsedAttractions))
    }
    
    const getAttractionDetails = (attractionId) => {
        return fetch(`https://api.opentripmap.com/0.1/en/places/xid/${attractionId}?apikey=${process.env.REACT_APP_API_TOKEN}`, {
        })
            .then(response => response.json())
            .then(parsedAttractions => 
                setDetails(parsedAttractions))
    }



    const [ searchTerms, setSearchTerms ] = useState("")
    return (
        <AttractionContext.Provider value={{ getAttractions, setAttraction,attraction, getLocation, 
        getAttractionDetails, details, local, searchTerms, setSearchTerms }} >
            { props.children }
        </AttractionContext.Provider>
    )
}