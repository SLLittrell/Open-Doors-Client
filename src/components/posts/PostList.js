import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { PostContext } from './PostProvider'
import "./Post.css"

export const PostList = () => {
    const { posts, getPosts } = useContext(PostContext)
    const [myposts, setMyPosts] =useState()
    const userId = parseInt(localStorage.getItem(`open_user_id`))
    const history = useHistory()
    // Get posts from provider
    useEffect(() =>{
        getPosts()
    },[])

    useEffect(() => {
        // sort post by date newest to oldest
        const sortedPosts = posts?.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date))
        const approvedPosts = sortedPosts?.filter(post => post.approved === true)
        // Filtering posts by current user and url path
        if(history.location.pathname.includes("/my")){
            const currentUser = sortedPosts?.filter(post => parseInt(post.user.id)=== userId)
            setMyPosts(currentUser)
        } else {
            setMyPosts(approvedPosts)
        }
    },[posts])

   const usersPost = history.location.pathname.includes("/my")
    return ( 
        <>
        <section className="posts">
            <h2>{history.location.pathname.includes("/my") ? "My Posts" : "Community Board"}</h2>
            <div className="postContainer">{myposts?.map(title => <Card className="postCard"key={title.id} style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={title.image_url}/>
                    <div>Post from: {title.user.username}</div>
                        <Card.Body>
                            <Card.Title>{title.title}</Card.Title>
                            <Card.Text>
                                {title.content}
                            </Card.Text>
                            {title.social_story ? <Button onClick={()=>history.push(`/story/${title.social_story.id}`)}>View My Social Story</Button>: <></>}<br></br>
                            {title.visual_schedule ? <Button onClick={()=>history.push(`/schedule/${title.visual_schedule.id}`)}>View My Visual Schedule</Button>: <></>}
                        </Card.Body>
                        <div className="notApproved">{title.approved === false ? "*This post has not been approved": <></>}</div>
                        <div>{usersPost ? <button onClick ={() => history.push(`/posts/edit/${title.id}`)}>Edit Post</button> : <></>}</div>
                    </Card>
                    
            )}</div>
            
        </section>
        </>
    )
}