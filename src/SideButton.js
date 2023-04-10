import React from 'react'
import { Store } from './Context';
import { useState, useEffect, useContext } from 'react';
import './SideButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


function SideButtons() {
  const { Button1, setButton1, Button2, setButton2, Button3, setButton3} = useContext(Store)

  return (
    <div className='buttonsContainer'>
      <div className='buttonContainer'>
        <button
          className={Button1 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton1(!Button1)}
        >
          <button
            className='slider'
            onClick={() => setButton1(!Button1)}
            style={Button1 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} size="xs" color="blue" style={{ height: "25px", marginLeft: "20px" }} />
        <div className='description'>{`All Fellow eyes (n = 587)`}</div>
      </div>
      <div className='buttonContainer'>
        <button
          className={Button2 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton2(!Button2)}
        >
          <button
            className='slider'
            onClick={() => setButton2(!Button2)}
            style={Button2 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} style={{  height: "25px", marginLeft: "20px" }} color="black" />
        <div className='description'>{`Timolol BID (n =197)`}</div>
      </div>
      <div className='buttonContainer'>
        <button
          className={Button3 ? "buttonON" : "buttonOFF"}
          onClick={() => setButton3(!Button3)}
        >
          <button
            className='slider'
            onClick={() => setButton3(!Button3)}
            style={Button3 ? { transform: `translateX(-5px)`, transition: `0.5s` } : { transform: `translateX(20px)`, transition: `0.5s` }}
          ></button>
        </button>
        <FontAwesomeIcon icon={faCircle} size="xs" color="green" style={{ height: "25px", marginLeft: "20px" }} />
        <div className='description'>{`Bimatoprost implant 10 µg (n= 197)`}</div>
      </div>
    </div>
  )
}

export default SideButtons