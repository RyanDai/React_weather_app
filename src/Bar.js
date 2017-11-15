import React, {Component} from 'react';
import Clock from './Clock';
import axios from 'axios';


export default class Bar extends Component{

  constructor(props){
    super(props);
    this.state = {
      city: 'sydney'
    }

    this.sendRequest();

    /*
    this._conditionXHR = new XMLHttpRequest();
    this._conditionXHR.onload = () => {this.handleConditionData()};

		this._forecastXHR = new XMLHttpRequest();
		this._forecastXHR.onload = () => {this.handleForecastData()}
    */
  }

  sendRequest(){

    var weatherConditionURL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/'+this.state.city+'.json';
    var weatherForecastURL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/'+this.state.city+'.json';

    axios.get(weatherConditionURL)
      .then((response) => {
        this.props.setCity(response.data);
        return axios.get(weatherForecastURL);
      })
      .then((response) => {
        this.props.setForecast(response.data.forecast.simpleforecast.forecastday);
      })

      .catch((error) => {
        console.log(error);
      });
      /*
      axios.get(weatherForecastURL)
        .then((response) => {
          this.props.setForecast(response.data.forecast.simpleforecast.forecastday);
        })
        .catch((error) => {
          console.log(error);
        });*/
  }



  /*
  handleConditionData(){
    const xhr = this._conditionXHR;
		if (xhr.status === 200) {
			const respData = JSON.parse(xhr.responseText);
			console.log(respData.current_observation);

			this.props.setCity(respData);

		} else {
			alert(`Failed to load weather condition: ${xhr.status}`)
		}
  }

  handleForecastData(){
    const xhr = this._forecastXHR;
		if (xhr.status === 200) {
			const respData = JSON.parse(xhr.responseText);
			this.props.setForecast(respData.forecast.simpleforecast.forecastday)

		} else {
			alert(`Failed to load weather condition: ${xhr.status}`)
		}
  }

  load(){

    var weatherConditionURL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/conditions/q/Australia/'+this.state.city+'.json';
    var weatherForecastURL = 'http://api.wunderground.com/api/f029e46fd0232d12/geolookup/forecast10day/q/Australia/'+this.state.city+'.json';

    this._conditionXHR.open('GET', weatherConditionURL, true);
  	//weatherConditions.responseType = 'text';
  	this._conditionXHR.send(null);
  	this._forecastXHR.open('GET', weatherForecastURL, true);
  	//weatherForecast.responseType = 'text';
  	this._forecastXHR.send();
  }

  componentDidMount() {

	}

	componentWillUnmount() {
		this._conditionXHR = null;
		this._forecastXHR = null;
	}
  */

  changeToF(){
    this.props.changetoF();
  }

  changeToC(){
    this.props.changetoC();
  }

  changeTo5(){
    this.props.changeto5();
  }

  changeTo10(){
    this.props.changeto10();
  }


  render() {
    return (
     <nav>
       <input type='text' onChange={(e) => this.setState({city: e.target.value})} />
       <button onClick={() => {this.sendRequest()}}>Load</button>

       <label><input type="radio" name="unit" value="F" onChange={() => {this.changeToF()}} />F</label>
       <label><input type="radio" name="unit" value="C" onChange={() => {this.changeToC()}} />C</label>

       <label><input type="radio" name="num" value="5" onChange={() => {this.changeTo5()}} />5</label>
       <label><input type="radio" name="num" value="10" onChange={() => {this.changeTo10()}} />10</label>

       <Clock />

     </nav>
   )
  }
}
