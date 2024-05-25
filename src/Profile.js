import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [data, setData] = useState('')
  const [todos, setTodos] = useState([])

  const handler = (e) => {
    setData(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(data)
    const newTodos = [...todos, data]
    setTodos(newTodos)
    setData('')
  }
  return (
    <div>
        <h2>Welcome to Profile page</h2>
        <h4>Back to</h4>
        <Link style={{ color: "gray" }} to="/header">Home Page</Link>
        <br /><br /><br />
      <form onSubmit={submitHandler}>
        <input type='text' onChange={handler} value={data} placeholder='username' />
        <button>enter</button>
        </form>
        <br /><br /><br />
        <div> 
          {todos.map((todo, index) => (
            <p key={index}> {todo} <button>delete</button></p>
      
          )
          
          )}
        
        
        </div>
    </div>
  )
}

export default Profile