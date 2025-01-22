import './App.css'
import Login from './pages/Login'
import Card from './component/Card'
import { Routes, Route, Outlet } from 'react-router-dom'

function App() {
  console.log("App.jsx called")
  let date = new Date()        
  return (
    // item -> vertically center
    // justify-center -> horizontally center
    <div className="App w-screen h-screen flex flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<Card curr={date} name={"Ayush Singh"} />} />
        <Route path="/abc" element={<Login />}>
          <Route path="id" element={<Card curr={date} name={"Ayush Singh"} />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
