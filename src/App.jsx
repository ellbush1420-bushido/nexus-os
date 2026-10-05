import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LinkInBio from './pages/LinkInBio'
import Dashboard from './pages/Dashboard'
import QRGenerator from './pages/QRGenerator'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LinkInBio />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/qr" element={<QRGenerator />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
