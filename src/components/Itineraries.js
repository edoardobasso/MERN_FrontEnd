import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Accordion, Card, Button, Carousel, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchItineraries } from "../store2/actions/itineraryActions";
import Activities from "./Activities";
import Star from "./Star"

class Itineraries extends Component {
  state = {
    allIds: [],

  };
  change = () => {

  }

  componentDidMount() {
    this.props.fetchItineraries(this.props.location.state.myCity._id);

  };

  /* click = () => { 
  }; */
  render() {
    const itns = this.props.itineraries.map((itineraries, index) => {



      console.log(this.props.location.state.myCity.img)
      return (
        <div
          key={index}
          style={{
            top: "40px",
            borderStyle: "solid",
            borderColor: "black",
            width: "90%",
            height: "127px",
            overflow: "auto",
            marginTop: "10px"
          }}
        >
          <Star onClick={this.change} style={{ position: "relative", right: "-600px" }}></Star>
          <div style={{ display: "flex", justifyContent: "initial" }}>
            <Image
              src="images/AIfaces1.jpg"
              roundedCircle
              height={40}
              width={65}
            />
            <h4>{itineraries.title}</h4>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>{itineraries.likes}</p>
            <p>{itineraries.duration}</p>
            <p>{itineraries.price}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>{itineraries.hashtags}</p>
            <p>{itineraries.hashtags}</p>
            <p>{itineraries.hashtags}</p>
          </div>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  v View All! v
                </Accordion.Toggle>
              </Card.Header>
              <Activities act1={[itineraries.activities1]} act2={[itineraries.activities2]} act3={[itineraries.activities3]} act4={[itineraries.activities4]} />
            </Card>
          </Accordion>
        </div >
      );
    });
    return (
      <div>


        <h1>Itinerary</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <div style={{ width: "98%" }}>
            <h3>{this.props.location.state.myCity.name}</h3>
            <Image
              style={{ width: "102%", height: " 200px" }}
              src={this.props.location.state.myCity.img}
              alt="Barcellona"
            />
          </div>
          <div style={{ width: "90%", marginTop: "8px" }}>
            <h4>Available MYtineraries:</h4>
          </div>
          {itns}

          <div
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Link to="/cities" style={{ margin: "auto" }}>
              Choose another City!
            </Link>
            <Button
              href="/"
              style={{
                overflow: "auto",
                backgroundColor: "#ffffff",
                borderColor: "#ffffff"
              }}
            >
              <img
                src="/images/homeIcon.png"
                alt="homeicon"
                style={{
                  backgroundColor: "#ffffff",
                  height: "30px",
                  width: "30px"
                }}
              />
            </Button>
          </div>
        </div>
      </div >
    );
  }
}
const mapStateToProps = state => ({
  itineraries: state.itineraries.items
});
export default connect(mapStateToProps, { fetchItineraries })(Itineraries);
