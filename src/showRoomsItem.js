import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter
} from 'mdb-react-ui-kit';
  import { Component } from "react";

  class showRoomItem extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <MDBCard shadow='0' border='warning' background='white' className='mb-3'>
            <MDBCardHeader>this.props.header</MDBCardHeader>
            <MDBCardBody>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' />
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        );
    }
}

export default showRoomItem;