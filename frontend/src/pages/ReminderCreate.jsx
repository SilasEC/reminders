/**
 * ReminderCreate.jsx
 * 
 * Description:
 * This React component provides a form for users to create a new reminder.
 * It utilizes custom hooks to manage form state, handle submission, and trigger navigation
 * upon successful creation. Includes basic loading and error handling UI.
 * 
 * Author: Ethan L'Heureux & Silas Curtis 
 * Created: 2025-04-17
 * Updated: 2025-04-24
 */
import React from "react";
import { useReminderCreate } from "../hooks/useReminders"; // custom hook to manage reminder creation
import { useNavigate } from "react-router"; 

// Component for creating a new reminder
export function ReminderCreate() {
    
    const { 
        time, setTime,           
        name, setName,          
        loading,                
        error,                   
        successful,             
        createReminder           
    } = useReminderCreate();

    const navigate = useNavigate(); // used to redirect the user

    // If creation was successful, redirect to homepage
    if (successful) {
        navigate("/");
    }

    // Display a loading message while the form is submitting
    if (loading) {
        return ( 
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    // Display an error message if form submission failed
    if (error) {
        return (
            <>
                <h1>Uh Oh!</h1>
            </>
        );
    }

    // Render the form
    return (
        <>
            <h1>Create a Task</h1>
            <form onSubmit={createReminder}>
                {/* Input field for task name */}
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                />

                {/* Input for date/time selection */}
                <input 
                    type="datetime-local" 
                    value={time} 
                    onChange={(event) => setTime(event.target.value)} 
                />

                {/* Submit button */}
                <button type="submit">Create Reminder</button>
            </form>
        </>
    );    
}
