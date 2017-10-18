import React, { Component } from 'react';
import Cities from '../components/cities/Cities';
import Header from '../components/header/Header';
import Weather from '../components/weather/Weather';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApiCalls from '../services/ApiCalls';
import LocalStorage from '../services/LocalStorage';
import  'muicss/dist/css/mui.css';
import Container from 'muicss/lib/react/container';

class App extends Component {

  constructor(props) {
    super(props);
    this.restServices = new ApiCalls();
    this.localStorage = new LocalStorage();
    let city = this.localStorage.loadCity();
    console.log(city);
    this.state = {
      weatherData : {},
      showData : false,
      selectedCity : city,
      open: false
    };

    this.handleCityChange = this.handleCityChange.bind(this);

  }

componentWillMount = () => {
  this.loadWeatherDetails();
}

handleCityChange = (city) => {
  this.setState({selectedCity: city}, function stateUpdateComplete() {
    this.localStorage.saveCity(city);
    this.loadWeatherDetails();
   }.bind(this));
}

loadWeatherDetails = () => {
  this.restServices.fetchData(this.state.selectedCity).then(response => {
    let data = JSON.parse(response);
    //make sure that we get some resonse
    if(data.query.count!== 0) {
      this.setState({
        weatherData : data.query.results.channel,
        showData : true
      });
    }
    else {
      console.log("Error")
    }
  })
  .catch(e => {
    console.error(e);
  });
}

render() {
  return(
    <MuiThemeProvider>
    <div>
        <Header/>
        <Container fluid>
          <Cities handleCityChange={this.handleCityChange} city={this.state.selectedCity}/>
          <Weather data={this.state.weatherData} showData={this.state.showData} city={this.state.selectedCity}/>
        </Container>
     </div>
    </MuiThemeProvider>
    );
  }
}
export default App;