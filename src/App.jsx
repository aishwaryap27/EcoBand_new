import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardScreen from './components/dashboard/DashboardScreen'
import BlockDetailsPage from './components/dashboard/BlockDetailsPage'
import BinDetailsPage from './components/dashboard/BinDetailsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/blocks/:blockName" element={<BlockDetailsPage />} />
        <Route path="/bins/:binId" element={<BinDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
