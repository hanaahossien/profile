import React from 'react'
import imge from '../avataaars.svg'
import './Home.css'
export default function Home() {
  return (
    <div className='py-5 home text-center d-flex justify-content-center align-items-center' >
      <div>
         <div><img src={imge} alt=""  className='w-75  '/>
      </div>
     <div className='py-5'> 
      <h1>
        React project
      </h1>
     UI/UX Designer -  UI Developer  - web Designer
      </div> 
      </div>
     
    </div>
  )
}
