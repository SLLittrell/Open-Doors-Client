import React, { useContext, useEffect, useState } from "react"
import { AttractionContext } from "./AttractionProvider"
import { AttractionList } from "./AttractionList"


export const SearchAttractionLocations = () => {
    const {setSearchTerms, getLocation, local, getAttraction}=useContext(AttractionContext)

    
    useEffect(() => {
        getLocation()
    },[])

    return (
        <>
            <fieldset>
               <label forhtml="search">Search for Attractions: <input type="text" id="search" placeholder ="City" onKeyUpCapture={(event) =>setSearchTerms(event.target.value)}/></label> 
                <button onClick={() => getLocation()}>Search</button>
            </fieldset>
        </>
    )
}