import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const { username, password } = user;

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value]})
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(user, '...')
  }
  return (
    <div style={{ margin: "100px" }}>
      <form onSubmit={submitHandler} style={{ paddingLeft: "80px", backgroundColor: "aqua", marginLeft: "350px", marginRight: "400px", borderRadius: "20px", paddingTop: "10px", paddingBottom: "20px" }}>
        <h3 style={{ color: "blueviolet" }}>Login Form</h3>
        <input type='text' onChange={changeHandler} name='username' value={username} placeholder="username" /><br/> 
        <input type='text' onChange={changeHandler} name='password' value={password} placeholder="password" /><br/> 
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login