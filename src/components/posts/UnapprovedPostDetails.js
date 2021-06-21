import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Form, FormGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { PostContext } from './PostProvider'
import "./Post.css"
import { useParams } from 'react-router-dom'

export const UnapprovedPostDetails = () => {
    const { updatePost, getPostById} = useContext(PostContext)
    const [post, setPost] = useState({})
    const history = useHistory()
    const {postId} = useParams()
    const {staffId} = useParams()
    
    console.log(staffId)
    // Get posts from provider
    useEffect(() =>{
        getPostById(postId)
            .then((res) => setPost(res))
        
    },[])

    const [approval, setApproval] = useState({})
    useEffect(() =>{
        setApproval({
        id: post.id,
        user_id: post.user?.id,
        title: post.title,
        content: post.content,
        social_story:post.social_story,
        visual_schedule:post.visual_schedule,
        publication_date: post.publication_date,
        image_url: post.image_url,
        category_id: post.category?.id,
        approved: false
        })  
        
    },[post, postId])

    
    const approvePost = () => {
        console.log(staffId)
       updatePost(approval)
       .then(() =>history.push(`/admin/${staffId}`))
       
    }

    return ( 
        <>
        
        <section className="posts">
            <h2>Posts Waiting for Approval</h2>
            <div className="postCard">
                <Card key={post.id} style={{ width: '50rem' }}>
                    <Card.Img variant="top" src={post.image_url}/>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>
                                {post.content}
                            </Card.Text>
                        </Card.Body>
                        
                        <div>
                            <Form>
                            <Form.Group>
                            <Form.Check 
                                id={`approved`}
                                label={`Approve`}
                                onChange={() => {
                                    const approve = {...approval}
                                    if(approval.approved === false){
                                        approve.approved = true
                                        setApproval(approve)
                                    }
                                    else if(approval.approved === true){
                                        approve.approved = false
                                        setApproval(approve)
                                    }

                                    
                                }}
                            /></Form.Group>
                            <Form.Group>
                                <Form.Label>Reason for NOT approving:</Form.Label>
                                <Form.Control as="textarea" rows={3} id="nonApproval"/>
                            </Form.Group>
                            <Button variant="primary" onClick={approvePost}>
                                Submit
                            </Button>
                            </Form>
                        </div>
                    </Card>
            </div>        
        </section>
            
        </>
    )
}