import React from 'react'

function Carousel() {
    
// let db =  {image: "https://images-static.nykaa.com/creatives/caa2c3de-7e72-4e17-aac7-e110091236e1/default.jpg?tr=w-1200,cm-pad_resize" }
    
// let db1 =  {image: "https://images-static.nykaa.com/uploads/67a1cb2e-39c0-415b-b98c-4b8120af8477.jpg?tr=w-1200,cm-pad_resize" }
    
// let db2 =  {image: "https://images-static.nykaa.com/uploads/3c1b95c3-9c0d-482a-8a02-add7d9d916e5.jpg?tr=w-1200,cm-pad_resize" }
    
// let db3 =  {image: "https://images-static.nykaa.com/uploads/9c9c26e2-742a-4757-ab93-359d9d71ea70.jpg?tr=w-1200,cm-pad_resize" }

  return (
    <>
       <div id="carouselExampleIndicators" className="carousel slide pt-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner"data-bs-interval="1000" >
    <div className="carousel-item active">
      <img src={'https://images-static.nykaa.com/creatives/caa2c3de-7e72-4e17-aac7-e110091236e1/default.jpg?tr=w-1200,cm-pad_resize'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={"https://images-static.nykaa.com/uploads/9c9c26e2-742a-4757-ab93-359d9d71ea70.jpg?tr=w-1200,cm-pad_resize"} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={"https://images-static.nykaa.com/uploads/9c9c26e2-742a-4757-ab93-359d9d71ea70.jpg?tr=w-1200,cm-pad_resize"} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="2000">
      <img src={ "https://images-static.nykaa.com/uploads/9c9c26e2-742a-4757-ab93-359d9d71ea70.jpg?tr=w-1200,cm-pad_resize"} className="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    </>
  )
}

export default Carousel