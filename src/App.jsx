import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Email from './pages/Email'
import Conversations from './pages/Conversations'
import Agenda from './pages/Agenda'
import Clients from './pages/Clients'
import Library from './pages/Library'
import Finance from './pages/Finance'
import ClientDetail from './pages/ClientDetail'
import ClientRedirect from './pages/ClientRedirect'
import ConsultDetail from './pages/ConsultDetail'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="canvas">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Email />} />
          <Route path="/conversaties" element={<Conversations />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/clienten" element={<Clients />} />
          <Route path="/clienten/:id" element={<ClientRedirect />} />
          <Route path="/clienten/:id/:dossierId/:tab" element={<ClientDetail />} />
          <Route path="/clienten/:id/:dossierId/consulten/:consultId" element={<ConsultDetail />} />
          <Route path="/bibliotheek" element={<Library />} />
          <Route path="/financien" element={<Finance />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
