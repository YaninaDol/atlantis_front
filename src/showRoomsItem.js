import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBBtn,
  MDBCardHeader,
  MDBCardFooter
} from 'mdb-react-ui-kit';
  import { Component } from "react";
import { Button } from 'react-bootstrap';

  class showRoomsItem extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <MDBCard shadow='0' style={{width:400,marginLeft:20}} border='warning' background='white' >
            <MDBCardHeader>{this.props.header}</MDBCardHeader>
            <MDBCardBody>
            <Carousel  >
      <Carousel.Item>
        <img
       
        height={220}
          className="d-block w-100"
          src={this.props.pic1}
          alt="First slide"
        />
         </Carousel.Item>
         <Carousel.Item>
        <img
          
          height={220}
          className="d-block w-100"
          src={this.props.pic2}
          alt="Second slide"
        />
         </Carousel.Item>
         <Carousel.Item>
        <img
          
          height={220}
          className="d-block w-100"
          src={this.props.pic3}
          alt="Third slide"
        />
         </Carousel.Item>

         </Carousel>
              <MDBCardText>
                {this.props.text}
              </MDBCardText>
           
            </MDBCardBody>
            <Button className='bookbtn' href='#booking' lg variant='light' style={{color:'DarkGoldenRod'}}>
        Book Now
      </Button>
          </MDBCard>
        );
    }
}

export default showRoomsItem;