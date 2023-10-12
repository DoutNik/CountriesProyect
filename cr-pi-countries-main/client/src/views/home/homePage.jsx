import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCountries } from "../../redux/actions"

import Cards from '../../components/cards/cards'
import NavBar from '../../components/navBar/navBar'
import SearchBar from '../../components/searchBar/searchBar'

import './home.css'
import video from "../../assets/backgrounds/home_video2.mp4"

function homePage() {

  const dispatch = useDispatch();
  const allCountries = useSelector((state)=>state.allCountries);


  useEffect(()=>{
  dispatch(getCountries())
},[dispatch])

  return (
    <>
    <div className='home'>
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
    <NavBar />
    <SearchBar/>
    <Cards allCountries={allCountries} />
    </div>
    </>
  )
  }

export default homePage