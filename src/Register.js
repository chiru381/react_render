import React, { useState } from 'react'

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmpassword: '',
    email: '',
    phonenumber: ''
  })
  const [data, setData] = useState({})

  const { username, password, confirmpassword, email, phonenumber } = user;

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value]})
    setData({})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    window.alert('Registration Successfully')
    console.log(user, '...')
    setData({})
  }

  return (
    <div style={{ margin: "100px" }}>
      <form onSubmit={submitHandler} style={{ paddingLeft: "80px", backgroundColor: "aqua", marginLeft: "350px", marginRight: "400px", borderRadius: "20px", paddingTop: "10px", paddingBottom: "20px" }}>
        <h3 style={{ color: "blueviolet" }}>Registration Form</h3>
        <input type='text' name='username' onChange={changeHandler} value={username}  placeholder="username" /><br/> 
        <input type='text' name='password' onChange={changeHandler} value={password} placeholder="password" /><br/> 
        <input type='text' name='confirmpassword' onChange={changeHandler} value={confirmpassword} placeholder="confirmpassword" /><br/> 
        <input type='text' name='email' onChange={changeHandler} value={email} placeholder="email" /><br/> 
        <input type='text' name='phonenumber' onChange={changeHandler} value={phonenumber} placeholder="phonenumber" /><br/> 
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register