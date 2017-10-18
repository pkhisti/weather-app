import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ['Dallas','Miami','Boston','San Jose','Austin','Mountain View','Irvine','Fort Worth','Plano',
      'Allen','Denver','Chicago','Houston','San Diego'],
      open: false
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (value) => {
   if(this.state.dataSource.includes(value)) {
      this.props.handleCityChange(value);
   } else {
     this.setState({open: true});
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div>
        <AutoComplete hintText="Enter a city" dataSource={this.state.dataSource}
          onNewRequest={this.handleChange}/>
          <Dialog title="Error! Invalid City" actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
            Please try again and enter a valid city. City you entered is not our system.
          </Dialog>
       </div>
    );
  }
}
export default Cities;
