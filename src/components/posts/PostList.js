import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { PostContext } from './PostProvider'


export const PostList = () => {
    const { posts, getPosts } = useContext(PostContext)
    const userId = parseInt(localStorage.getItem(`lu_token`))
    const history = useHistory()

    return (
        <section className="posts">
            <h2>{history.location.pathname.includes("/my") ? "My Posts" : "My Feed"}</h2>

            {!history.location.pathname.includes("/my") && <section>
                <fieldset>
                    <div className="form-group">
                        {/* <label htmlFor="categoryId">Category: </label> */}
                        <select value={userIdValue} id="userId" className="form-control"
                            onChange={handleControlledInputChange}>
                            <option value="0">All Users</option>
                            {users.map(l => (
                                <option key={"user " + l.user.id} value={l.user.id}>
                                    {l.user.first_name} {l.user.last_name}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>

                <div>OR</div>
            </section>
            }
        </section>
    )
}