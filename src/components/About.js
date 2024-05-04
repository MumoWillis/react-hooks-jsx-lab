import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id="about">
    <h1>ABout Me</h1>
    <p>Im learning react</p>
    <img src ={image} alt="I made this"></img>
    </div>
  )
}

export default About;
