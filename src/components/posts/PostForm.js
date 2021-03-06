import React, { useContext, useEffect, useRef, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { CategoryContext } from "../categories/CategoryProvider";
import { ScheduleContext } from "../schedules/ScheduleProvider";
import { StoryContext } from "../stories/StoryProvider";
import { PostContext } from "./PostProvider";


export const PostForm = () => {
    const{ addPost, getPostById, updatePost, deletePost} =useContext(PostContext)
    const {getCategories, categories}=useContext(CategoryContext)
    const {getStories, stories}=useContext(StoryContext)
    const {getSchedules, schedules}=useContext(ScheduleContext)
    
    const userId = parseInt(localStorage.getItem(`open_user_id`))
    const [isLoading, setIsLoading] = useState(true)
    const [sortStory,setSortStory] =useState([])
    const [sortSchedule,setSortSchedule] =useState([])
    const {postId} = useParams()
    const history = useHistory()
    

    useEffect(() => {
        getCategories()
        .then(()=> getStories() )
            .then(()=> getSchedules())
    },[])

    useEffect(()=>{
        const currentUserStories = stories.filter(story => parseInt(story.user.id)=== userId)
        setSortStory(currentUserStories)
        const currentUserSchedules = schedules.filter(sched => parseInt(sched.user.id)=== userId)
        setSortSchedule(currentUserSchedules)
    },[stories, schedules])

    useEffect(() => {
        if (postId) {
            getPostById(postId)
            // set returned object variables to the state
                .then(post => {
                    setPost({
                    userId: post.user,
                    title: post.title,
                    content: post.content,
                    imageUrl: post.image_url,
                    publication_date: post.publication_date,
                    socialStory:post.social_story?.id,
                    visualSchedule: post.visual_schedule?.id,
                    categoryId: post.category.id,
                    approved: post.approved
                    })
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    },[postId])
    
    const[post, setPost] = useState({
        userId: userId,
        title: "",
        content: "",
        imageUrl: "",
        socialStory: undefined,
        visualSchedule: undefined,
        categoryId: 0,
        approved: false
    })

    
    
    const handleInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setPost(newPost)
    }

    const handleSavePost =() => {
        if (postId){
            // PUT - update
            updatePost({
                id: postId,
                user_id: userId,
                title: post.title,
                content: post.content,
                social_story:post.socialStory,
                visual_schedule:post.visualSchedule,
                publication_date: post.publication_date,
                image_url: post.imageUrl,
                category_id: post.categoryId,
                approved: post.approved
            })
            .then(() => history.push(`/myposts`))
            }else {
                addPost({
                    user_id: parseInt(post.userId),
                    title: post.title,
                    content: post.content,
                    social_story:parseInt(post.socialStory),
                    visual_schedule:parseInt(post.visualSchedule),
                    image_url: post.imageUrl,
                    category_id: parseInt(post.categoryId),
                    approved: post.approved
                })
                .then(setIsLoading(false))
                .then(() => history.push("/profile"))
            }
    }

    const handleDeletePost = (event) => {
        if(window.confirm("Are you sure you would like to delete this post?")===true){
            deletePost(event.target.id)
            .then(() => {
            history.push("/myposts")
            })
        }
    }

    
    return (
        <div>
        <form className="postForm ">
            <h2 className="postForm__title">{postId ? "Edit Post":"Add Post"}</h2>
    
            <fieldset>
            <div className="form-group">
                <label htmlFor="Title">Title:<span className="required">*</span></label>
                <input type="text" id="title" required autoFocus className="form-control"
                placeholder="Title"
                onChange={handleInputChange}
                value= {post.title}/>
            </div>
            </fieldset>
    
            <fieldset>
            <div className="form-group">
                <label htmlFor="content">Content:<span className="required">*</span></label>
                <input type="text" id="content" required className="form-control"
                placeholder="Content"
                onChange={handleInputChange}
                value ={post.content}/>
            </div>
            </fieldset>
    
            <fieldset>
            <div className="form-group">
                <label htmlFor="image_url">Image:<span className="required">*</span></label>
                <input type="text" id="imageUrl" required className="form-control"
                placeholder="Image URL"
                onChange={handleInputChange}
                value={post.imageUrl}/>
            </div>
            </fieldset>

            <fieldset>
            <div className="form-group">
                <label htmlFor="socialStory">Add a Story: </label>
                <select id="socialStory" 
                value={post.socialStory}
                className="form-control"
                onChange={handleInputChange}>
                    <option value="0">Select a Story</option>
                    {sortStory?.map(st => (
                    <option key={st.id} value={st.id}>
                        {st.titlepage}
                    </option>
                    ))}
                    <option value="0" placeholder='Choose a Story'></option>
                    <option></option>
                </select>
            </div>
            </fieldset>

            <fieldset>
            <div className="form-group">
                <label htmlFor="visualSchedule">Add a Schedule: </label>
                <select id="visualSchedule"
                className="form-control"
                value={post.visualSchedule}
                onChange={handleInputChange}>
                    <option value="0">Choose a Visual Schedule</option>
                    {sortSchedule?.map(sc => (
                    <option key={sc.id} value={sc.id}>
                        {sc.title}
                    </option>
                    ))}
                </select>
            </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                <label htmlFor="category_id">Category:<span className="required">*</span></label>
                <select  id="categoryId"
                value={post.categoryId}
                className="form-control"
                onChange={handleInputChange}>
                    {/* <option value={post.category?.id}>{post.category?.label}</option> */}
                    <option value="">Select a Category</option>
                    {categories.map(type => (
                    <option key={type.id} value={type.id}>
                        {type.label}
                    </option>
                    ))}
                </select>
                </div>
            </fieldset>
            <div className="required">* Indicates required fields</div>
            <button className=""
            type="submit"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                handleSavePost()
            }}>
    
            {/* Save Post if editing Add if creating a new post */}
            {postId ? " Save Post " : " Add Post "}
            </button>
            <div className="divider"/>
            {/* delete button only if user has access to editing*/}
            {postId ?
            <button type="button" id={postId} className="" onClick={handleDeletePost}>
            Delete Post
            </button>
            :
            <></>
            }
        </form>
    
    </div>
    )
}
