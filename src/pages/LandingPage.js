import React, { Component } from "react";
import Navbar from "elements/Navbar";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navbar {...this.props}> </Navbar>
      </>
    );
  }
}
