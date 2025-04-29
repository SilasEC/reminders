/**
 * ReminderEdit.jsx
 * 
 * Description:
 * This component renders a form for editing an existing reminder. It fetches the current
 * reminder data using the ID from the URL parameters, pre-fills the form with existing values,
 * and handles submission to update the reminder. Includes loading and error states,
 * and redirects to the home page upon successful update.
 * 
 * Author: Ethan L'Heureux & Silas Curtis
 * Created: 2025-04-17
 * Updated: 2025-04-24
 */

import React from "react";
import { useReminderEdit, useReminder } from "../hooks/useReminders"; 
import { useNavigate , useParams } from "react-router"; 

// Component for editing an existing reminder
export function ReminderEdit() {
    const params = useParams(); 
    const { reminder } = useReminder(params.ReminderId); // fetch the specific reminder by ID

    // Hook for managing the edit form state
    const { 
        time, setTime,        
        name, setName,        
        loading,             
        error,                
        successful,          
        editReminder         
    } = useReminderEdit(reminder);

    const navigate = useNavigate(); // used for redirecting after success

    // If the edit was successful, redirect back to home page
    if (successful) {
        navigate("/");
    }

    // Show a loading message while data is being fetched or submitted
    if (loading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    // Show an error message if something went wrong
    if (error) {
        return (
            <>
                <h1>Uh Oh!</h1>
            </>
        );
    }

    // Render the edit form
    return (
        <>
            <h1>Edit a Task</h1>
            <form onSubmit={editReminder}>
                {/* Input for the reminder name */}
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                />

                {/* Input for selecting date and time */}
                <input  
                    type="datetime-local" 
                    value={time} 
                    onChange={(event) => setTime(event.target.value)} 
                />

                {/* Submit button */}
                <button type="submit">Submit Edit</button>
            </form>
        </>
    );    
}
