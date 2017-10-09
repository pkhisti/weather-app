import React , {Component} from 'react';
import './weather.css';
import TenDays from '../tendays/TenDays';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const style = {
  height: 200,
  maxwidth: 1000
};
class Weather extends Component {

getRandomImage() {
    return parseInt(Math.random() * 5, 0);
}
render() {

    if (this.props.showData) {
        let deg = "&deg;"
        let temperature = this.props.data.item.condition.temp + " °" + this.props.data.units.temperature;
        let details = "Temperature: " + temperature + " | Wind: " + this.props.data.wind.speed + " " + this.props.data.units.speed + " | Condition: " + this.props.data.item.condition.text;
        let cityImage = "./images/" + this.getRandomImage() + ".jpg";
         let data = this.props.data.item.forecast.map((item)=>{
             return {"day": item.day,
              "high": parseInt(item.high),
              "low": parseInt(item.low)}
         });
         console.log(data);
        return (
            <div>
                <Grid fluid>
                <Row>
                    <Col xs={12} s={6} md={12} lg={10}>
                        <Card >
                            <CardHeader
                            title={this.props.data.item.title}
                            subtitle={temperature}
                            avatar="./images/icon.jpeg"
                            />
                            <CardMedia
                            overlay={<CardTitle title={temperature} subtitle={details} />}>
                            <img src={cityImage} alt="" style={style}/>
                            </CardMedia>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} s={6} md={12} lg={10}>
                      <ResponsiveContainer aspect={6}  width="100%">
                     <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <Line type="monotone" dataKey="high" stroke="#ff7300" yAxisId={0} />
                        <Line type="monotone" dataKey="low" stroke="#387908" yAxisId={1} />
                        </LineChart>
                      </ResponsiveContainer>
                    </Col>
                </Row>
                </Grid>
                <TenDays forecast={this.props.data.item.forecast} unit={this.props.data.units.temperature}/>
            </div>
            );
        }
        else return <div></div>;
    }
}

export default Weather;