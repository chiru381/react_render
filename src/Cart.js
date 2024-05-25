import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [cartdata, setCartData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`https://dummyjson.com/carts`).then((res) => {
      console.log(res.data.carts[0].products, '.....')
      setCartData(res.data.carts[0].products);
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  const changeHandler = (e) => {
    setSearch(e.target.value)
  }

  const handler = () => {
    let a = cartdata.filter((it) => it.title.toLowerCase().includes(search.toLowerCase()))
    console.log(a)
    setCartData(a)
  }

  return (
    <div>
        <h2>Welcome to Cart Page</h2>
        <h4>Back to</h4>
        <Link style={{ color: "gray" }} to="/header">Home Page</Link><br />
        <input type='text' onChange={changeHandler} onKeyUp={handler} value={search} placeholder='search' />

        <div style ={{ display:'flex', flexWrap: "wrap" }}>
      {cartdata.map((item) => (
                 
          <div className="card" style={{ width: '250px', backgroundColor: "blue", margin: "20px", borderRadius: "25px" }} key={item.id}>
              
              {/* <div className='card-header' style={{ padding: "10px", color: "black" }}>
              <img src={item.images[0]} style={{ borderRadius: "30px" }} className="card-img-top" height={250} width={200} alt="..." />
              </div> */}
              <div className="card-body" style={{ padding: "10px", color: "yellow", height: "250px" }}>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.title}</p>
                  <a href={item.id} style={{ color: "red" }} className="btn btn-primary">{item.title}</a>
              </div>
          </div>
      ))}
    </div>  
    </div>
  )
}

export default Cart