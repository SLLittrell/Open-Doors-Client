import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { PostContext } from './PostProvider'
import "./Post.css"


export const PostList = () => {
    const { posts, getPosts } = useContext(PostContext)
    const [myposts, setMyPosts] =useState()
    const userId = parseInt(localStorage.getItem(`lu_token`))
    const history = useHistory()
    // Get posts from provider
    useEffect(() =>{
        getPosts()
    },[])

    useEffect(() => {
        // sort post by date newest to oldest
        const sortedPosts = posts.sort((a, b) => new Date(b.publication_date) - new Date(a.publication_date))

        // Filtering posts by current user and url path
        if(history.location.pathname.includes("/my")){
            const currentUser = sortedPosts.filter(post => parseInt(post.user.id)=== userId)
            setMyPosts(currentUser)
        } else {
            setMyPosts(sortedPosts)
        }
    },[posts])


   const usersPost = history.location.pathname.includes("/my")
    return (
        <section className="posts">
            <h2>{history.location.pathname.includes("/my") ? "My Posts" : "Posts"}</h2>
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
    )
}