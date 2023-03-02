import './StartPage.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import showRoomItem from './showRoomsItem';
import {

    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBIcon,
     MDBContainer,
    MDBNavbar,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';

export default function StartPage(){
    const [showBasic, setShowBasic] = useState(false);
    const [startDate, setStartDate] = useState(Date.now());
    const [endDate, setEndDate] = useState(Date.now());
    const [adult, setAdult] = useState(0);
    const [children, setChildren] = useState(0);





    return(
            <div>
            
            <header   style={{marginTop:110}}>
      <MDBNavbar    expand='lg' >
        <MDBContainer  className='Headercss' fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink  style={{color:'navy'}} aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink style={{color:'navy'}} href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink style={{color:'navy'}} href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink style={{color:'navy'}} href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
        <img
        style={{marginLeft:370, marginTop:-50,marginBottom:60}}

        width={200}
        height={130}
          src='https://www.immostyle.it/images/travelstyle/dubai/logo-atlantis.png'
         
          alt=''
        />
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBBtn className='bookbtn' href='#booking' lg color='light' style={{marginLeft:500,color:'DarkGoldenRod'}}>
        Book Now
      </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

     
    </header>


            <Carousel  >
      <Carousel.Item>
        <img
        height={700}
          className="d-block w-100"
          src="https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/atr/atlantis-the-royal/resort/exterior/atr-exterior-sunset-shot.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img
        height={700}
          className="d-block w-100"
          src='https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/atr/atlantis-the-royal/restaurants/cloud22/exterior/cloud22-exerior-aerial-cropped.jpg'
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
        height={700}
          className="d-block w-100"
          src='https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/atr/atlantis-the-royal/spa/lifestyle/atr-awaken-ladywater-mountains-sunset-2.jpg'
          alt="Third slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          height={700}
          className="d-block w-100"
          src="https://www.atlantis.com/scropper/-/screen/1220/atlantis/dubai/atr/atlantis-the-royal/rooms-suites/suites/sky-pool-villa/interior/atr-sky-pool-villa-terrace-day.jpg"
          alt="Third slide"
        />

      </Carousel.Item>


      <Carousel.Item>
      <video
            className="slider-video "
            src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
      </Carousel.Item>

      

    </Carousel>

    <div id='booking'  style={{marginLeft:200,marginTop:20}}>
    <MDBContainer style={{display:'flex'}} >
    
      <Form.Group  style={{width:450,marginLeft:10}} className="mb-6" >
        <Form.Label style={{color:'navy'}}>CHECK IN</Form.Label>
        <Form.Control
                type="date"
                name="datepic"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
      
      </Form.Group>
      <Form.Group style={{width:450,marginLeft:10}} className="mb-3">
        <Form.Label style={{color:'navy'}}>CHECK OUT</Form.Label>
        <Form.Control
                type="date"
                name="datepic"
                placeholder="DateRange"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
      
      </Form.Group>

      <Form.Group style={{width:200,marginLeft:20}} className="mb-3" c>
        <Form.Label style={{color:'navy'}}>ADULTS</Form.Label>
        <Form.Select onChange={(e)=>setAdult(e.target.value )}>
       
       <option value="1">1</option>
                 <option selected value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>

     </Form.Select>
      
      </Form.Group>

      <Form.Group style={{width:200,marginLeft:20}} className="mb-3" >
        <Form.Label style={{color:'navy'}}>CHILDRENS</Form.Label>
        <Form.Select onChange={(e)=>setChildren(e.target.value )}>
        <option selected value="0">0</option>
       <option value="1">1</option>
                 <option  value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>

     </Form.Select>
      
      </Form.Group>
      <Form.Group  style={{marginLeft:200}} className="mb-3" >
      <Form.Label style={{width:200,color:'navy'}}>AVAILABILITY</Form.Label>
      <Form.Label ></Form.Label>
      <Button variant="secondary">CHECK AVAILABILITY</Button>
      </Form.Group>
      </MDBContainer >
    </div>

    <div style={{marginTop:100}} className='mainheader'>
    <h2 class="mainTitle">THIS IS THE MOST ULTRA-LUXURY<br/> EXPERIENTIAL RESORT IN THE WORLD</h2>
    <span className='titleUnderline'></span>
    <div class="mainTitleText">
      The new iconic landmark of Dubai, Atlantis The Royal welcomes you to an experience that will completely redefine
      
       your perspective of luxury. Crafted by the world’s leading designers, architects and artists, this is a destination where everything has been
        designed to challenge the boundaries of imagination.

Be taken on a journey of the impossible, with artful masterpieces, iconic entertainment and beautiful
 craftsmanship at every turn.
Where the highest level of service sets a new standard in excellence.

This is the place where something incredible happens at every moment of your stay.

This is Atlantis The Royal. 

</div>


    </div>
  
            </div>
      )
}