import { Link, Outlet } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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

export default function News(){


    return(
        <div>

            <header   style={{marginTop:110}}>
      <MDBNavbar    expand='lg' >
        <MDBContainer  className='Headercss' fluid>
          <MDBNavbarToggler
          
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar >
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink  style={{color:'navy'}} aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
           
              <MDBNavbarItem>

                <MDBNavbarLink style={{color:'navy'}} to="/news" > <Link style={{color:'navy',textDecoration:'none'}} to="/news">News</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink style={{color:'navy'}} href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
        <img
        style={{marginLeft:450, marginTop:-50,marginBottom:60}}

        width={200}
        height={130}
          src='https://www.immostyle.it/images/travelstyle/dubai/logo-atlantis.png'
         
          alt=''
        />
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBBtn className='bookbtn' href='/' lg color='light' style={{marginLeft:500,color:'DarkGoldenRod'}}>

        Book Now
      </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

     
    </header>


            <Carousel  >

            
      <Carousel.Item active>
        <img
        height={900}
          className="d-block w-100"
          src="https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-beyonce-mayyas-sun.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img
        height={900}
          className="d-block w-100"
          src='https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-atr-fireworks-wide-v4.jpg'
          alt="Third slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          height={900}
          className="d-block w-100"
          src="https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-kendalljenner-818-v5.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
      <video
      width={1490}
      height={950}
            className="slider-video "
            src="https://www.atlantis.com/-/media/atlantis/dubai/atr/atlantis-the-royal/videos/grand-reveal/atr-grandreveal-herobanner.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
      </Carousel.Item>

    </Carousel>


    <div style={{marginTop:100}} className='mainheader'>
    <h2 class="mainTitle">THIS IS DUBAI’S NEWEST ICON</h2>
    <span className='titleUnderline'></span>
    <div class="mainTitleText">
    Atlantis The Royal set the stage for its Grand Reveal Weekend with an exclusive performance by global icon, Beyoncé. The resort unveiled itself to the world with a three-day star-studded weekend (20th-22nd January, 2023), where global celebrities and special guests from around the world came to celebrate the most ultra-luxury experiential resort in the world.

</div>
</div>


<div>
<video
      width={1490}
      height={950}
            className="slider-video "
            src="https://www.atlantis.com/-/media/atlantis/dubai/atr/atlantis-the-royal/videos/grand-reveal/grand-reveal-full-recap_lr.mp4"
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
</div>



<div style={{marginTop:100}} className='mainheader'>
    <h2 class="mainTitle">THIS IS PERFECTION PUTTING ON A SHOW</h2>
    <span className='titleUnderline'></span>
    <div class="mainTitleText">
    Beyoncé lit up the stage after a 5-year hiatus with an awe-inspiring performance, accompanied by Firdaus, 
    a 48-person orchestra. From the powerful choreography by Emmy-nominated Fatima Robinson, to the featured 
    Mayyas dance group and a special duet with her daughter Blue Ivy, Beyoncé’s performance was unforgettable.
     The song line-up included a soulful rendition of Etta James's "At Last," before diving into a medley of 
     her greatest hits including "XO," "Halo," "Beautiful Liar," "Crazy in Love," "Naughty Girl," and "Drunk in Love".
     <br/>
     <br/>
     In a breathtaking finale moment, Beyoncé was raised 16 feet into the air as a first-of-its kind fireworks display lit up the night sky using drones created by Grucci. To end the evening, guests celebrated into the morning hours with a live afterparty performance by the international DJ supergroup Swedish House Mafia.
      A spectacle unlike anything the world has ever seen, Atlantis The Royal has made history.
      <br/>
    This Is It.
</div>
</div>


        </div>






    )
}