import React from "react";
import { useReminderEdit } from "../hooks/useReminders";
import { useNavigate } from "react-router";

export function ReminderEdit() {
    const { time, setTime, name, setName, loading, error, successful, editReminder } = useReminderEdit();
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
            <h1>Edit a Task</h1>
            <form onSubmit={editReminder}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="datetime-local" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                />
                <button type="submit">Submit Edit</button>
            </form>
        </>
    );    
}
