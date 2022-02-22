import { makeStyles } from "@material-ui/core";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles((theme) => ({
  carousel: {},
}));

function CustomCarousel() {
  return (
    <>
      <Carousel>
        <div>
          <img src={process.env.PUBLIC_URL + "/company1.jpg"} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/company1.jpg"} />
        </div>
        <div>
          <img src={process.env.PUBLIC_URL + "/company1.jpg"} />
        </div>
      </Carousel>
    </>
  );
}

export default CustomCarousel;
