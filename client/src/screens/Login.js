import React from 'react';
import { Input, Button } from 'antd';
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
    }
  };

  handleInputChanged = (e) => {
    this.setState({
      mail: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <p>Welcome to my workstatus {this.state.mail}</p>
        <Input 
          placeholder="Enter your email"
          onChange={e => this.handleInputChanged(e)}       
        />
        <Link to={'/home'}>
          <Button>OK</Button>
        </Link>
         
      </div>
    )
  }
}


