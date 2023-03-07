import React from 'react'
import img1 from "../../assets/img/img1.jpeg"
import img2 from "../../assets/img/img2.jpeg"
import img3 from "../../assets/img/img3.jpeg"
import img4 from "../../assets/img/img4.jpeg"
import img5 from "../../assets/img/img5.jpeg"
import img6 from "../../assets/img/img6.jpeg"
import img7 from "../../assets/img/img7.jpeg"
import img8 from "../../assets/img/img8.jpeg"
import img9 from "../../assets/img/img9.jpeg"

const Second = () => {
  return (
    <section className='second-section'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="head">
              <h1>Portfolio</h1>
              <div className="line"><div className="ln"></div></div>
              <h2>Maecenas tempus nec mi et placerat. Duis at odio vitae ex gravida volutpat. Nulla finibus aliquet diam ut <br /> eleifend. Mauris consequat interdum quam. Mauris dui sapien, efficitur et cursus id, molestie fringilla turpis.</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="buttons">
              <button>All</button>
              <button>Websites</button>
              <button>Logo</button>
              <button>Graphic Design</button>
              <button>Development</button>
              <button>Video</button>
              <button>Photography</button>
            </div>
          </div>
        </div>
        <div className="row p-5">
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 p-2">
          <img src={img1} width="360px" height="270px" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <img src={img2} width="360px" height="270px" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <img src={img3} width="360px" height="270px" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 p-2">
          <img src={img4} width="360px" height="270px" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <img src={img5} width="360px" height="270px" />
        </div> 
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <img src={img6} width="360px" height="270px" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <img src={img7} width="360px" height="270px" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <img src={img8} width="360px" height="270px" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
          <img src={img9} width="360px" height="270px" />
        </div> 
        </div>
        
      </div>
    </section>
  )
}

export default Second