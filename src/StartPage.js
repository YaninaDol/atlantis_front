import './StartPage.css';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ShowRoomItem from './showRoomsItem';
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';
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

export default function StartPage(){
    const [showBasic, setShowBasic] = useState(false);
    const [startDate, setStartDate] = useState(Date.now());
    const [endDate, setEndDate] = useState(Date.now());
    const [adult, setAdult] = useState(2);
    const [children, setChildren] = useState(0);
    const [isLogin, setIsLogin] = useState(false);
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loginhidden, setLoginhidden] = useState("");
    const [signinhidden, setSigninhidden] = useState("hidden");
   
    const [nameLogin, setnameLogin] = useState("Login");

  function loginbtn()
  {
    if(nameLogin!="Logout")
    {
      handleShow();
     
    }
    else
    {

      setIsLogin(false);

      setnameLogin("Login");
      
      window.sessionStorage.clear();
      alert("See you next time");
    }

  }

  function SubmitLogIn() 
  {
     
      if(pass1==pass2)
      {
         
      
              axios (

                  {
                      method:'post',
                      url:'https://localhost:7271/api/Authenticate/login',
                      data:
                      JSON.stringify({ UserName:login, Password: pass1}),
                      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }

                  }



              ).then  (res=>

                      
                      {
                         
                           
                         
                              window.sessionStorage.setItem("AccessToken", res.data.token);
                              window.sessionStorage.setItem("UserId", res.data.userId);
                            setIsLogin(true);
                             if(res.data.userRole[0]=="User")

                             {
                                             
                           
                            setnameLogin("Logout");
                          
                               console.log(res.data.userRole[0]);
                              console.log(res.data.token);
                              handleClose();

                             }

                             if(res.data.userRole[0]=="Admin")
                             {
                             
                        
                             }


                      })
                      .catch(function (error) {
                          alert("Error password or email");
                          window.location.href = "/";
                          setIsLogin(false);
                          console.log("Error:"+error);
                        });
                      
                      
                      ;

      }
      else
      {
         
          alert("Erorr confirm password!");
      }

  };

  function SubmitSignIn() 
    {
   
        if(pass1==pass2)
        {
                
        
                axios (

                    {
                        method:'post',
                        url:'https://localhost:7271/api/Authenticate/regUser',
                        data:
                        JSON.stringify({ UserName:login, Password: pass1,Email:email }),
                        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }

                    }



                ).then  (res=>
                        {
                                console.log(res.data);
                                alert("You sing in success!")
                               window.location.reload();
                        });

        }
        else
        {
            alert("Erorr!");
        }
       
        
       
  
     
    }


    function checkavailablebtn()
    
    {
  if(isLogin!=false)
  {
   
    window.sessionStorage.setItem("StartDate",startDate);
    window.sessionStorage.setItem("EndDate",endDate);
    window.sessionStorage.setItem("Adult",adult);
    window.sessionStorage.setItem("Children",children);


    window.location.href = "/bookpage";

  }
  else
  {
    alert("You are not login!");
    handleShow();
  }


      }

    return(
            <div>
            

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login/Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form hidden={loginhidden}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Login"
                name="login"
                onChange={(e)=>setLogin(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
               
                onChange={(e)=>setPass1(e.target.value)}   
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat Password"
                name="repeat password"
               
                onChange={(e)=>setPass2(e.target.value)}   
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label onClick={()=>alert('hello')}>Forgot password?</Form.Label>
            
            </Form.Group>


            <Button  variant="dark" onClick={SubmitLogIn} >
              Submit
            </Button>
            <Button style={{marginLeft:300}} variant="warning" onClick={()=>{setLoginhidden("hidden");setSigninhidden("")}} >
              Sign in
            </Button>
          </Form>

          <Form hidden={signinhidden}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Login"
                name="login"
                onChange={(e)=>setLogin(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
               
                onChange={(e)=>setPass1(e.target.value)}   
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat Password"
                name="repeat password"
               
                onChange={(e)=>setPass2(e.target.value)}   
              />
            </Form.Group>
        
            <Button  variant="dark" onClick={SubmitSignIn} >
              Submit
            </Button>
            <Button style={{marginLeft:300}} variant="warning" onClick={()=>{setLoginhidden("");setSigninhidden("hidden")}} >
              Log in
            </Button>
          </Form>


          </Modal.Body>
          </Modal>




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
                <MDBNavbarLink style={{color:'navy'}} onClick={loginbtn}>{nameLogin}</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>

                <MDBNavbarLink style={{color:'navy'}} to="/news" > <Link style={{color:'navy',textDecoration:'none'}} to="/news">News</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink style={{color:'navy'}} href='/about'>About</MDBNavbarLink>
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
      <Carousel.Item active>
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
      <Button onClick={checkavailablebtn} variant="secondary">CHECK AVAILABILITY</Button>
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
<br/>
This is Atlantis The Royal. 

</div>


    </div>

<div>
<div className="ratio ratio-21x9">
<iframe width="260" height="115" src="https://www.youtube.com/embed/2nozp02vi5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

</div>


    <div style={{marginTop:100}} className='mainheader'>
    <h2 class="mainTitle">ROOMS, SUITES & SIGNATURE PENTHOUSES</h2>
    <span className='titleUnderline'></span>
    <div class="mainTitleText">
    A masterclass of sophistication, a stay at Atlantis The Royal delivers extraordinary luxury, unlike anywhere else. Expect some of the most elegant Rooms, Suites and Signature Penthouses in the world, designed to immerse you in absolute comfort and luxury. Soaring 43 storeys high with infinite views of the Arabian Sea and Palm Island, stays at this iconic resort effortlessly fuse stylish interiors with great outdoor lounging areas. The private balconies, expansive terraces and private pools create a feeling of sitting amongst the clouds. This is a stay that you’ll show off for years to come.
</div>


    </div>
 
  <div className='cartContainer'>
 <ShowRoomItem header='SIGNATURE SUITES' pic1='https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/tra/rooms/tra-interior-roomsrender.jpg' pic2='https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/tra/rooms/atlantistheroyal-interior-royalclub-royalclubsealounge.jpg' pic3='https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/tra/rooms/atlantistheroyal-royalclub-interior-bathrooms.jpg' text='Experience a rare kind of luxury unlike anywhere else, with expansive terraces decked with private pools and bedrooms made for royalty. Wake into a world of impossibilities made possible.'></ShowRoomItem>
 <ShowRoomItem header='FAMILY APARTMENTS' pic1='https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/tra/rooms/atlantistheroyal-suites-interior-skyterracesuite.jpg' pic2='https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/tra/rooms/tra-interior-skyterracesuite-bathroom.jpg' pic3='https://www.atlantis.com/scropper/-/screen/992/atlantis/dubai/tra/rooms/atlantistheroyal-interior-royalclub-royalclubsealounge.jpg' text='The interconnecting Family Room is the perfect space for a group or family of up to four, complete with one king and two queen beds. Each bedroom features an en-suite bathroom, walk-in wardrobe and private balcony delivering endless views across the Palm Island or the Arabian Sea.'></ShowRoomItem>
 <ShowRoomItem header='ROYAL VILLAS' pic1='https://www.atlantis.com/scropper/-/screen/768/atlantis/dubai/atr/atlantis-the-royal/rooms-suites/suites/sky-pool-villa/interior/atr-sky-pool-villa-terrace-day.jpg' pic2='https://www.atlantis.com/scropper/-/screen/768/atlantis/dubai/atr/atlantis-the-royal/rooms-suites/suites/sky-pool-villa/interior/atr-sky-pool-villa-interior-bedroom.jpg' pic3='https://www.atlantis.com/scropper/-/screen/768/atlantis/dubai/atr/atlantis-the-royal/rooms-suites/suites/sky-pool-villa/interior/atr-sky-pool-villa-interior-bathroom.jpg' text='This dream-worthy Suite features an expansive terrace with outdoor seating for dining al fresco from morning to night, a private infinity pool and dining area.'></ShowRoomItem>

  </div>

  <div style={{marginTop:100}} className='mainheader'>
    <h2 class="mainTitle">Entertainment, Nightlife & Beyond</h2>
    <span className='titleUnderline'></span>
    <div class="mainTitleText">
    Lose yourself to next level entertainment at Atlantis Dubai, where the party never stops. From the region's first fire and water spectacle, to the trendiest bars and beach clubs and never-ending family fun, experience the extraordinary at the city's most vibrant entertainment spot.

   </div>
    </div>


<div >
    <MDBCardGroup >
     
      <MDBCard>
        <MDBCardImage src='https://www.atlantis.com/scropper/-/screen/576/atlantis/dubai/atr/atlantis-the-royal/restaurants/nobu-by-the-beach/lifestyle/atr-nobu-by-the-beach-adults-pool.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Nobu by the Beach</MDBCardTitle>
          <MDBCardText>
          Renowned worldwide for its distinctive Japanese-Peruvian cuisine, Nobu debuts his first ever daytime poolside and beach restaurant.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='https://www.atlantis.com/scropper/-/screen/576/atlantis/dubai/atr/atlantis-the-royal/resort/exterior/skyblaze-centerview.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>Skyblaze Fountain</MDBCardTitle>
          <MDBCardText>
          Impressive yet intimate, Skyblaze Fountain is the region’s first fire-meets-water spectacle. Watch these two elements collide in this amazing show.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='https://www.atlantis.com/scropper/-/screen/576/atlantis/dubai/atp/restaurants/white-beach/lifestyle/whitebeach-lifestyle-coupleinthepool.jpg' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle>WHITE Beach</MDBCardTitle>
          <MDBCardText>
          A chic beach side daydream, this is Atlantis Dubai’s hottest beach club featuring an Instagram-worthy infinity pool, and a breezy open-air terrace perfect for day-to-night experiences.
          </MDBCardText>
         
        </MDBCardBody>
      </MDBCard>

    </MDBCardGroup>
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