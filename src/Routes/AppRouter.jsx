import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Teams from '../pages/Teams'
import TeamPlayers from '../pages/TeamPlayers'
import Matches from '../pages/Matches'
import PointsTable from '../pages/PointsTable'
import Tickets from '../pages/Tickets'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'


function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
              
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default AppRouter