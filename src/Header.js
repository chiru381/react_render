import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card';

const Header = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [res, setRes] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      console.log(res.data.products, '....1')
      setData(res.data.products)
      setRes(res.data.products)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const handleChange = () => {
    let response = res.filter((it) => it.brand.toLowerCase().includes(search.toLowerCase()))
    console.log(response)
    setRes(response)
  }

  return (
    <div>
        <header style={{ display: "flex", backgroundColor: "yellow" }}>
            <Link style={{ margin: "25px", color: "brown", fontWeight: "bold", color: "blueviolet", textDecoration: "none" }} to="/">Amazon</Link>
            <Link style={{ margin: "25px", color: "brown", fontWeight: "bold", textDecoration: "none" }} to="/cart">Cart</Link>
            <Link style={{ margin: "25px", color: "brown", fontWeight: "bold", textDecoration: "none" }} to="/profile">Profile</Link>
            <Link style={{ margin: "25px", color: "brown", fontWeight: "bold", textDecoration: "none" }} to="/users">Users</Link>
            <Link style={{ margin: "25px", color: "brown", fontWeight: "bold", textDecoration: "none" }} to="/register">Register</Link>
            <Link style={{ margin: "25px", color: "brown", fontWeight: "bold", textDecoration: "none" }} to="/login">Login</Link>
        
        <div style={{ marginLeft: "400px", marginTop: "20px" }}>
          <input  type='text' onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search" />
          <button onClick={handleChange}>Search</button>
        </div>
        </header>
        <Card data={res} />
    </div>
  )
}

export default Header