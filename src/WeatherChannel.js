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
      unit: 'C'
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

  render() {
    return(
      <main>
        <Bar
          setCity={data=>this.setCity(data)}
          setForecast={data=>this.setForecast(data)}
          changetoF={data=>this.changetoF(data)}
          changetoC={data=>this.changetoC(data)}
        />
        <CityCondition condition={this.state.condition} unit={this.state.unit}/>
        <section id="right">
            <Forecaster days={this.state.days} unit={this.state.unit} />
        </section>
      </main>
    )
  }

}
