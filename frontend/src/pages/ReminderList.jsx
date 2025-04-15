import React, { useState } from "react";
import "../App.css";
import { useReminderList } from "../hooks/useReminders";
import { Link } from "react-router";




export function ReminderList() {
	const { reminders, loading, error } = useReminderList();

	if (loading) {
		return (
			<>
				<h1>Loading...</h1>
			</>
		);
	}

	if (error) {
		return (
			<>
				<h1>Uh Oh!</h1>
			</>
		);
	}

	return (
		<>
			<h1>Tasks</h1>
			<Link to="/reminders/create">Create a Reminder</Link>
			{reminders.map((reminder) => (
				<h2 key={reminder.id}>{reminder.name}</h2>
			))}
		</>
	);
}