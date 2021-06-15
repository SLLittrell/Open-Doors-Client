import React, { createContext, useEffect, useState } from "react"
import { settings } from "../auth/Settings"


export const AttractionContext = createContext()

export const AttractionProvider = (props) => {
    const [ attraction, setAttraction ] = useState([])
    const [ local, setLocations ] = useState([])



    const getLocation = () => {
        return fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${searchTerms}&country=us&apikey=${settings.openApiKey}`)
            .then(response => response.json())
            .then(parsed => {
                setLocations(parsed)
                return parsed
            })
    }
    
    const getAttractions = (local) => {
        return fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=8000&lon=${local.lon}&lat=${local.lat}&src_geom=osm&src_attr=wikidata&format=json&apikey=${settings.openApiKey}`, {
        })
            .then(response => response.json())
            // .then(parsedAttractions => 
            //     setPlaces(parsedAttractions))
    }



    const [ searchTerms, setSearchTerms ] = useState("")
    return (
        <AttractionContext.Provider value={{ getAttractions, setAttraction,attraction, getLocation, local, searchTerms, setSearchTerms }} >
            { props.children }
        </AttractionContext.Provider>
    )
}