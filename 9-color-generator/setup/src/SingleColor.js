import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bsg = rgb.join(',');

  const clicked = () => {
    setAlert(true);
    navigator.clipboard.writeText(`#${hexColor}`);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000)

    return () => clearTimeout(timeout);
  },[alert]); 

  return (
    <article className={`color ${index > 10 && 'color-light'}`} 
    style={{backgroundColor:`rgb(${bsg})`}} 
    onClick={clicked}>      
      <p className='percent-value'>{weight}%</p>
      <p className="color-value">{`#${hexColor}`}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
