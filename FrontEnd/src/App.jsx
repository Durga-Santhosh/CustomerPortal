
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateStudent from './CreateStudent'
import GetStudent from './GetStudent'
import UpdateStudent from './UpadateStudent'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />

      <Router>
        <Routes>
          <Route path="/" element={<CreateStudent />} />
          <Route path="/get" element={<GetStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
