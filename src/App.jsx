import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { CreateProject } from './pages/CreateProject'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<CreateProject />} />
      </Routes>
    </Router>
  )
}

export default App
