import React from 'react'
import img1 from '../poert1.png'
import img2 from '../port2.png'
import img3 from '../port3.png'
import './Portfolio.css'
export default function portfolio() {
  return (<div className="py-4">

  <div className="container portfolio  mb-5">
      <div className="row g-4 ">
        <div className="col-md-12">
          <h2 className='my-4 text-center'>
          PORTFOLIO COMPONENT
          </h2>
        </div>

        <div className="col-md-4">
        <div className='rounded-3'>
            <img src={img1} alt="" className='img-fluid  ' />
          </div>
        </div>
        <div className="col-md-4">
          <div className='rounded-3'>
            <img src={img2} alt="" className='img-fluid ' />
          </div>
        </div>
        <div className="col-md-4">
          <div className=' rounded-3'>
            <img src={img3} alt="" className='img-fluid' />
          </div>
        </div>

        <div className="col-md-4">
        <div className='rounded-3'>
            <img src={img1} alt="" className='img-fluid ' />
          </div>
        </div>
        <div className="col-md-4">
        <div className='rounded-3'>

            <img src={img2} alt="" className='img-fluid ' />
          </div>
        </div>
        <div className="col-md-4">
        <div className='rounded-3'>
            <img src={img3} alt="" className='img-fluid' />
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}
