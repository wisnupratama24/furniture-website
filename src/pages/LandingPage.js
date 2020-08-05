import React, { Component } from "react";
import Navbar from "elements/Navbar";
import Hero from "parts/Hero";
import productJson from "json/product.json";

export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "Furniture | Home";
  }
  render() {
    return (
      <>
        <Navbar {...this.props}> </Navbar>
        <Hero data={productJson.product} />
      </>
    );
  }
}
