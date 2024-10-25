import React from 'react'
import './Error.css';
import { Link } from 'react-router-dom';
function Errors() {
  return (
    <div className=' Container '>
      <div className='row'>
        <div className='col img '>
          <img src="https://w3-lab.com/wp-content/uploads/2022/09/FOR-WEB-404-astronaut.jpg" alt="Error" width={1400} height={600} />

        </div>
        <div className='backtohome '>
          <Link to="/">Back to Home </Link>

        </div>
      </div>
    </div>
  )
}

export default Errors