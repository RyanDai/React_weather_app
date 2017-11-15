import React, {Component} from 'react';
import CityCondition from './CityCondition';
import Forecaster from './Forecaster';
import Bar from './Bar';





export default class WeatherChannel extends Component{
  constructor(props){
    super(props);
    this.state = {
      condition: {
        city: "",
        whether: "",
        temp_c: "",
        temp_f: ""
      },

      days: [],
      unit: 'C',
      number: 10
    }
  }

  setCity(data){
    const condition = {
      city: data.current_observation.display_location.full,
      whether: data.current_observation.weather,
      temp_c: data.current_observation.temp_c,
      temp_f: data.current_observation.temp_f
    }
    
    this.setState({condition});
  }

  setForecast(data){
    const days = data.map(function(d){
      return{
        weekday: d.date.weekday,
  			high: d.high,
        low: d.low,
  			icon: d.icon_url
      }
    });
    this.setState({days});
  }

  changetoF(){
    this.setState({unit:'F'});
  }

  changetoC(){
    this.setState({unit:'C'});
  }

  changeto5(){
    this.setState({number:5});
  }

  changeto10(){
    this.setState({number:10});
  }

  render() {
    return(
      <main>
        <Bar
          setCity={data=>this.setCity(data)}
          setForecast={data=>this.setForecast(data)}
          changetoF={data=>this.changetoF(data)}
          changetoC={data=>this.changetoC(data)}
          changeto5={data=>this.changeto5(data)}
          changeto10={data=>this.changeto10(data)}
        />
        <CityCondition condition={this.state.condition} unit={this.state.unit}/>
        <section id="right">
            <Forecaster days={this.state.days} unit={this.state.unit} number={this.state.number}/>
        </section>
      </main>
    )
  }

}
