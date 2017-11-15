import React, {Component} from 'react';

export default class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  render () {
    return (
      <div>
       <p>{this.state.date.toLocaleString('en-Au', 'Australia/Brisbane')}</p>
      </div>
   )
  }
}
