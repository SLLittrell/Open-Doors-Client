import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Carousel, } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'
import {StoryContext } from './StoryProvider'
import './StoryView.css'

export const StoryView = () => {
    const {getStoryById, oneStory} =useContext(StoryContext)
    const userId = parseInt(localStorage.getItem(`open_token`))
    const {storyId} = useParams()
    const history = useHistory()
    const [filterStory, setFilterStory] =useState()

    

    useEffect(() =>{
        getStoryById(storyId)
        
    },[])

    const wrapper = React.createRef
    const [index, setIndex] = useState(0);
      
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <h1>{oneStory.titlepage}</h1>
            <div>
            <Carousel ref={wrapper} activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={oneStory.title_image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.titlepage}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={oneStory.page_1_image}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.page_1_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={oneStory.page_2_image}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.page_2_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={oneStory.page_3_image}
                    alt="Fourth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.page_3_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={oneStory.page_4_image}
                    alt="Fifth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.page_4_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={oneStory.page_5_image}
                    alt="Sixth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.page_5_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {oneStory.page_6_image ?<><img
                    className="d-block w-100"
                    src={oneStory.page_6_image}
                    alt="Seventh slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.page_6_text}</h2>
                    </Carousel.Caption></>:<Button className="btn backArrow"></Button>}
                </Carousel.Item>
                <Carousel.Item>
                    {oneStory.page_7_image ? <><img
                    className="d-block w-100"
                    src={oneStory.page_7_image}
                    alt="Eighth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.page_7_text}</h2>
                    </Carousel.Caption></>:<></>}
                </Carousel.Item>
                <Carousel.Item>
                    {oneStory.page_8_image ? <><img
                    className="d-block w-100"
                    src={oneStory.page_8_image}
                    alt="Ninth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.page_8_text}</h2>
                    </Carousel.Caption></>:<></>}
                </Carousel.Item>
                <Carousel.Item>
                    {oneStory.page_9_image ? <><img
                    className="d-block w-100"
                    src={oneStory.page_9_image}
                    alt="Tenth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.page_9_text}</h2>
                    </Carousel.Caption></>:<></>}
                </Carousel.Item>
                <Carousel.Item>
                    {oneStory.page_10_image ? <><img
                    className="d-block w-100"
                    src={oneStory.page_10_image}
                    alt="Eleventh slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{oneStory.page_10_text}</h2>
                    </Carousel.Caption></>:<></>}
                </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}