import React, { Component } from 'react'
import {Carousel, Image} from "react-bootstrap"
import logo from "../MYtineraryLogo.png"
import arrow2 from "../circled-right-2.png"




export default class LandingPage extends Component {
    render() {
        return (
            <div> 
      <img src= {logo} alt="Logo" style={{width:"300px", heigth:"200px" }} />
      <h5>Find your perfect trip, designed by insiders who know and love their cities</h5>
      <img src= {arrow2} alt="circled-right-2" style={{width:"150px", heigth:"70px"}}/>
                {/* <h2>Popular MYtineraries</h2> */}
    <Carousel>
  <Carousel.Item >
  <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
    <Image
      className="d-block w-50"
      src="/images/London.jpg"
      alt="First slide"
      thumbnail
     
    />
    <Image
      className="d-block w-50 "
      src="/images/ny.jpg"
      alt="second slide"
      thumbnail
    />
    <Image
      className="d-block w-50 "
      src="/images/varese.jpg"
      alt="third slide"
      thumbnail
    />
    <Image
      className="d-block w-50 "
      src="/images/sao paulo.jpg"
      alt="Fourth slide"
      thumbnail
    />
    </div>
  </Carousel.Item>
  <Carousel.Item>
  <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
    <Image
      className="d-block w-50 "
      src="/images/London.jpg"
      alt="First slide"
      thumbnail
     
    />
    <Image
      className="d-block w-50"
      src="/images/ny.jpg"
      alt="second slide"
      thumbnail
    />
    <Image
      className="d-block w-50"
      src="/images/varese.jpg"
      alt="third slide"
      thumbnail
    />
    <Image
      className="d-block w-50 "
      src="/images/sao paulo.jpg"
      alt="Fourth slide"
      thumbnail
    />
    </div>
    

  </Carousel.Item>
  <Carousel.Item>
  <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
    <Image
      className="d-block w-50"
      src="/images/London.jpg"
      alt="First slide"
      thumbnail
     
    />
    <Image
      className="d-block w-50"
      src="/images/ny.jpg"
      alt="second slide"
      thumbnail
    />
    <Image
      className="d-block w-50 "
      src="/images/varese.jpg"
      alt="third slide"
      thumbnail
    />
    <Image
      className="d-block w-50 "
      src="/images/sao paulo.jpg"
      alt="Fourth slide"
      thumbnail
    />
    </div>
  </Carousel.Item>
</Carousel>
            
            </div>
        )
    }
}





