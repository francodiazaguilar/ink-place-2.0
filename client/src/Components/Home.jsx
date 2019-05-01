import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DemoCarousel from './DemoCarousel.jsx';

const Home = (props) => (
  <div className = "body">
    <div className = "container">
      <h1 align="center" className="header">InkPlace</h1>
      <div align="center">
        <select id="dropdown" name="Estilos" onChange={(e) => props.selectStyles(e.target.value)}>
          {props.data.map((style) =>
            (<option value={style.id}>{style.style}</option>
            )
          )}
        </select>
      </div>

      <div className = "p-tag">
        <p>{props.style.info}</p>
      </div>
      <center><div className='slideshow'>
        <DemoCarousel />
      </div></center>
    </div>
  </div>

);

export default Home;
