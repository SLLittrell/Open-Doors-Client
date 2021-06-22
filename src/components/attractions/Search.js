import React, { useContext, useEffect, useState } from "react"
import { AttractionContext } from "./AttractionProvider"
import { AttractionList } from "./AttractionList"
import { Button } from "react-bootstrap"



export const SearchAttractionLocations = () => {
    const {setSearchTerms}=useContext(AttractionContext)

    const [search, setSearch] = useState("")
    
    const handleSearch = () =>{
        setSearchTerms(search)
    }

    return (
        <>
            <fieldset>
               <label forhtml="search">Search for Attractions: <input type="text" id="search" placeholder ="City" onChange={(event) =>setSearch(event.target.value)}/></label> 
                <Button onClick={handleSearch}>Search</Button>
            </fieldset>
        </>
    )
}