import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 style={{ backgroundColor: "aqua", color: "brown" }}>Welcome to React Application</h1>
        <h6>Please Click on</h6>
        <Link style={{ color: "gray" }} to="/header">Home Page</Link><br /><br />
        <Link style={{ color: "gray" }} to="/register">Register Page</Link>
    </div>
  )
}

export default Home