import React from 'react'
import './loader.css'
const Loader = ({height}) => {
    return (
      <div className='loader-cont' style={height && {height: height}}>
          <div className='loader'></div>
      </div>
    )
  }
  

export default Loader