import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCountries, getCountryByName } from "../../redux/actions"

import Cards from '../../components/cards/cards'
import NavBar from '../../components/navBar/navBar'
import SearchBar from '../../components/searchBar/SearchBar'

import './home.css'

function homePage() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state)=>state.allCountries);


  useEffect(()=>{
  dispatch(getCountries())
  /* return (() => {
    clearDetailPage()
  }) */
},[dispatch])

  return (
    <>
    <div className='home'>
    <NavBar />
    <SearchBar/>
    <Cards allCountries={allCountries} />
    </div>
    </>
  )
  }

export default homePage