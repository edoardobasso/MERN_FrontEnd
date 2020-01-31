import React, { Component } from 'react'
import { Accordion, Card, Button, Carousel, Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchActivities } from "../store2/actions/activitiesActions";


class Activities extends Component {
    componentDidMount() {

        this.props.fetchActivities(this.props.myId)
    }
    click = () => {
    };
    render() {
        console.log(this.props.myId)
        return (
            <div>
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
                                    <h1 className="d-block w-25">{this.props.act1}</h1>
                                    <h1 className="d-block w-25">{this.props.act2}</h1>
                                    <h1 className="d-block w-25 ">{this.props.act3}</h1>
                                    <h1 className="d-block w-25">{this.props.act4}</h1>
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
            </div>
        )
    }
}
const mapStateToProps = state => ({
    activities: state.activities.items
});
export default connect(mapStateToProps, { fetchActivities })(Activities)