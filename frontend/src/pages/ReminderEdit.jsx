import React from "react";
import { useReminderEdit, useReminder } from "../hooks/useReminders";
import { useNavigate , useParams}  from "react-router";

export function ReminderEdit() {
    const params = useParams();
    const {reminder} = useReminder(params.ReminderId);
    const { time, setTime, name, setName, loading, error, successful, editReminder } = useReminderEdit(reminder);
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
                    onChange={(event) => setName(event.target.value)} 
                />
                <input 
                    type="datetime-local" 
                    value={time} 
                    onChange={(event) => setTime(event.target.value)} 
                />
                <button type="submit">Submit Edit</button>
            </form>
        </>
    );    
}
