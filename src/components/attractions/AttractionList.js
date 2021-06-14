import React, { useContext, useEffect, useState } from "react"
import { AttractionContext } from "./AttractionProvider"


export const AttractionList = () => {
    const {getAttractions, places, getLocation, local, searchTerms}=useContext(AttractionContext)
    // const[locations, setLocations] = useState()

    return(
        <>
            <section className="Attraction">
                {places?.map(place => <h2><link path={`/attraction`}>{place.name}</link></h2>)}
                
            </section>
        </>
    )
}