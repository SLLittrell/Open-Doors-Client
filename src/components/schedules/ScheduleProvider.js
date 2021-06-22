import React, { createContext, useState } from 'react'

export const ScheduleContext = createContext()

export const ScheduleProvider = props => {
    const [schedules, setSchedules] = useState([])
    const [singleSched, setSingleSched] = useState({})

    const getSchedules = () => {
        return fetch(`http://localhost:8000/schedules`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(res => res.json())
            .then(setSchedules)
    }
    
    const getScheduleById = (scheduleId) => {
        return fetch(`http://localhost:8000/schedules/${scheduleId}`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(res => res.json())
            .then(setSingleSched)
    }

    const addSchedule = scheduleObj => {
        return fetch("http://localhost:8000/schedules", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(scheduleObj),
        })
        .then(()=>getSchedules)
    }

    const updateSchedule = schedule => {
        return fetch(`http://localhost:8000/schedules/${schedule.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(schedule)
        })
            .then(getSchedules)
    }

    const deleteSchedule = scheduleId => {
        return fetch(`http://localhost:8000/schedules/${scheduleId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("open_token")}`
            }
        })
            .then(getSchedules)
            .then(setSchedules)
    }

    return (
        <ScheduleContext.Provider value={{
            addSchedule, getSchedules, schedules, getScheduleById, singleSched, 
            deleteSchedule, updateSchedule

        }}>
            {props.children}
        </ScheduleContext.Provider>
    )
}