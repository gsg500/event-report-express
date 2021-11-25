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

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://github.com/gsg500/imgs/blob/master/header2.jpg?raw=true"
      alt="Second slide"
    />
    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://github.com/gsg500/imgs/blob/master/header3.jpg?raw=true"
      alt="Third slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </>
    )
}

export default SliderCarousel;