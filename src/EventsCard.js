import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Component } from "react";
class EventsCard extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <MDBCard style={{width:400,marginLeft:20}}>
            <MDBCardImage src={this.props.pic} position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle>{this.props.header}</MDBCardTitle>
              <MDBCardText>
              {this.props.text}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        );
    }
}

export default EventsCard;
