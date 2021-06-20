import React, { createContext, useState } from 'react'

export const ScheduleContext = createContext()

export const ScheduleProvider = props => {
    const [schedules, setSchedules] = useState([])
    const [singleSched, setSingleSched] = useState({})

    const getSchedules = () => {
        return fetch(`http://localhost:8000/schedules`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(res => res.json())
            .then(setSchedules)
    }
    
    const getScheduleById = (scheduleId) => {
        return fetch(`http://localhost:8000/schedules/${scheduleId}`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(res => res.json())
            .then(setSingleSched)
    }

    const addSchedule = scheduleObj => {
        return fetch("http://localhost:8000/schedules", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(scheduleObj),
        })
        .then(()=>getSchedules)
    }

    return (
        <ScheduleContext.Provider value={{
            addSchedule, getSchedules, schedules, getScheduleById, singleSched

        }}>
            {props.children}
        </ScheduleContext.Provider>
    )
}