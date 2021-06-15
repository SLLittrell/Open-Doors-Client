import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AttractionContext } from "./AttractionProvider"


export const AttractionDetails = () => {
    const attractionId =useParams()

    return(
        <>
            <h2>hello</h2>
        </>
    )
}
