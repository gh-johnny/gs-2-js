import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import GlobalStyles from './styles/GlobalStyles'

const App = () => (
    <>
        <GlobalStyles />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </>
)

export default App
