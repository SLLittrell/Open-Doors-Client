import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Form, FormGroup, ListGroup, NavLink } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { PostContext } from './PostProvider'
import "./Post.css"
import { useParams } from 'react-router-dom'

export const UnapprovedPostList = () => {
    const { posts, getPosts, updatePost, getPostById } = useContext(PostContext)
    const [unposts, setUnPosts] =useState()
    const [post, setPost] = useState()
    const {staffId} = useParams()
    const history = useHistory()
    // Get posts from provider
    useEffect(() =>{
        getPosts()
    },[])
    

    useEffect(() => {
        // sort post by date oldest to newest
        const sortedPosts = posts.sort((a, b) => new Date(a.publication_date) - new Date(b.publication_date))

        // Filtering posts by approval
            const unapproved = sortedPosts.filter(post => post.approved === false)
            setUnPosts(unapproved)
       
    },[posts])


    return ( 
        <>
        
        <section className="posts">
            <h2>Posts Waiting for Approval</h2>
            <div className="postCard">{unposts?.map(title =>
            <ListGroup>
               <NavLink key={title.id} href={`/post/unapproved/${staffId}/${title.id}/details/`}><ListGroup.Item>Title: {title.title}<br></br> Username: {title.user?.username}</ListGroup.Item></NavLink> 
            </ListGroup>
                    
            )}</div>        
        </section>
            
        </>
    )
}