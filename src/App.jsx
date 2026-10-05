import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LinkInBio from './pages/LinkInBio'
import Dashboard from './pages/Dashboard'
import QRGenerator from './pages/QRGenerator'
import BasiliskDeck from './pages/BasiliskDeck'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinkInBio />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/basilisk" element={<BasiliskDeck />} />
        <Route path="/qr" element={<QRGenerator />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
