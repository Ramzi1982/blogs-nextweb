import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.webp'




const cards = [
  {
    id: 1,
    title: 'Realiser son cahier des charges',
    image: image1



  },
  {
    id: 2,
    title: 'Le futur e-commerce de demain',
    image: image2


  },
  {
    id: 3,
    title: 'La technologie pour votre site web',
    image: image3,
  }
]

function Cards() {
  
  return (
    <div className='container display-flex justify-content-center align-items-center h-100 '>
      <div className='row'>
        {
          cards.map((card) => (
            <div className='col-md-4' key={card.id}>
              <Card title={card.title} imageSource={card.image} text={card.text} />
            </div>

          ))
        }


      </div>


    </div>
  )
}

export default Cards;