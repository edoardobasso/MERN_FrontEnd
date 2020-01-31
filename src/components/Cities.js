import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { fetchCities } from "../store2/actions/cityActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cities extends Component {
  state = {
    isLoaded: false,
    allCities: [],
    searchQuery: ""
  };
  componentDidMount() {
    this.props.fetchCities();
    console.log(this.props)
  }
  change = () => {
    this.setState({ searchQuery: this.search.value });
  };
  render() {
    console.log(this.props.cities);
    const { searchQuery } = this.state;
    const cities = this.props.cities
      .filter(city => {
        let param = this.state.searchQuery.toLowerCase();
        return city.name.toLowerCase().startsWith(param);
      })
      .map((city, index) => {
        const link = {
          pathname: "/Itineraries",
          state: { myCity: city }
        };
        return (
          <Link to={link}>
            <div
              key={index}
              style={{
                backgroundImage: `url(${city.img})`,
                width: "300px",
                height: "300px",
                perspective: "1000px",
                backgroundSize: "cover"
              }}
            >
              <h1 style={{ color: "white" }}> {city.name} </h1>
              <p style={{ color: "white" }}> {city.country}</p>
            </div>
          </Link>
        );
      });
    return (
      <div>
        <Form inline>
          <input
            style={{
              padding: "3px",
              margin: "10px",
              border: "3px solid #00B4CC",
              bordeRadius: "5px 0 0 5px",
              position: "relative",
              right: "-98px"
            }}
            placeholder="Search Cities!"
            ref={input => (this.search = input)}
            onChange={() => this.change()}
          />
        </Form>
        <div
          style={{
            height: "550px",
            overflow: "auto",
            flexWrap: "wrap",
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {cities}
        </div>
        <div>
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
    );
  }
}
const mapStateToProps = state => ({
  cities: state.cities.items
});
export default connect(mapStateToProps, { fetchCities })(Cities);
