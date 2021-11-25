import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function SliderCarousel(){
    return(      
      <>
<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="w-100"
      src="https://github.com/gsg500/imgs/blob/master/header1.jpg?raw=true"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://github.com/gsg500/imgs/blob/master/header2.jpg?raw=true"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://github.com/gsg500/imgs/blob/master/header3.jpg?raw=true"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </>
    )
}

export default SliderCarousel;