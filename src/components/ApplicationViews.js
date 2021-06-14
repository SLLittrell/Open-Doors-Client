import React from "react"
import { Route } from "react-router-dom"
import { Profile } from "./user/Profile.js"
import { ProfileProvider } from "./auth/ProfileProvider.js"
import { Home } from "./Home.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            
            <Route exact path="/">
                <Home/>
            </Route>
    
            {/* ______________posts__________________________ */}

            {/* _________________Profile______________________________ */}
            <Route exact path="/profile">
                <Profile />
            </Route>
        </main>
    </>
}