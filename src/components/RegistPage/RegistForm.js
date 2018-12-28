import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button, Checkbox } from 'react-bootstrap';


class RegistForm extends Component {

  state = {
    cek : false
  }

  handleFormSubmit(e) {
    e.preventDefault();

    console.log("FORM SUBMIT!");

  }

  handleClick = () => this.setState({cek : !this.state.cek})

  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
        <div style={signinStyle}>
        <h1>Sign In</h1> </div>
          <Form horizontal className="RegistForm" id="RegistForm">
            <FormGroup controlId="formEmail">
              <FormControl style={formStyle} type="email" placeholder="Email or Phone number" />
            </FormGroup>
            <FormGroup controlId="formPhonenumber">
              <FormControl style={formStyle} type="Phonenumber" placeholder="Phone number" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl style={formStyle} type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl style={formStyle} type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup controlId="formSubmit">
              <Button style={buttonStyle} bsStyle="primary" type="submit" onClick={this.handleFormSubmit}>
                SignUp
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    )
  }
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: +100
};

const panelStyle = {
  backgroundColor: 'rgba(0,0,0,.75)',
  border: 0,
  paddingLeft: 68,
  paddingRight: 68,
  paddingTop: 60,
  paddingBottom: 40,
  width: 450,
  height:'100vh'
};
  const buttonStyle = {
  marginBottom: 0,
  fontSize: 16,
  backgroundColor: "#e50914",
  width: 318,
  height: 60,
  border: 0,
};

const formStyle = {
  background: "#333",
  backgroundColor: 'rgb(51, 51, 51)',
  height: 50,
  borderColor: '#00c0c1',
};

const signinStyle = {
  textAlign: "initial",
  paddingTop: 1,
  height: 55,
  borderColor: '#00c0c1',
  color: "white",
};

const signStyle = {
  textAlign: "left",
  paddingTop: 20,
  height: 20,
  borderColor: '#00c0c1',
  color: "white",
};
const rememberStyle = {
  textAlign: "left",
  paddingTop: 20,
  height: 20,
  borderColor: '#00c0c1',
  color: "white",
  display:'flex'
};



export default LoginForm;
