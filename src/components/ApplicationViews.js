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
import { StoryForm } from "./stories/StoryForm.js"
import { StoryProvider } from "./stories/StoryProvider.js"
import { Library } from "./stories/Library.js"
import { StoryView } from "./stories/StoryList.js"
import { ScheduleProvider } from "./schedules/ScheduleProvider.js"
import {ScheduleForm} from "./schedules/ScheduleForm"
import { ScheduleView } from "./schedules/ScheduleList.js"
import { AdminPortal } from "./auth/AdminPortal.js"
import { UnapprovedPostList } from "./posts/UnapprovedPost.js"
import { UnapprovedPostDetails } from "./posts/UnapprovedPostDetails.js"
import { StoryResource } from "./stories/StoryResource.js"
import { ScheduleResource } from "./schedules/ScheduleResource.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "2rem 2rem",
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
                                        <PostList />
                                    </Route>
                                    <Route exact path="/post/unapproved/:staffId(\d+)">
                                        <UnapprovedPostList />
                                    </Route>
                                    <Route exact path="/post/unapproved/:staffId(\d+)/:postId(\d+)/details">
                                        <UnapprovedPostDetails />
                                    </Route>
                                    {/* _________________Profile______________________________ */}
                                    <Route exact path="/profile">                              
                                        <PostList />
                                    </Route>

                                    {/* ________________Stories___________________________ */}
                                    <Route exact path="/stories">
                                        <StoryResource />
                                    </Route>
                                    <Route exact path="/stories/create">
                                        <StoryForm />
                                    </Route>
                                    <Route exact path="/library">
                                        <Library />
                                    </Route>
                                    <Route exact path="/story/:storyId(\d+)">
                                        <StoryView />
                                    </Route>
                                    <Route exact path="/story/edit/:storyId(\d+)">
                                        <StoryForm />
                                    </Route>
                                    <Route exact path="/story/create/:attractionId">
                                        <StoryForm />
                                    </Route>

                                    {/* _________________Schedule________________ */}

                                    <Route exact path="/schedules">
                                        <ScheduleResource />
                                    </Route>
                                    <Route exact path="/schedules/create">
                                        <ScheduleForm />
                                    </Route>
                                    <Route exact path="/schedule/:scheduleId(\d+)">
                                        <ScheduleView />
                                    </Route>
                                    <Route exact path="/schedule/edit/:scheduleId(\d+)">
                                        <ScheduleForm />
                                    </Route>
                                    {/* _________________Admin_____________________ */}
                                    <Route exact path="/admin/:staffId(\d+)">
                                        <AdminPortal/>
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