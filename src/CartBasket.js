import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import { Component } from "react";

  class CartBasket extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <MDBCard className="rounded-3 mb-6">
            <MDBCardBody className="p-4">
           
              <MDBRow className="justify-content-between align-items-center">
                <MDBCol >
                <p className="lead fw-normal mb-2">Room : {this.props.name}</p>
                  <MDBCardImage className="rounded-3" fluid
                    src={this.props.picture}
                    alt="Cotton T-shirt" />
                </MDBCol>
               
                <MDBRow className="justify-content-between align-items-center">
                <MDBCol >
                    <p hidden="hidden">{this.props.unic}</p>
             
                    <h6 style={{color:'navy'}} >Date:</h6>
                   
                </MDBCol>
                <MDBCol >
                    <span className="text-muted">&nbsp;&nbsp; {this.props.startDate}{"-"}{this.props.endDate}</span>
                </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-between align-items-center">
                <MDBCol >
                <h6 style={{color:'navy'}} >Total days: </h6>
                   
                </MDBCol>
                <MDBCol style={{marginLeft:30}}>
                    <span className="text-muted">{this.props.days} </span>
                </MDBCol>

                </MDBRow>
               
                <MDBRow className="justify-content-between align-items-center">
                <MDBCol >
                <h6 style={{color:'navy'}} >Guests: </h6>
                   
                </MDBCol>
                <MDBCol style={{marginLeft:30}}>
                    <span className="text-muted">{this.props.guests}</span>
                   
                </MDBCol>
                </MDBRow>

                <MDBRow className="justify-content-between align-items-center">
                <MDBCol >
                <h6 style={{color:'navy'}} >Price: </h6>
                </MDBCol>
                <MDBCol style={{marginLeft:30}} >
                <span className="text-muted"> {this.props.price} AED</span>
                 
                </MDBCol>
                </MDBRow>
              
              
              </MDBRow>

            </MDBCardBody>
          </MDBCard>
        );
    }
}

export default CartBasket;