import React, { useContext, useEffect, useState } from "react"
import { Button, Nav, NavLink } from "react-bootstrap"
import { Link, useHistory, useParams } from "react-router-dom"
import { ProfileContext } from "../auth/ProfileProvider"


export const AdminPortal =()=>{
    const{staffId} = useParams()
    return (
        <>
            <h2 className="header">Admin Portal</h2>
            <Nav defaultActiveKey="/home" className="flex-column">
            <NavLink className="postApprove" href={`/post/unapproved/${staffId}`}><h4 className="header">Unapproved Posts</h4></NavLink>
            </Nav>
        </>
    )

}