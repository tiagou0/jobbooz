import React from "react";
import Image3 from "../images-slider/3.jpg";
import Image2 from "../images-slider/2.jpg";
import Image1 from "../images-slider/1.jpg";
import background from "../imagenes/background.jpg";
import Button from "./button.jsx"

import "./img.css";
function Slider() {
  return (
    <>
      <div id="carouselExample" class="divcontainer carousel slide ">
        <h3 className="h3-slider">
          20% OFF EN TODA LA NUEVA TEMPORADA [Efec-Transf]
        </h3>
        <h3 className="name-logo">JOB BOOZ</h3>
        <Button />
        <img className="img-jobbooz" src={background} alt="Job Booz" />
        
      </div>
    </>
  );
}

export default Slider;
