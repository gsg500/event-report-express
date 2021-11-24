import React, {useState} from "react";
import "./Slider.css";

import { SlideData } from "./SlideData";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";



const  Slider = ({slides}) => {
   const [currentImage, setCurrentImage] = useState(0);
   const length = slides.length; 
    return(
        <section className="slider">
            <BiArrowToRight className="right-arrow"/>
             < BiArrowToLeft className="left-arrow"/>
                       {SlideData.map((slide, index) =>{
                return (
                    <img src={slide.Image} alt="image 1" className="imagem"/>
                )
            })}
        </section>
    )
}
export default Slider;