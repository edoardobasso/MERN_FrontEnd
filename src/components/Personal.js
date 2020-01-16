import React, { Component } from "react";
import { Image } from "react-bootstrap";

export default class Personal extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Image src="/images/AIfaces1.jpg" />
        <h1>Host Profile</h1>
        <h3>Rating= 5/10</h3>
        <h3>Places= Barcelona</h3>
        <h3>Text Him/Her: +39123456789</h3>
        <h3></h3>
      </div>
    );
  }
}
