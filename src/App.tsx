import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import GlobalStyles from './styles/GlobalStyles'
import EnergySource from './pages/energy-source'

const App = () => (
    <>
        <GlobalStyles />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="energy-source/:id" element={<EnergySource />} />
            </Routes>
        </Router>
    </>
)

export default App
