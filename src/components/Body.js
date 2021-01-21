
import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import image1 from "../components/img/image1.jpg";
import image2 from "../components/img/image2.jpg";
import image3 from "../components/img/image3.jpg";



class Body extends React.Component{

    render(){

        return(

            <div>

                <div>

                <Carousel>
                    <Carousel.Item>

                        <img className = "d-black w-100" src={image1}
                        alt = "First " style={{height: "100vh"}}/>
                        <Carousel.Caption>
                            <h3>FIrst Slid Label</h3>
                            <p> Ethiopia pitchers </p>
                        </Carousel.Caption>

                    </Carousel.Item>


                     <Carousel.Item>

                        <img className = "d-black w-100" src={image2}
                        alt = "Second " style={{height: "100vh"}}/>
                        <Carousel.Caption>
                            <h3>FIrst Slid Label</h3>
                            <p> Ethiopia pitchers </p>
                        </Carousel.Caption>

                    </Carousel.Item>


                     <Carousel.Item>

                        <img className = "d-black w-100%" src={image3}
                        alt = "Thired " style={{height: "100vh"}}/>
                        <Carousel.Caption>
                            <h3>FIrst Slid Label</h3>
                            <p> Ethiopia pitchers </p>
                        </Carousel.Caption>

                    </Carousel.Item>

                </Carousel>

                </div>

            </div>            
            
            
            
        )
        
    }
    
}
export default Body;