import React from 'react'
import Carditem from './carditem'
import './cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out this EPIC! destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src='images/img-9.jpg'
              text='Explore the beautiful waterfall inside the jungle'
              path='/services'
            />
            <Carditem
              src='images/img-2.jpg'
              text='Enjoy the breeze of bali islands in a cruise'
              path='/services'
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path='/services'
            />
            <Carditem
              src='images/img-1.jpg'
              text='Explore tall mountains that touches the sky'
              path='/services'
            />
            <Carditem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
