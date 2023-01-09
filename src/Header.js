import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Header=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Website</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" class="nav-link active">Home</Link>
      </li>
      <li class="nav-item">
        <Link to="/Register" class="nav-link active">Register</Link>
      </li>
      <li class="nav-item">
      <Link to="/Login" class="nav-link active">Login</Link>
      </li>
      <li class="nav-item">
      <Link to="/Profile" class="nav-link active">Profile</Link>
      </li>
      <div class="topnav-right">
    <a class="navbar-brand" href="#">Log out</a>
    </div>
    <span class="navbar-text">
    </span>
    </ul>   
  </div>
</nav>
    )
}

export default Header;