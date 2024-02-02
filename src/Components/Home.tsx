import React from 'react'
import Products from './Products'
import ProductFeature from './ProductFeature'
import HighlightSer from './HighlightSer'


const Home = () => {
  return (
    <>  
     <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="../Assest/bg.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column
        justify-content-center align-item-center text-sm-end
        ">
          <div className="container justify-content-center ">
            <h5 className="card-title display-5 fw-bolder mb-0 ml-4">New Season Arrivals</h5>
            <p className="card-text lead fs-2">
                CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
     <Products/>
    </div>
    <div>
      <ProductFeature/>
    </div>
    <div>
      <HighlightSer/>
    </div>
    </>

  )
}

export default Home