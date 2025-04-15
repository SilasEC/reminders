import { API_URL } from "../constants";

export async function getReminders() {
    const response = await fetch(`${API_URL}/reminders/`, {
        headers: {
            'Content-Type': "application/json",
        },
    });
    if (!response.ok) throw new Error("Uh Oh!");

    return await response.json();
} 