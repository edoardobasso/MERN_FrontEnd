import React, { Component } from "react";
import { Card, Form, Col, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchLogin } from "../store2/actions/loginActions";
import GoogleBtn from "./GoogleBtn";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.setEmail = this.setEmail.bind(this)
    this.send = this.send.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
  }

  send = (e) => {

    let email = this.state.email
    let password = this.state.password
    e.preventDefault()
    this.props.fetchLogin({ email, password })
  }


  setEmail = (e) => {

    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state.email)
    console.log(this.state.password)

  }
  componentDidUpdate() {
    // this.props.history.push("/cities")
  }
  render() {

    return (
      <div>

        < form style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "90%" }} onSubmit={this.send} >
          <input style={{ width: "70%", height: "40px", marginTop: "10px", color: "black", borderRadius: "5px" }} type="text" name="email" value={this.state.email} placeholder="Email or Username" onChange={this.setEmail} ></input>
          <input style={{ width: "70%", height: "40px", marginTop: "10px", color: "black", borderRadius: "5px" }} type="text" name="password" value={this.state.password} placeholder="Password" onChange={this.setEmail} ></input>
          <button style={{ width: "70%", height: "40px", marginTop: "10px", color: "black", borderRadius: "5px" }} onSubmit={this.send} type="submit"  >Login</button>
        </form >
        <GoogleBtn />

      </div >
    );
  }
}
const mapStateToProps = state => ({
  res: state.login.item
});
export default connect(mapStateToProps, { fetchLogin })(Login);