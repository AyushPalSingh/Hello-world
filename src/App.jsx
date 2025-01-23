  import './App.css'
  import Login from './pages/Login'
  import Card from './component/Card'
  import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
  import { useState } from 'react'
  import PropPractice from './pages/PropPractice'
  import Home from './pages/Home'
  import { useNavigate } from 'react-router-dom'
  import PropsLearning from './pages/PropsLearning'
  
  function App() {
    const navigate = useNavigate()
    console.log("App.jsx called")
    let date = new Date()
    const [number, setNumber] = useState(0)

    return (
      // item -> vertically center
      // justify-center -> horizontally center


      <div className="App w-screen h-screen flex flex-col items-center justify-center gap-4">
        <button onClick={() => navigate(+1)} className="bg-blue-500 text-white p-2 rounded-md">Move Forward</button>
        <button onClick={() => navigate(-1)} className="bg-blue-500 text-white p-2 rounded-md">Move Back</button>
        <Routes>

          <Route path="/" element={<Home number={number} />} />

          <Route path="/login" element={<Login />} />



          <Route path="/counter" element={<Card initial={number} curr={date} name={"Ayush Singh"} />} />
          <Route path="/prop-practice" element={<PropPractice setNumber={setNumber} />} />
          // Outlet element is used to render the child routes
          <Route path="/abc" >
            <Route path="id" element={<Card initial={number} curr={date} name={"Ayush Singh"} />} />
          </Route>
          <Route path="/props-learning" element={<PropsLearning />} />
        </Routes>
      </div>

    )
  }
  export default App
