/**
 * ReminderList.jsx
 * 
 * Description:
 * Displays a list of all reminders retrieved from the backend. Each reminder includes options 
 * to edit or delete. Also provides a link to create a new reminder. Handles loading and error states, 
 * and performs a full page reload after deletion to refresh the list.
 * 
 * Author: Ethan L'Heureux & Silas Curtis
 * Created: 2025-04-17
 * Updated: 2025-04-24
 */

import React, { useState } from "react";
import "../App.css"; 
import { useReminderList, useReminderDelete } from "../hooks/useReminders"; 
import { Link } from "react-router"; 

// Component displays a list of all reminders
export function ReminderList() {
	const { reminders, loading, error } = useReminderList(); // fetch the list of reminders
	const { deleteReminder } = useReminderDelete(); // get delete function from custom hook

	// Helper function: deletes a reminder and refreshes the page
	const deleteAndRefresh = (event, id) => {
		deleteReminder(event, id); // call the delete function
		window.location.reload(); // refresh the page to re-fetch updated list
	};

	// Show a loading screen while reminders are being fetched
	if (loading) {
		return (
			<>
				<h1>Loading...</h1>
			</>
		);
	}

	// Show an error message if the fetch failed
	if (error) {
		return (
			<>
				<h1>Uh Oh!</h1>
			</>
		);
	}

	// Render the list of reminders
	return (
		<>
			<h1>Tasks</h1>

			{/* Link to the create page */}
			<Link to="/reminders/create">Create a Reminder</Link>

			{/* Loop through reminders and show each one */}
			{reminders.map((reminder) => (
				<div key={reminder.id}>
					<h2>{reminder.name}</h2>
					
					{/* Format the time into something human-readable */}
					<h3>{(new Date(reminder.time)).toLocaleString()}</h3>
					
					{/* Edit link, passing the ID to the edit route */}
					<Link to={`/reminders/edit/${reminder.id}`}>Edit</Link>
					
					{/* Delete button that refreshes the page afterward */}
					<button onClick={(event) => deleteAndRefresh(event, reminder.id)}>Delete</button>
				</div>
			))}
		</>
	);
}
