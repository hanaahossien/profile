import React from 'react'

export default function Contact() {
  return (
    <div className="container">
      <div className="row justify-content-center py-5 g-3">
 <div className="col-md-12">
        <h2 className='my-4 text-center'>
          contact us
        </h2>
 </div> <div className="col-md-8 ">
        <form class=" ">
        
            <input type="text" placeholder='user name' className='form-control mb-3' name="" id="" />
            <input type="number" placeholder='age' className='form-control mb-3' name="" id="" />
            <input type="email" placeholder='email' className='form-control mb-3' name="" id="" />
            <input type="password" placeholder='password' className='form-control mb-3' name="" id="" />
            <button type="submit" class="btn btn-primary mb-3">send </button>
          
        </form>
     </div>
      </div>
     



    </div>
  )
}
