import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Divider from 'material-ui/Divider';

class TenDays extends Component {
    render() {
        return(
            <div>
            <Container fluid={true}>
                    <Row>
                    { this.props.forecast.map((day,index) => {
                        let header = day.date.replace(/\d+$/, '');
                        let conditionImage = "http://l.yimg.com/a/i/us/we/52/" + day.code + ".gif";
                        return (
                            <Col key={day.day+index} xs="4" sm="3" lg="1">
                                <Paper className="paper" elevation={4}>
                                    <h4>{header}</h4>
                                    <img src={conditionImage} alt={day.text} />
                                    <Divider />
                                    <h6>Hi: {day.high} &deg;{this.props.unit}</h6>
                                    <h6>Lo: {day.low} &deg;{this.props.unit}</h6>
                                </Paper>
                            </Col>
                            )
                        })
                    }
                    </Row>
                </Container>
            </div>
        );
    }
}
export default TenDays;