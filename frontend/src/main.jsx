import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router"
import { ReminderCreate } from './pages/ReminderCreate.jsx'
import { ReminderList } from './pages/ReminderList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reminders" element={<ReminderList />} />
        <Route path="/reminders/create" element={<ReminderCreate />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
