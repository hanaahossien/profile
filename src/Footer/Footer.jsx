import React from 'react'
import './Footer.scss'
export default function
  () {
  return (<footer>

 

      <div className="container">
        <div className="row g-5">
          <div className="col-md-4 ">
            <div className='text-center py-3'>
              <h2 className='mb-2'>
                LOCATION
              </h2>
              <p>
                2215 John Daniel Drive
                Clark, MO 65243
              </p>
            </div>

          </div>
          <div className="col-md-4 ">
            <div className='text-center py-3'>

              <h2 className='mb-2'>
                AROUND THE WEB
              </h2>
              <p className='icons'>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-facebook-f"></i>
              </p>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className='text-center py-3'>

              <h2 className='mb-2'>
                ABOUT FREELANCER

              </h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by Route

              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='darkfooter'>
        Copyright © Your Website 2023
      </div>
      </footer>  )
}
