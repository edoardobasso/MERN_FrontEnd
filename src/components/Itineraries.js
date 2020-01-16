import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Accordion, Card, Button, Carousel, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchItineraries } from "../store2/actions/itineraryActions";
import { fetchActivities } from "../store2/actions/activitiesActions";

class Itineraries extends Component {
  componentDidMount() {
    this.props.fetchItineraries(this.props.location.state.myCity._id);

    console.log(this.props);
  }

  click = () => {
    console.log("is working");
  };
  render() {
    console.log(this.props);
    const itns = this.props.itineraries.map((itineraries, index) => {
      return (
        <div
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
            <p>{itineraries.hashtag}</p>
            <p>{itineraries.hashtag}</p>
            <p>{itineraries.hashtag}</p>
          </div>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  v View All! v
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h5 style={{ display: "flex", justifyContent: "flex-start" }}>
                    Activities:
                  </h5>
                  <Carousel>
                    <Carousel.Item>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around"
                        }}
                      >
                        <h1 className="d-block w-25">casa Bottlo</h1>
                        <h1 className="d-block w-25">La Pedrera</h1>
                        <h1 className="d-block w-25 ">Sagrada Familia</h1>
                        <h1 className="d-block w-25">Market</h1>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                  <h4 style={{ display: "flex", justifyContent: "flex-start" }}>
                    Comment:
                  </h4>
                  <Form>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="Name" />
                      </Col>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        as="textarea"
                        rows="3"
                        placeholder="Comment..."
                      />
                    </Form.Group>
                    <Button onClick={this.click()}>Comment</Button>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
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
            <h3>Barcellona</h3>
            <Image
              style={{ width: "102%", height: " 200px" }}
              src="./images/barccelllona.jpeg"
              alt="Barcellona"
            />
          </div>
          <div style={{ width: "90%", marginTop: "8px" }}>
            <h4>Available MYtineraries:</h4>
          </div>
          {itns}
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
      </div>
    );
  }
}
const mapStateToProps = state => ({
  itineraries: state.itineraries.items
});
export default connect(mapStateToProps, { fetchItineraries })(Itineraries);
