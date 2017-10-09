import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';

class TenDays extends Component {
    render(){
        return(
            <Grid fluid>
                <Row>
                    {this.props.forecast.map((day,index) => {
                        let header = day.date.replace(/\d+$/, '');
                        return (
                        <Col key={day.day+index} xs={12} s={4} md={2} lg={1}>
                        <Paper className="paper" elevation={4}>
                          <h4>{header}</h4>
                           <Divider />
                           <h5>Hi: {day.high} &deg;{this.props.unit}</h5>
                           <h5>Lo: {day.low} &deg;{this.props.unit}</h5>
                           <p className="descriptionText">{day.text}</p>
                        </Paper>
                        </Col>
                         )})}
                </Row>
            </Grid>
        );
    }
}

export default TenDays;