import React from 'react';

class Clock extends React.Component{
  constructor() {
    super();
    this.state = {
      time: new Date(),
      weather:[ {description:"hi"} ],
      main:{temp:"tes"}
    };
    this.getLocation();
  }

  componentDidMount(){
    this.interval = setInterval( ()=>{
      let state = this.state;
      state["time"] = new Date();
      this.setState(state);
    },1000 );
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      this.currentWeather(lat,lon);

    });
  }

  currentWeather(lat, lon){
    $.ajax({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=0f56fd0f1adbe717970174ccec41a3e7`,
      success: (reply) => {
        this.setState(reply);
      }
    });

  }

  render(){
    console.log(this.state);
    return(
      <section id="root2">
        <p>{this.state.time.toString()}</p>
        <p>{ this.state.weather[0].description }</p>
        <p>{this.state.main.temp} K</p>
      </section>

    );
  }
}


export default Clock;
