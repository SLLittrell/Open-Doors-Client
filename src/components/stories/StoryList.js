import React, { useContext, useEffect, useState } from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'
import {StoryContext } from './StoryProvider'
import './StoryView.css'

export const StoryView = () => {
    const {getStoryById, story} =useContext(StoryContext)
    const userId = parseInt(localStorage.getItem(`lu_token`))
    const {storyId} = useParams()
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
            <h1>{story.titlepage}</h1>
            <div>
            <Carousel ref={wrapper} activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={story.title_image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.titlepage}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={story.page_1_image}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.page_1_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={story.page_2_image}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.page_2_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={story.page_3_image}
                    alt="Fourth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.page_3_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={story.page_4_image}
                    alt="Fifth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.page_4_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={story.page_5_image}
                    alt="Sixth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.page_5_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={story.page_6_image}
                    alt="Seventh slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.page_6_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={story.page_7_image}
                    alt="Eighth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.page_7_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={story.page_8_image}
                    alt="Ninth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.page_8_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={story.page_9_image}
                    alt="Tenth slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.page_9_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={story.page_10_image}
                    alt="Eleventh slide"
                    />
                    <Carousel.Caption>
                    <h2 className="storyText">{story.page_10_text}</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}