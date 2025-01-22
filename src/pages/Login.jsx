import { useNavigate } from 'react-router-dom'
function Login() {
  console.log("Login.jsx called")
  const navigate = useNavigate()
  function handleSubmit(event){
    event.preventDefault()
    navigate("/counter")
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="Enter your name" id="name"/>
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Enter your password" id="password" />
      <button>Login</button>
    </form>
      
    </div>
  )
}
export default Login

