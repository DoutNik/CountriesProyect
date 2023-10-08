import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../../components/navBar/navBar';

import './detail.css'

export default function DetailPage() {
  const { ID } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState({});
  const [tourismActivities, setTourismActivities] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/countries/${ID}`)
      .then(({ data }) => {
        setCountry(data);
      })
      .catch(error => {
        console.error('Error fetching country details:', error);
        navigate('/home');
      });

    axios(`http://localhost:3001/countries/${ID}/activities`)
      .then(({ data }) => {
        setTourismActivities(data);
      })
      .catch(error => {
        console.error('Error fetching country activities:', error);
      });
  }, [ID, navigate]);

  return (
    <div className='detail-conteiner' style={{ backgroundImage: `url(${country.flagImage2})` }}>
      <NavBar/>
      <div>
      <h2>{country.name}</h2>
        <h3>Official name: {country.official_name}</h3>
        <div className='detail-container-row'>
        <div className='location-detail'>
          <p>Continent: {country.continent}</p>
          <p>Capital: {country.capital}</p>
          <p>Subregion: {country.subregion}</p>
        </div>
        <div className='numbers-detail'>
          <p>Area: {country.area}</p>
          <p>Population: {country.population}</p>
        </div>
        </div>
      </div>
      <div>
        <h4>Tourism Activities:</h4>
        <ul>
          {tourismActivities.map(activity => (
            <li key={activity.id}>{activity.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
