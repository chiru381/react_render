import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const User = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`https://dummyjson.com/users`).then((res) => {
      console.log(res.data.users, '...user')
      setUser(res.data.users)
    })
  }, [])

  const changeHandler = (e) => {
    setSearch(e.target.value)
  }
  const handler = () => {
    let filter_data = user.filter((it) => it.username.toLowerCase().includes(search.toLowerCase()) )
    console.log(filter_data, '...filter data')
    setUser(filter_data)
  }
  return (
    <div>
        <h2>Welcome to Cart Page</h2>
        <h4>Back to</h4>
        <Link style={{ color: "gray" }} to="/header">Home Page</Link><br />
         <input type='text' onChange={changeHandler} onKeyUp={handler} value={search} placeholder='search' /> 

        <div style ={{ display:'flex', flexWrap: "wrap" }}>
      {user.map((item) => (
                 
          <div className="card" style={{ width: '250px', backgroundColor: "blue", margin: "20px", borderRadius: "25px" }} key={item.id}>
              
              <div className='card-header' style={{ padding: "10px", color: "black" }}>
              <img src={item.image} style={{ borderRadius: "30px" }} className="card-img-top" height={250} width={200} alt="..." />
              </div>
              <div className="card-body" style={{ padding: "10px", color: "yellow", height: "250px" }}>
                  <h5 className="card-title">{item.username}</h5>
                  <p className="card-text">{item.address.city}</p>
                  <a href={item.id} style={{ color: "red" }} className="btn btn-primary">{item.email}</a>
              </div>
          </div>
      ))}
        </div>  
    </div>
      
  )
}

export default User