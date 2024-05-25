import React from 'react'
// import Header from './Header'

const Card = ({ data }) => {
  console.log(data, 'dfsdfsfds')
  return (
    <> 
    {/* <Header /> */}
    <div style ={{ display:'flex', flexWrap: "wrap" }}>
      {data.map((item) => (
          <div className="card" style={{ width: '250px', backgroundColor: "blue", margin: "20px", borderRadius: "25px" }} key={item.id}>
              
              <div className='card-header' style={{ padding: "10px", color: "black" }}>
              <img src={item.images[0]} style={{ borderRadius: "30px" }} className="card-img-top" height={250} width={200} alt="..." />
              </div>
              <div className="card-body" style={{ padding: "10px", color: "yellow", height: "250px" }}>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={item.id} style={{ color: "red" }} className="btn btn-primary">{item.category}</a>
              </div>
          </div>
      ))}
    </div>   
    </>
  )
}

export default Card