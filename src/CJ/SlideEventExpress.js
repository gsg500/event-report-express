import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'


import image1 from "./imagens/evento-cultural1.png"
import image2 from "./imagens/evento-educacional1.jpg"
import image3 from "./imagens/evento-religioso1.jpeg"
import image4 from "./imagens/evento-cultural2.png"
import image5 from "./imagens/evento-educacional2.jpg"
import image6 from "./imagens/evento-religioso2.jpg"
import image7 from "./imagens/evento-cultural3.png"
import image8 from "./imagens/evento-educacional3.jpg"
import image9 from "./imagens/evento-religioso3.png"




function SliderPrincipal() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                                className="d-block w-100 fluid"
                         src={image1}
                        alt="Primeiro"
                    />
                    <Carousel.Caption>
                        <h3>Primeiro Slide</h3>
                        <p>Show musical no Centro de Tradicoes Nordestinas (CTN)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                                className="d-block w-100"
                        src={image2}
                        alt="segundo"
                    />
                    <Carousel.Caption>
                        <h3>Segundo Slide</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                                className="d-block w-100"
                        src={image3}
                        alt="terceiro"
                    />

                    <Carousel.Caption>
                        <h3>Terceiro Slide</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                                className="d-block w-100"
                        src={image4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Quarto slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        src={image5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Quinto slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={image6}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Sexto slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image7}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Sétimo slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image8}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Oitavo slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image9}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Nono slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </div>
        </div>
    );

}



export default SliderPrincipal;