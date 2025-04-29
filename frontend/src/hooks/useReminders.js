/**
 * useReminders.js
 * 
 * Description:
 * A collection of custom React hooks used to interact with a backend reminders API.
 * These hooks encapsulate logic for retrieving, creating, editing, and deleting reminders.
 * They manage loading, error, and success state internally.
 * 
 * Hooks Exported:
 * - useReminder(id): Fetch a single reminder by ID.
 * - useReminderList(): Fetch a list of all reminders.
 * - useReminderCreate(): Create a new reminder.
 * - useReminderEdit(todo): Edit an existing reminder using initial data.
 * - useReminderDelete(): Delete a reminder by ID.
 * 
 * Author: Ethan L'Heureux & Silas Curtis
 * Created: 2025-04-17
 * Updated: 2025-04-24
 */

import { API_URL } from "../constants";
import { useState, useEffect } from "react";

/** Fetch a single reminder by its ID from the API. */
export function useReminder(id) {
    const [reminder, setReminder] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/reminders/${id}`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            setLoading(false);
            throw new Error("Error getting data");
        })
        .then(json => {
            setLoading(false);
            setReminder(json);
        })
        .catch((err) => {
            setError(err);
        })
    }, []);

    return { reminder, loading, error };
}

/** Fetch a list of all reminders from the API. */
export function useReminderList() {
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/reminders/`, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            setLoading(false);
            throw new Error("Error getting data");
        })
        .then(json => {
            setLoading(false);
            setReminders(json);
        })
        .catch((err) => {
            setError(err);
        })
    }, []);

    return { reminders, loading, error };
}

/** Hook for creating a new reminder. */
export function useReminderCreate() {
    const [name , setName] = useState("");
    const [time , setTime] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successful, setSuccessful] = useState(false);

    /**
     * Submits a new reminder to the API
     * @param {SubmitEvent} event - Form submission event
     */
    const createReminder = (event) => {
        event.preventDefault();
        setLoading(true)
        fetch(`${API_URL}/reminders/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                time: time,
            }),
        })
        .then((response) => {
            setLoading(false);
            if(response.ok) {
                setSuccessful(true)
                return;
            }
            throw new Error("Uh Oh!");
        })
        .catch((err) => {
            setError(err);
            setSuccessful(false);
        })
    };

    return {
        name,
        setName,
        time,
        setTime,
        loading,
        error,
        successful,
        createReminder,
    };
}

/**
 * Hook for editing an existing reminder.
 * Initializes state from the passed-in reminder object.
 */
export function useReminderEdit(todo) {
    const [name , setName] = useState(todo?.name ?? "");
    const [time , setTime] = useState(todo?.time ?? "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successful, setSuccessful] = useState(false);

    /**
     * Sends a PUT request to update the reminder.
     * @param {SubmitEvent} event - Form submission event
     */
    const editReminder = (event) => {
        event.preventDefault();
        setLoading(true)
        fetch(`${API_URL}/reminders/${todo.id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                time: time,
            }),
        })
        .then((response) => {
            setLoading(false);
            if(response.ok) {
                setSuccessful(true)
                return;
            }
            throw new Error("Uh Oh!");
        })
        .catch((err) => {
            setError(err);
            setSuccessful(false);
        })
    };

    return {
        name,
        setName,
        time,
        setTime,
        loading,
        error,
        successful,
        editReminder,
    };
}

/** Hook for deleting a reminder by ID. */
export function useReminderDelete() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successful, setSuccessful] = useState(false);

    /**
     * Sends DELETE request to remove a reminder.
     * @param {SubmitEvent} event - Button/form event
     */
    const deleteReminder = (event, todo) => {
        event.preventDefault();
        setLoading(true)
        fetch(`${API_URL}/reminders/${todo}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            setLoading(false);
            if(response.ok) {
                setSuccessful(true)
                return;
            }
            throw new Error("Uh Oh!");
        })
        .catch((err) => {
            setError(err);
            setSuccessful(false);
        })
    };

    return {
        loading,
        error,
        successful,
        deleteReminder,
    };
}
