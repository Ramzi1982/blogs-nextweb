import React from 'react'
import image3 from '../assets/image3.webp'
import './Card1.css'


function Card3() {
  return (
    <div className='singleCard'>
    <div className='singleCardWrapper'>
      <img src={image3} alt='' className='singleCardImg' />
      <h1 className='singleCardTitle'>La technologie de votre site web
     
      <div className='singleCardEdit'>
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
      </h1>
      <div className='singleCardInfo'>
        <span >NextWebPlus</span>
      </div>
    </div>
    <p className='singleCardText'>L’e-business en France montre de bonnes performances, la France est effectivement le cinquième marché de l’e-business dans le monde ! Le territoire hexagonal est plein d’opportunités pour le web. Selon la Fevad, le marché français a atteint un total de 16,9 milliard d’euros au troisième trimestre 2016. Vous avez le projet de lancer votre entreprise sur le net et vous cherchez la meilleure technologie pour votre site web, CMS ou Framework ? L’industrialisation et la technologie du web a bien évolué, de nouveaux concepts ont ainsi vu le jour. Désormais, il existe de nombreux logiciels mais seulement 2 types de développement pour connaître quelle sera la meilleure technologie, pour l’usage et les objectifs de votre projet web.</p>
  </div>
  )
}

export default Card3