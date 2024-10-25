import React from 'react'


function Mans(props) {


  return (
    <>
      <div className="card">
        <img src={props?.data1.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props?.data1.title}</h5>
          <p className="card-text">{props?.data1.desc}</p>
          <p className="card-own text-success"><span className='oldpr'><del>{props?.data1.pre}</del></span>{props?.data1.mrp}</p>
          <p className="card-own text-success">{props?.data1.ratting}</p>
          <p className="card-text text text-primary"><small className="text-muted"></small></p>
                    <button class="btn btn-outline-success" type="submit">Buy Now </button>

        </div>
      </div>
    
    </>
  )
}

export default Mans