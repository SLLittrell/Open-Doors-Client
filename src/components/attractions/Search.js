import React, { useContext, useEffect, useState } from "react"
import { AttractionContext } from "./AttractionProvider"
import { AttractionList } from "./AttractionList"
import { Button, Form, InputGroup } from "react-bootstrap"
import "./Attraction.css"

export const SearchAttractionLocations = () => {
    const {setSearchTerms}=useContext(AttractionContext)

    const [search, setSearch] = useState("")
    
    const handleSearch = () =>{
        setSearchTerms(search)
    }

    return (
        <>
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1" className="search">
                <Form.Label>Search for Attractions</Form.Label>
                <InputGroup.Prepend>
                <Form.Control type="text" id="search" placeholder="City" onChange={(event) =>setSearch(event.target.value)} />
                <Button onClick={handleSearch}>Search</Button>
                </InputGroup.Prepend>
            </Form.Group>
            </Form>
        </>
    )
}