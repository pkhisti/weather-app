import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Divider from 'material-ui/Divider';

const paper = {
    height: 180,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 3,
    paddingRight: 3,
    marginTop: 5,
    marginBottom: 5,
    textAlign: "center"
};
class TenDays extends Component {
    render() {
        let highTemp = this.props.forecast.slice().sort((a,b)=>b.high-a.high);
        let hottest = highTemp[0];
        return(
            <div>
                  <Row>
                   <Col xs="4" sm="3" md="4" lg="2">
                   <Paper style={paper} >
                        <h4>Hottest Day!</h4>
                        <img src="http://l.yimg.com/a/i/us/we/52/32.gif"  className="weatherImg"/>
                        <Divider />
                        <h6>{hottest.date}</h6>
                        <h6>{hottest.high} &deg;{this.props.unit}</h6>
                    </Paper>
                   </Col>
                    { this.props.forecast.map((day,index) => {
                        let header = day.date.replace(/\d+$/, '');
                        let conditionImage = "http://l.yimg.com/a/i/us/we/52/" + day.code + ".gif";
                        return (
                            <Col key={day.day+index} xs="4" sm="3" md="2" lg="1">
                                <Paper style={paper}>
                                    <h4>{header}</h4>
                                    <img src={conditionImage} alt={day.text} className="weatherImg"/>
                                    <Divider />
                                    <h6>Hi: {day.high} &deg;{this.props.unit}</h6>
                                    <h6>Lo: {day.low} &deg;{this.props.unit}</h6>
                                </Paper>
                            </Col>
                            )
                        })
                    }
                    </Row>
            </div>
        );
    }
}
export default TenDays;