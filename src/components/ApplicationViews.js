import React from "react"
import { Route } from "react-router-dom"
import { Profile } from "./Profile.js"
import { ProfileProvider } from "./auth/ProfileProvider.js"
import { Home } from "./Home.js"
import { AttractionList } from "./attractions/AttractionList.js"
import { AttractionProvider } from "./attractions/AttractionProvider.js"
import { AttractionDetails } from "./attractions/AttractionDetails.js"
import { SearchAttractionLocations } from "./attractions/Search.js"
import { PostList } from "./posts/PostList.js"
import { PostProvider } from "./posts/PostProvider.js"
import { PostForm } from "./posts/PostForm.js"
import { CategoryProvider } from "./categories/CategoryProvider.js"
import { StoryForm } from "./stories/StoryFrom.js"
import { StoryProvider } from "./stories/StoryProvider.js"
import { Library } from "./stories/Library.js"
import { StoryView } from "./stories/StoryList.js"
import { ScheduleProvider } from "./schedules/ScheduleProvider.js"
import {ScheduleForm} from "./schedules/ScheduleForm"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <ProfileProvider>
                <AttractionProvider>
                    <PostProvider>
                        <CategoryProvider>
                            <StoryProvider>
                                <ScheduleProvider>

                                    <Route exact path="/">
                                        <Home/>
                                    </Route>
                                    {/* _________________Attractions________________ */}
                                    <Route exact path="/attractions">
                                        <SearchAttractionLocations />
                                        <AttractionList />
                                    </Route>
                                    <Route exact path="/attractions/details/:attractionId">
                                        <AttractionDetails />
                                    </Route>

                            
                                    {/* ______________posts__________________________ */}
                                    <Route exact path="/posts/create">
                                        <PostForm />
                                    </Route>
                                    <Route exact path="/posts/edit/:postId(\d+)">
                                        <PostForm />
                                    </Route>
                                    <Route exact path="/myposts">
                                        <Profile />
                                        <PostList />
                                    </Route>
                                    {/* _________________Profile______________________________ */}
                                    <Route exact path="/profile">
                                        <Profile />
                                        <PostList />
                                    </Route>

                                    {/* ________________Stories___________________________ */}
                                    <Route exact path="/stories/create">
                                        <StoryForm />
                                    </Route>
                                    <Route exact path="/library">
                                        <Profile />
                                        <Library />
                                    </Route>
                                    <Route exact path="/story/:storyId(\d+)">
                                        <StoryView />
                                    </Route>
                                    <Route exact path="/story/create/:attractionId">
                                        <StoryForm />
                                    </Route>

                                    {/* _________________Schedule________________ */}

                                    <Route exact path="/schedules/create">
                                        <ScheduleForm />
                                    </Route>

                                </ScheduleProvider>
                            </StoryProvider>
                        </CategoryProvider>
                    </PostProvider>
                </AttractionProvider>   
            </ProfileProvider>
        </main>
    </>
}