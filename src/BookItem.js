import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
  MDBCard,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardText,
  MDBCardBody,
  MDBBtn,
  MDBCardHeader
} from 'mdb-react-ui-kit';
  import { Component } from "react";

  class BookItem extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
    

        return(
            <MDBCard shadow='0' style={{width:1200,marginLeft:170, marginTop:70}} border='warning' background='white' >
             <MDBCardHeader id={this.props.unic}>{this.props.header}</MDBCardHeader>
<section className="h-100 h-custom" >
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-left align-items-left h-100">
      

      <MDBCol  >

                <div >

                <MDBCardBody>
            <Carousel  >
      <Carousel.Item>
        <img
      
        height={270}
          className="d-block w-100"
          src={this.props.pic1}
          alt="First slide"
        />
         </Carousel.Item>
         <Carousel.Item>
        <img
          
          height={270}
          className="d-block w-100"
          src={this.props.pic2}
          alt="Second slide"
        />
         </Carousel.Item>
         <Carousel.Item>
        <img
          
          height={270}
          className="d-block w-100"
          src={this.props.pic3}
          alt="Third slide"
        />
         </Carousel.Item>

         </Carousel>
              <MDBCardText >
             <h6> Description:</h6>  {this.props.description}
              </MDBCardText>
              <MDBCardText>
              <h6> View:</h6> {this.props.view}
              </MDBCardText>
              <MDBCardText>
              <h6> Size: </h6> {this.props.size}
              </MDBCardText>
              <MDBCardText>
              <h6>Max occupancy:</h6>  {this.props.occupancy}
              </MDBCardText>
              <MDBCardText>
               Extra &#62; {this.props.notice}
              </MDBCardText>
           
            </MDBCardBody>
           
                </div>
                
       </MDBCol>



        <MDBCol  style={{marginTop:30}}>
     
    <MDBCard
        shadow='0'
        border='secondary'
        background='white'
        className='mb-3'
      >
       
        <MDBCardBody className='text-secondary'>
       
          <MDBCardText style={{float:'left'}}>
            <h6>Best Available Rate</h6>
            Avg Price Per Room Per Night
            <h5> {this.props.price} AED</h5>
          </MDBCardText>
          <MDBBtn onClick={() => this.props.book(this.props.unic)}  lg color='light' style={{backgroundColor:'DarkGoldenRod' ,color:'white',width:200, marginLeft:120}}>
        Book
      </MDBBtn>
        </MDBCardBody>
      </MDBCard>
     
        </MDBCol>
        
      
    </MDBRow>
  </MDBContainer>
</section>

</MDBCard>
        );
    }
}

export default BookItem;