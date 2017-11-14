import React from 'react';

export default function CityCondition(props) {
  const {city, weather, temp} = props;
  if(props.unit == 'C'){
    return (
       <section id="left">
       	<div id="location">{props.condition.city} </div>
       	<div id="weather">{props.condition.whether}</div>
       	<div id="temperature">{props.condition.temp_c}</div>
       </section>
         )
  } else {
    return (
       <section id="left">
       	<div id="location">{props.condition.city} </div>
       	<div id="weather">{props.condition.whether}</div>
       	<div id="temperature">{props.condition.temp_f}</div>
       </section>
         )
  }

}
