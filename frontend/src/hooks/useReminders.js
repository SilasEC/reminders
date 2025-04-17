import { API_URL } from "../constants";
import { useState, useEffect } from "react";


export function useReminder(id) {
    const [reminder, setReminder] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(
        () => {
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
        }, 
    []);


    return { reminder, loading, error };
}


export function useReminderList() {
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(
        () => {
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
        }, 
    []);


    return { reminders, loading, error };
  
}

export function useReminderCreate() {
    const [name , setName] = useState("");
    const [time , setTime] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successful, setSuccessful] = useState(false);

    /**
     * Create a new reminder and send the request
     * @param {SubmitEvent} event 
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


export function useReminderEdit(todo) {
    const [name , setName] = useState(todo?.name ?? "");
    const [time , setTime] = useState(todo?.time ?? "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successful, setSuccessful] = useState(false);

    /**
     * Create a new reminder and send the request
     * @param {SubmitEvent} event 
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



export function useReminderDelete() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successful, setSuccessful] = useState(false);

    /**
     * Create a new reminder and send the request
     * @param {SubmitEvent} event 
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

