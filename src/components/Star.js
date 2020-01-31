import React from "react";
import { FaStar } from 'react-icons/fa';
import { Button } from "react-bootstrap";




class Star extends React.Component {
  changeIcon = () => {
  }



  render() {
    return (
      <Button style={{ backgroundColor: "white", borderStyle: "none" }} onClick={this.changeIcon}>
        <FaStar
          color="gold"
          size="30px"
          backgroundColor="gold"

        />
      </Button>
    )
  }
}
export default Star
