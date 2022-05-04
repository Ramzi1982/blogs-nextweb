import React from 'react'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.webp'
import CardD from './CardD'
import { useParams} from "react-router-dom";

const cardsD = [
  {
    id: 1,
    title: 'Realiser son cahier des charges',
    image: image1,



  },
  {
    id: 2,
    title: 'Le futur e-commerce de demain',
    image: image2


  },
  {
    id: 3,
    title: 'La technologie de votre site web',
    image: image3,
  }
]

function CardsD ({match}) {
  const { id } = useParams();

const card =  cardsD.find(e => e.id == id)
console.log(id,card)
  return (

    <div>

          <div key={card.id}>
            <CardD title={card.title} imageSource={card.image} text={card.text} id={card.id} />
          </div>

    </div>
  )
}

export default CardsD;