import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../../components/navBar/navBar';
import brazil from "../../assets/music/brazil.mp3"
import argentina from "../../assets/music/argentina.mp3"

import './detail.css';

export default function DetailPage() {
  const { ID } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState({});
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3001/countries/${ID}`)
      .then(({ data }) => {
        setCountry(data);
      })
      .catch((error) => {
        console.error('Error fetching country details:', error);
        navigate('/home');
      });
  }, [ID, navigate]);

  useEffect(() => {
    setActivities(country.TourismActivities || []);
  }, [country]);

  return (
    
    <div className="detail-conteiner" style={{ backgroundImage: `url(${country.flagImage2})` }}>
      <NavBar />
      <audio autoPlay loop>
  {country.name === 'Brazil' && (
    <source src={brazil} type="audio/mpeg" />
  )}
  {country.name === 'Argentina' && (
    <source src={argentina} type="audio/mpeg" />
  )}
  Tu navegador no soporta la reproducción de audio.
</audio>
      <div>
        <h2>{country.name} <span>(</span>{country.ID}<span>)</span>
        </h2>
        <h3>Official name: {country.official_name}</h3>

        <div className="detail-container-row">
          <div className="location-detail">
            <p>Continent:<br/> {country.continent}</p>
            <p>Capital:<br/> {country.capital}</p>
            <p>Subregion:<br/> {country.subregion}</p>
          </div>
          <div className="numbers-detail">
            <p>Area:<br/> {country.area}</p>
            <p>Population:<br/> {country.population}</p>
          </div>
        </div>
      </div>
      <div className='detail-activities'>
  <h4>Tourism Activities:</h4>
  {activities.length > 0 ? (
    <ul>
      {activities.map((activity) => (
        <li className='li-activities' key={activity.id}>
          <strong>Nombre:</strong> {activity.name}<br />
          <strong>Descripción:</strong> {activity.description}<br />
          <strong>Temporada:</strong> {activity.season}<br />
          <strong>Duración:</strong> {activity.duration}<br />
          <strong>Dificultad:</strong> {activity.difficulty}
        </li>
      ))}
    </ul>
  ) : (
    <p>No hay actividades disponibles para este país.</p>
  )}
</div>
    </div>
  );
}
