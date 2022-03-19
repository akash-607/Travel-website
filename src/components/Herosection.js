import React from 'react'
import { Button } from './button'
import './Herosection.css'
import '../index.css'

function Herosection() {
  return (
    <div className='herosection'>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className='btns' buttonsize='btn-large' buttonstyle='btn-outline'>
          GET STARTED
        </Button>
        <Button className='btns' buttonsize='btn-large' buttonstyle='btn-primary'>
          WATCH TRAILER <i className='far fa-play-circle'></i>
        </Button>
      </div>
    </div>
  );
}

export default Herosection
