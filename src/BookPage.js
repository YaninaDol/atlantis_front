import './StartPage.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ShowRoomItem from './showRoomsItem';
import {

    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBIcon,
     MDBContainer,
    MDBNavbar,
    MDBBtn,
    MDBCardImage,
    MDBCollapse,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
    MDBInput,
    MDBFooter, MDBRow, MDBCol
  } from 'mdb-react-ui-kit';


  export default function BookPage(){
    const [showBasic, setShowBasic] = useState(false);
    const [startDate, setStartDate] = useState(Date.now());
    const [endDate, setEndDate] = useState(Date.now());
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);





    return(
        <div>

        </div>
    )
  }