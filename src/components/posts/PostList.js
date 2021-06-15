import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { PostContext } from './PostProvider'


export const PostList = () => {
    const { posts, getPosts } = useContext(PostContext)
    const userId = parseInt(localStorage.getItem(`lu_token`))
    const history = useHistory()

    useEffect(() =>{
        getPosts()
    },[])

    console.log(posts)
    return (
        <section className="posts">
            <h2>{history.location.pathname.includes("/my") ? "My Posts" : "Posts"}</h2>
            <div>{posts.map(title => <Card style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={title.image_url} width="75%"/>
                        <Card.Body>
                            <Card.Title>{title.title}</Card.Title>
                            <Card.Text>
                                {title.content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
            )}</div>
        </section>
    )
}