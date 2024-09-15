import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Navbar } from './components/Navbar.tsx';
import './index.css'
import { Landing } from './pages/landing.tsx';
import { App } from './pages/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
