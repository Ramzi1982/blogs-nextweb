import React from 'react'
import PropTypes from 'prop-types'
import './Cards.css'
import {Link} from 'react-router-dom'





function Card({ title, imageSource, text,id }) {
  console.log(id)

  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp '>
      <div className='overflow'>
        <img src={imageSource} alt='' className='card-img-top' />
      </div>

      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          {
            text ? text : "You must submit a valid link so the instructor will access into and correct your checkpoint.hello every body"

          }
        </p>
        
        <Link to={`/Cards/${id}`}  className='btn btn-outline-secondary rounded-0'>Lire la suite </Link>
      
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  text: PropTypes.string

}

export default Card;