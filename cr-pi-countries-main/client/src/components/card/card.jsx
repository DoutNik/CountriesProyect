import { Link } from "react-router-dom"

import './card.css'

function Card({ country }) {
  const { name, flagImage, continent, capital, ID } = country

  return (
      <Link to={`/home/${ID}`}>
    <div className='card-container'>
      <h3>{name}</h3>
      <img src={flagImage} alt={`Flag of ${name}`} />
      <p>Continent: {continent}</p>
      <p>Capital: {capital}</p>
    </div>
      </Link>
  )
}

export default Card
