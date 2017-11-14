import React, {Component} from 'react';


export default class Bar extends Component{

  constructor(props){
    super(props);
    this.state = {
      city: 'sydney',
    }

    this._conditionXHR = new XMLHttpRequest();
    this._conditionXHR.onload = () => {this.handleConditionData()};

		this._forecastXHR = new XMLHttpRequest();
		this._forecastXHR.onload = () => {this.handleForecastData()}
  }

  handleConditionData(){
    const xhr = this._conditionXHR;
		if (xhr.status === 200) {
			const respData = JSON.parse(xhr.responseText);
			console.log(respData.current_observation);
			// IMPORTANT
			// time to invoke callback from parent <WeatherChannel />
			// when data is ready, like telling the parent
			// 'hey, data is ready, you can update your state now'
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
		this.load();
	}

	// clean up resource when comp unmounted
	componentWillUnmount() {
		this._conditionXHR = null;
		this._forecastXHR = null;
	}

  changeToF(){
    this.props.changetoF();
  }

  changeToC(){
    this.props.changetoC();
  }


  render() {
    return (
     <nav>
       <input type='text' onChange={(e) => this.setState({city: e.target.value})} />
       <button onClick={() => {this.load()}}>Load</button>


       <input type="radio" name="unit" value="F" onChange={() => {this.changeToF()}} />F
       <input type="radio" name="unit" value="C" onChange={() => {this.changeToC()}} />C


     </nav>
   )
  }
}
