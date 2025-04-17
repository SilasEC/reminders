import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router"
import { ReminderCreate } from './pages/ReminderCreate.jsx'
import { ReminderEdit } from './pages/ReminderEdit.jsx'
import { ReminderList } from './pages/ReminderList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReminderList />} />
        <Route path="/reminders" element={<ReminderList />} />
        <Route path="/reminders/create" element={<ReminderCreate />} />
        <Route path="/reminders/edit/:ReminderId" element={<ReminderEdit />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
