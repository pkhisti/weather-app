import React , {Component} from 'react';
import './weather.css';
import TenDays from '../tendays/TenDays';
import Chart from '../chart/Chart';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Toggle from 'material-ui/Toggle';

const style = {
  height: 200,
  maxwidth: 1000
};

class Weather extends Component {

constructor(props){
    super(props);
    this.state = {
        isTrend: false,
        randomNumber: this.getRandomImage()
    }
    this.handleShowTrend = this.handleShowTrend.bind(this);
}

handleShowTrend(){
     this.setState({
        isTrend: !this.state.isTrend
     });
}

getRandomImage() {
    return parseInt(Math.random() * 5, 0);
}
render() {
    if (this.props.showData) {
        let temperature = this.props.data.item.condition.temp + " °" + this.props.data.units.temperature;
        let details = "Temperature: " + temperature + " | Wind: " + this.props.data.wind.speed + " " + this.props.data.units.speed + " | Condition: " + this.props.data.item.condition.text;
        let cityImage = "./images/" + this.state.randomNumber + ".jpg";
        let data = this.props.data.item.forecast.map((item)=>{
             return {"date": item.date,
              "high": parseInt(item.high),
              "low": parseInt(item.low)}
         });
         let conditionImage = "http://l.yimg.com/a/i/us/we/52/"+this.props.data.item.condition.code+".gif";
        return (
            <div>
                <Container fluid>
                <Row>
                    <Col xs={12} md={12} lg={10}>
                        <Card >
                            <CardHeader
                            title={this.props.data.item.title}
                            subtitle={temperature}
                            avatar={
                                <Avatar src={conditionImage}  backgroundColor="white"/>}
                            />
                            <CardMedia
                            overlay={<CardTitle title={temperature} subtitle={details} />}>
                            <img src={cityImage} alt="" style={style}/>
                            </CardMedia>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}  md={1} lg={1}>
                    <Toggle label="Trend" defaultToggled={this.state.trend} onToggle={this.handleShowTrend}/>
                    </Col>
                     <Col xs={12}  md={5} lg={5}>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={10}>
                    <div className={this.state.isTrend ? '' : 'hidden'}>
                        <Chart data={data}/>
                    </div>
                    </Col>
                </Row>
                </Container>
                 <div className={this.state.isTrend ? 'hidden': ''}>
                <TenDays forecast={this.props.data.item.forecast} unit={this.props.data.units.temperature}/>
                </div>
            </div>
            );
        }
        else return <div></div>;
    }
}

export default Weather;