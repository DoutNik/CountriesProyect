import { useState } from 'react'
import Card from '../card/card'
import './cards.css'
import { Pagination } from '../pagination/pagination'

function Cards({ allCountries }) {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  const max = allCountries.length / perPage

  const countriesList = allCountries

  return (
    <div className='cards-container'>
      {countriesList
        ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((country) => (
          <Card key={country.id} country={country} className="card" />
        ))}
      <Pagination page={page} setPage={setPage} max={max} />
    </div>
  )
}

export default Cards
