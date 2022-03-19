import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

// const STYLES = ['btn-primary','btn-outline'];

// const SIZES = ['btn-medium','btn-large'];

export const Button = ({
  children,
  type,
  onclick,
  buttonstyle,
  buttonsize,
}) => {
  return (
    <Link to='signup' className='btn-mobile'>
      <button className={`btn ${buttonstyle} ${buttonsize}`}>
        {children}
      </button>
    </Link>
  );
};