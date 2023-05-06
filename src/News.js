import { Link, Outlet } from "react-router-dom";
import './StartPage.css';
import Carousels from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import EventsCard from './EventsCard';
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
import { Button } from "react-bootstrap";

export default function News(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

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
                <MDBNavbarLink style={{color:'navy'}} href='/about'>About</MDBNavbarLink>
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
              <Button className='bookbtn' href='/' lg variant='light' style={{marginLeft:500,color:'DarkGoldenRod'}}>

        Book Now
      </Button>
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

<div style={{marginTop:100}}>
<Carousels  responsive={responsive}>
  <div style={{marginLeft:30,marginRight:30}}> 
     <img
        height={300}
          src="https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-ad-fireworks.jpg"
          alt="First slide"
        />
    </div>
    <div style={{marginLeft:30,marginRight:30}}> 
     <img
        height={300}
          src="https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-beyonce-yellowdress.jpg"
          alt="First slide"
        />
    </div>
    <div style={{marginLeft:30,marginRight:30}}> 
     <img
       height={300}
          src="https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-beyonce-blueivy.jpg"
          alt="First slide"
        />
    </div>
    <div style={{marginLeft:30,marginRight:30}}> 
     <img
        height={300}
          src="https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-beyonce-mayyas-pinkdress.jpg"
          alt="First slide"
        />
    </div>
    <div style={{marginLeft:30,marginRight:30}}> 
     <img
       height={300}
          src="https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-beyonce-skyblaze-platform.jpg"
          alt="First slide"
        />
    </div>
    <div style={{marginLeft:30,marginRight:30}}> 
     <img
        height={300}
          src="https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-building-fireworks-closeup.jpg"
          alt="First slide"
        />
    </div>
    <div style={{marginLeft:30,marginRight:30}}> 
     <img
        height={300}
          src="https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-fireworks-palm.jpg"
          alt="First slide"
        />
    </div>
    <div style={{marginLeft:30,marginRight:30}}> 
     <img
        height={300}
          src="https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-swedishhousemafia-fire.jpg"
          alt="First slide"
        />
    </div>
    <div style={{marginLeft:30,marginRight:30}}> 
     <img
         height={300}
          src="https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-swedishhousemafia-closeup.jpg"
          alt="First slide"
        />
    </div>

</Carousels>;
</div>

<div style={{marginTop:100}} className='mainheader'>
    <h2 class="mainTitle">THE GRAND REVEAL WEEKEND</h2>
    <span className='titleUnderline'></span>
    <div className='cartContainer'>
 <EventsCard pic='https://www.atlantis.com/scropper/-/screen/576/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-atr-fireworks-side.jpg' header='Fireworks Extravaganza' text='The epic performance was followed by a spectacular fireworks and drone show, lighting up Dubai’s newest icon. As the fireworks settled, Swedish House Mafia took to the stage to perform hits, including “One” and “Don’t You Worry Child,” as guests celebrated until the early hours.' ></EventsCard>
 <EventsCard pic='https://www.atlantis.com/scropper/-/screen/576/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/grandreveal-beyonce-mayyas-sun-v2.jpg' header='Beyoncé' text='The world’s most ultra-luxury resort was unveiled to the world with an exclusive 60-minute performance by global icon Beyoncé – her first live show since 2018.' ></EventsCard>
 <EventsCard pic='https://www.atlantis.com/scropper/-/screen/576/atlantis/dubai/atr/atlantis-the-royal/grand-reveal/kendalljenner-818-portrait.jpg' header='818 Afterparty' text='Guests vibed deep into the night at Cloud 22 with the launch of Kendall Jenner’s 818 Tequila, where they sipped on signature 818-inspired cocktails and danced to incredible DJ sets in this stunning open-air venue.' ></EventsCard>

  </div>
</div>


<div>

<MDBFooter style={{marginTop:100}} bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
          </a>
          <a href='' className='me-4 text-reset'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
          </a>
          <a href='' className='me-4 text-reset'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16">
  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
</svg>
          </a>
          <a href='' className='me-4 text-reset'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
          </a>
          <a href='' className='me-4 text-reset'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
          </a>
          <a href='https://github.com/YaninaDol/atlantis_front' className='me-4 text-reset'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' placeholder='Email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn color='secondary'>Subscribe</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
               <img width='200' height='100' src='https://www.onlinetraveltraining.com/media/5271517/atr-logo.png' alt='logo'></img>
              </h6>
          
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6  style={{color:'navy'}} className='text-uppercase fw-bold mb-4'>What's On</h6>
              <p >
               
              Atlantis Blog
               
              </p>
              <p >
               
              Ramadan in Atlantis
                
              </p>
              <p>
               
              Atlantis Members Rate
                
              </p>
              <p>
              
              The Atlantis Circle
                
              </p>
            </MDBCol>

            <MDBCol  md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6  style={{color:'navy'}} className='text-uppercase fw-bold mb-4'>Terms & Conditions</h6>
              <p>
                
              Atlantis Dubai Sitemap
               
              </p>
              <p>
              
              Resort Terms
               
              </p>
              <p>
               
              Privacy Policy
                
              </p>
              <p>
               
              Website Terms
              
              </p>
            </MDBCol>

            <MDBCol  md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6  style={{color:'navy'}} className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
</svg>
&nbsp;      Crescent Rd, The Palm Jumeirah, Dubai
              </p>
              <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
</svg>
&nbsp;      info_atlantis@gmail.com
              </p>
              <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
&nbsp; + 971 4 426 0000

              </p>
              <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
</svg>&nbsp;  04 426 3000
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: &nbsp; 
        <a className='text-reset fw-bold' href='atlantisfront.azurewebsites.net'>
          Atlantis.com
        </a>
      </div>
    </MDBFooter>
</div>
        </div>






    )
}