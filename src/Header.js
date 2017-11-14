import React from 'react';
import weatherLogo from './images/weatherLogo.png';


export default function Header(props) {
  return (
    <header>
     <figure><img src={weatherLogo}></img></figure>
     <h1>My Weather Channel</h1>
     <h2>JSON data from the Weather Underground</h2>
    </header>
  )
}
