import React from 'react'
import { NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const Navigation = () => {
  return  (
    <div>
      <div class="text-center ">
        <NavLink to="/"><button type="button" class="btn btn-outline-success">Home</button></NavLink>
        <NavLink to="/book"><button type="button" class="btn btn-outline-success">Book</button></NavLink>
        <NavLink to="/artists"><button type="button" class="btn btn-outline-success">Artists</button></NavLink>
      </div>
    </div>

  );
};


export default Navigation;
