import React, { Component } from "react";
import Navbar from "elements/Navbar";
import Hero from "parts/Hero";
import productJson from "json/product.json";
import Featured from "parts/Featured";
import Inspiration from "parts/Inspiration";
import Card from "parts/Card";

export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "Furniture | Home";
  }
  render() {
    return (
      <>
        <Navbar {...this.props}> </Navbar>
        <Hero data={productJson.Hero} />
        <Featured data={productJson.Featured} />
        <Inspiration imageUrl={productJson.Inspiration} />
        <Card />
      </>
    );
  }
}
