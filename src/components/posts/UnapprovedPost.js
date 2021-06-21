import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { PostContext } from './PostProvider'
import "./Post.css"


export const UnapprovedPostList = () => {
    const { posts, getPosts } = useContext(PostContext)
    const [unposts, setUnPosts] =useState()
    const userId = parseInt(localStorage.getItem(`lu_token`))
    const history = useHistory()
    // Get posts from provider
    useEffect(() =>{
        getPosts()
    },[])

    useEffect(() => {
        // sort post by date oldest to newest
        const sortedPosts = posts.sort((a, b) => new Date(a.publication_date) - new Date(b.publication_date))

        // Filtering posts by approval
            const unapproved = sortedPosts.filter(post => post.approved=== false)
            setUnPosts(unapproved)
       
    },[posts])


   const usersPost = history.location.pathname.includes("/my")
    return ( 
        <>
        <section className="posts">
            <h2>Posts Waiting for Approval</h2>
            <div className="postCard">{posts.map(title => <Card key={title.id} style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={title.image_url}/>
                        <Card.Body>
                            <Card.Title>{title.title}</Card.Title>
                            <Card.Text>
                                {title.content}
                            </Card.Text>
                        </Card.Body>
                        <div>{usersPost ? <button onClick ={() => history.push(`/posts/edit/${title.id}`)}>Edit Post</button> : <></>}</div>
                    </Card>
                    
            )}</div>
            
        </section>
        </>
    )
}