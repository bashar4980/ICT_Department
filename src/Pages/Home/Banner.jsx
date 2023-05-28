import  { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../App.css"

function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="banner">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://img.freepik.com/free-vector/forest-landscape-scene-sunset-time_1308-62118.jpg?t=st=1685182137~exp=1685182737~hmac=5cdbcb6bb104ab4d38943507686f7a2fa3620a15c280a358ec2787d024e61250"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://img.freepik.com/free-photo/painting-jungle-scene-with-green-plant-green-leafy-plant_1340-31601.jpg?w=740&t=st=1685199589~exp=1685200189~hmac=7946abcdab21e5691c71ef879c579d670addc8dffcb1649031263cda2da73b87"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://img.freepik.com/free-vector/forest-landscape-scene-sunset-time_1308-62118.jpg?t=st=1685182137~exp=1685182737~hmac=5cdbcb6bb104ab4d38943507686f7a2fa3620a15c280a358ec2787d024e61250"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
