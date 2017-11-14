import React from 'react';

// internally used by Forecaster, so no need to export
//funciton DailyItem(props) {

//}

function DailyItem(props) {
	const day = props.day;
  if(props.unit == 'C'){
    return (
  		<div className="item">
  			<span>{day.weekday}</span>
  			<span><img src={day.icon} /></span>
  			<span >{day.high.celsius}</span>
  			<span >{day.low.celsius}</span>
  		</div>
  	)
  } else {
    return (
  		<div className="item">
  			<span>{day.weekday}</span>
  			<span><img src={day.icon} /></span>
  			<span >{day.high.fahrenheit}</span>
  			<span >{day.low.fahrenheit}</span>
  		</div>
  	)
  }

}


export default function Forecaster(props) {
  return (
        //props.days.map((day, i) => <DailyItem key={`${day.weekday}_${i}`} day={day} unit={props.unit}/>)
        props.days.map(function(day, i){
          if(i < 4){
            return (<DailyItem key={`${day.weekday}_${i}`} day={day} unit={props.unit}/>)
          }
        })
  )




/*  return (
    <section id="right">
      <div>
        <span id="r1c1">{props.days[0].weekday}</span>
        <span> <img src={props.days[0].urllogo} ></img></span>
        <span id="r1c3">{props.days[0].high}</span>
        <span id="r1c4">{props.days[0].low}</span>
      </div>

      <div>
        <span id="r1c1">{props.days[1].weekday}</span>
        <span> <img src={props.days[1].urllogo} ></img></span>
        <span id="r1c3">{props.days[1].high}</span>
        <span id="r1c4">{props.days[1].low}</span>
      </div>

      <div>
        <span id="r1c1">{props.days[2].weekday}</span>
        <span> <img src={props.days[2].urllogo} ></img></span>
        <span id="r1c3">{props.days[2].high}</span>
        <span id="r1c4">{props.days[2].low}</span>
      </div>

      <div>
        <span id="r1c1">{props.days[3].weekday}</span>
        <span> <img src={props.days[3].urllogo} ></img></span>
        <span id="r1c3">{props.days[3].high}</span>
        <span id="r1c4">{props.days[3].low}</span>
      </div>
    </section>
  )*/
}
