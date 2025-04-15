import { API_URL } from "../constants";
import { useState, useEffect } from "react";


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
        loading,
        error,
        successful,
        createReminder,
    };

}


