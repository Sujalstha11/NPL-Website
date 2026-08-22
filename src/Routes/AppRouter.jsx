import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Teams from '../pages/Teams'
import TeamPlayers from '../pages/TeamPlayers'
import Matches from '../pages/Matches'
import PointsTable from '../pages/PointsTable'
import Tickets from '../pages/Tickets'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id/players" element={<TeamPlayers />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/points-table" element={<PointsTable />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
