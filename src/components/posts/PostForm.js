import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { CategoryContext } from "../categories/CategoryProvider";
import { PostContext } from "./PostProvider";


export const PostForm = () => {
    const{ addPost, getPostById} =useContext(PostContext)
    const {getCategories, categories}=useContext(CategoryContext)
    
    const userId = parseInt(localStorage.getItem(`open_user_id`))
    const [isLoading, setIsLoading] = useState(true)
    const postId = useParams()
    const history = useHistory()
    
    useEffect(() => {
        getCategories()
    },[])
    
    const[post, setPost] = useState({
        userId: userId,
        title: "",
        content: "",
        imageUrl: "",
        socialStory:null,
        visualSchedule: null,
        categoryId: 0,
        approved: true
    })
    
    // useEffect(() => {
    //     if (postId) {
    //         getPostById(postId)
    //         .then(post => {
    //             setPost(post)
    //             setIsLoading(false)
    //         })
    //     } else {
    //         setIsLoading(false)
    //     }
    // },[postId])

    const handleInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    const handleSavePost =() => {
        addPost({
            user_id: parseInt(post.userId),
            title: post.title,
            content: post.content,
            social_story:post.socialStory,
            visual_schedule:post.visualSchedule,
            image_url: post.imageUrl,
            category_id: parseInt(post.categoryId),
            approved: post.approved
        })
        .then(setIsLoading(false))
        .then(() => history.push("/profile"))
    }

    console.log(postId)
    return (
        <div>
        <form className="postForm ">
            <h2 className="postForm__title">Add Post</h2>
    
            <fieldset>
            <div className="form-group">
                <label htmlFor="Title">Title:</label>
                <input type="text" id="title" required autoFocus className="form-control"
                placeholder="Title"
                onChange={handleInputChange}
                />
            </div>
            </fieldset>
    
            <fieldset>
            <div className="form-group">
                <label htmlFor="content">Content: </label>
                <input type="text" id="content" required className="form-control"
                placeholder="Content"
                onChange={handleInputChange}
                />
            </div>
            </fieldset>
    
            <fieldset>
            <div className="form-group">
                <label htmlFor="image_url">Image: </label>
                <input type="text" id="imageUrl" required className="form-control"
                placeholder="Image URL"
                onChange={handleInputChange}
                />
            </div>
            </fieldset>

            <fieldset>
            <div className="form-group">
                <label htmlFor="socialStory">Add a Story: </label>
                <select id="social_story" className="form-control">
                    <option value="0" placeholder='Choose a Story'></option>
                </select>
            </div>
            </fieldset>

            <fieldset>
            <div className="form-group">
                <label htmlFor="socialStory">Add a Schedule: </label>
                <select id="social_story" className="form-control">
                    <option value="0" placeholder='Choose a Visual Schedule'></option>
                </select>
            </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                <label htmlFor="category_id">Category: </label>
                <select id="categoryId" className="form-control" 
                onChange={handleInputChange}>
                    <option value="0">Select a Category</option>
                    {categories.map(type => (
                    <option key={type.id} value={type.id}>
                        {type.label}
                    </option>
                    ))}
                </select>
                </div>
            </fieldset>
    
            <button className=""
            type="submit"
            onClick={event => {
                event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                handleSavePost()
            }}>
    
            {/* Save Post if editing Add if creating a new post */}
            Post
            </button>
            <div className="divider"/>
            {/* show delete button if editing
            {postId ?
            <button type="button" id={postId} className="" onClick={handleDeletePost}>
            Delete Post
            </button>
            :
            <></>
            } */}
        </form>
    
    </div>
    )
}
