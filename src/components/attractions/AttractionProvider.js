import React, { createContext, useEffect, useState } from "react"
import { settings } from "../auth/Settings"


export const AttractionContext = createContext()

export const AttractionProvider = (props) => {
    const [ places, setPlaces ] = useState([])
    const [ local, setLocations ] = useState([])



    const getLocation = () => {
        return fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${searchTerms}&country=us&apikey=${settings.openApiKey}`)
            .then(response => response.json())
            .then(parsed => {
                setLocations(parsed)
            })
    }
    
    const getAttractions = (location) => {
        return fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=1600&lon=${location.lon}&lat=${location.lat}&src_geom=osm&src_attr=wikidata&format=json&apikey=${settings.openApiKey}`, {
        })
            .then(response => response.json())
            .then( parsedAttractions => {
                setPlaces(parsedAttractions)})
    }



    const [ searchTerms, setSearchTerms ] = useState("")

    console.log(searchTerms)
    return (
        <AttractionContext.Provider value={{ getAttractions, places, getLocation, local, searchTerms, setSearchTerms }} >
            { props.children }
        </AttractionContext.Provider>
    )
}