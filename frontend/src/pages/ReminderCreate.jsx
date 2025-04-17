import React from "react";
import { useReminderCreate } from "../hooks/useReminders";
import { useNavigate } from "react-router";

export function ReminderCreate() {
    const { time,setTime,name, setName, loading, error, successful, createReminder } = useReminderCreate();
    const navigate = useNavigate();

    if(successful) {
        navigate("/");
    }

    if(loading) {
        return( 
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    if(error) {
        return (
            <>
                <h1>Uh Oh!</h1>
            </>
        );
    }

    return (
        <>
            <h1>Create a Task</h1>
            <form onSubmit={createReminder}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                />
                <input 
                    type="datetime-local" 
                    value={time} 
                    onChange={(event) => setTime(event.target.value)} 
                />
                <button type="submit">Create Reminder</button>
            </form>
        </>
    );    
}
