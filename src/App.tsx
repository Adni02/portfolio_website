import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Awards from './pages/Awards'
import Leadership from './pages/Leadership'
import Supervision from './pages/Supervision'
import Publications from './pages/Publications'

function App() {
  return (
    <Router basename="/priyankasingh">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/supervision" element={<Supervision />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
