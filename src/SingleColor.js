import React, { useState, useEffect } from 'react'
// hex로 변환
import rgbToHex from './utils'

// rgb = color value
const SingleColor = ({ rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  // rgb컬러만 따로 빼기
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
  },[alert])

  // rgb color를 담은 bcg를 backgroundColor로 출력
  return ( 
  <article 
    className={`color ${index > 10 && 'color-light'}`} 
    style={{backgroundColor:`rgb(${bcg})`}}
    onClick = {() => {
      setAlert(true)
      navigator.clipboard.writeText(hexValue)
    }}
  >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
