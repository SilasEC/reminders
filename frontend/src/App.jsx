import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReminderList } from "./hooks/useReminders";
import { Link } from 'react-router-dom';

function App() {
  const { reminders, loading, error } = useReminderList();

  if (loading) {
    return (
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
      <h1>Reminders</h1>
      <Link to="/reminders/create">Create a Reminder</Link>
      {reminders.map((reminder) => (
        <div key={reminder.id}>
          <h2>{reminder.name}</h2>
          <h3>{reminder.time}</h3>
        </div>))}
    </>
  );

}


export default App;
