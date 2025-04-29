/**
 * index.jsx
 * 
 * Description:
 * Main entry point for the React application. This file sets up the root render,
 * initializes React Router for client-side routing, and maps routes to their
 * corresponding page components.
 * 
 * Author: Ethan L'Heureux & Silas Curtis
 * Created: 2025-04-17
 * Updated: 2025-04-24
 */

import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";

// Import application pages
import { ReminderCreate } from './pages/ReminderCreate.jsx';
import { ReminderEdit } from './pages/ReminderEdit.jsx';
import { ReminderList } from './pages/ReminderList.jsx';

// Mount the app at the root DOM node
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home page and default reminders list */}
        <Route path="/" element={<ReminderList />} />
        <Route path="/reminders" element={<ReminderList />} />

        {/* Create reminder page */}
        <Route path="/reminders/create" element={<ReminderCreate />} />

        {/* Edit reminder page (ReminderId comes from URL param) */}
        <Route path="/reminders/edit/:ReminderId" element={<ReminderEdit />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
