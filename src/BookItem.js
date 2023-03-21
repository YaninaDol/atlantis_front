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

  class BookItem extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <MDBCard shadow='0' style={{width:1200,marginLeft:20}} border='warning' background='white' >
            <MDBCardHeader id={this.props.unic}>{this.props.header}</MDBCardHeader>
            <MDBCardBody style={{float:'left'}}>
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
              Description {this.props.description}
              </MDBCardText>
              <MDBCardText>
              View: {this.props.view}
              </MDBCardText>
              <MDBCardText>
              Size: {this.props.size}
              </MDBCardText>
              <MDBCardText>
              Max occupancy: {this.props.occupancy}
              </MDBCardText>
              <MDBCardText>
              Extra &#62; {this.props.notice}
              </MDBCardText>
           
            </MDBCardBody>
            <MDBCardText  style={{float:'right'}}>
              Price  {this.props.price} AED
              </MDBCardText>
            <MDBBtn onClick={() => this.props.book(this.props.unic)} className='bookbtn'  lg color='light' style={{color:'DarkGoldenRod'}}>
        Book
      </MDBBtn>
          </MDBCard>
        );
    }
}

export default BookItem;