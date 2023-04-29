import './StartPage.css';
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ShowRoomItem from './showRoomsItem';
import BookItem from './BookItem';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartBasket from './CartBasket';
import QRCode from 'qrcode';
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
    MDBTypography,
    MDBCardBody,
    MDBPagination, MDBPaginationItem, MDBPaginationLink,
    MDBInputGroup,
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
    
    const [bookhidden, setBookHidden] = useState("hidden");
    const [isLogin, setIsLogin] = useState(true);
    const [nameLogin, setnameLogin] = useState("Logout");
    const [rooms,setRooms] = useState([]);
    const [allrooms,setAllRooms] = useState([]);
    const [category,setCategory] = useState([]);
    const [sides,setSides] = useState([]);
    const [countRoom, setcountRoom] = useState(0);
    const [f, setF] = useState(0);

    const [clickCategory, setClickCategory] = useState(0);
    const [clickView, setClickView] = useState(0);

   
    const [inputSearch, setInputSearch] = useState("");
    const [findrooms,setFindRooms] = useState([]);
    const [BookProduct,setBookProduct] = useState(new Object());

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [notice, setNotice] = useState("none");
    const [payInfo, setPayInfo] = useState("");
    const [totalDays, setTotalDays] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [arrBasket,setArrBasket] = useState([]);
    const [showM, setShowM] = useState(false);
    const handleShowM = () => setShowM(true);
    const handleCloseM = () => setShowM(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showQr, setShowQr] = useState(false);
    const handleCloseQr = () => setShowQr(false);
    const handleShowQr = () => setShowQr(true);

    const [showPayCard, setShowPayCard] = useState(false);
    const handleClosePayCard = () => setShowPayCard(false);
    const handleShowPayCard = () => setShowPayCard(true);



    const [itemsPerPage,setItemsPerPage]=useState(4);
    const totalItems = Math.ceil(rooms.length / itemsPerPage);
  
    const [active, setActive] = useState(1);
      const handleClick = (number) => {
        setActive(number);
        
      };
      const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalItems; i++) {
          pageNumbers.push(
            <MDBPaginationItem  key={i} active={i === active} onClick={() => handleClick(i)}>
              <span style={{backgroundColor:'lightgrey',borderRadius:'5px',marginLeft:'5px',marginRight:'5px'}} className="page-link">{i}</span>
            </MDBPaginationItem>
          );
        }
        return pageNumbers;
      };
      
      const indexOfLastItem = active * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = rooms.slice(indexOfFirstItem, indexOfLastItem);

      const [result, setResult] = useState("");
      const [picture, setPicture] = useState("");

      function CreateQr()
      {
        if(isLogin==true)
      { handleShowQr();
    
    
       var QRCode = require('qrcode')
     var str=`https://www.ipay.ua/ru/charger?bill_id=1663&acc=021018496&invoice=${totalPrice}.00&order_id=100506`;
       QRCode.toDataURL(str, function (err, url) {
        setPicture(url);
         console.log(url)
         setPayInfo('order_id=100506');
       })
      }
      else 
      {
        alert("You are not Log in!");
        handleShow();
      }
      }


function pay()
{
 setPayInfo('order_id=100506');
 setNotice(notice+payInfo);

 handleCloseQr();
}
function payCard()
{
 setPayInfo('order_id=100506');
 setNotice(notice+payInfo);

 handleClosePayCard();
}


    function checkavailablebtn()
    
    {
      setTotalDays( daysBetween(startDate,endDate));
     // alert(totalDays);
  if(isLogin!=false)
  {

                if(totalDays>1)
              {    var bodyFormData = new FormData();
                  bodyFormData.append('Start',  startDate);
                  bodyFormData.append('End', endDate);
                  bodyFormData.append('Adults', adult);
                  bodyFormData.append('Children', children);
              console.log ("start"+startDate+"end"+endDate+"adult"+adult+"children"+children);
                  axios (

                    {
                        method:'post',
                        url:'https://localhost:7271/api/RoomControllerCrud/Availability',
                    
                        data:bodyFormData,
                        headers: { 'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
                        'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken") }

                    }



                ).then  (res=>
                        {
                                console.log(res.data);
                              setRooms(res.data);
                              renderpage();
                        });
                      }
                      else alert("You must book more than 1 day!");
  }
  else
  {
    alert("You are not login!");
   
  }


      }



   useState(()=>


   {
  
    setStartDate(  window.sessionStorage.getItem("StartDate"));
    setEndDate(  window.sessionStorage.getItem("EndDate"));
    setAdult(window.sessionStorage.getItem("Adult"));
    setChildren(window.sessionStorage.getItem("Children"));
   if(isLogin==true)
   {
    if(f==0)
    {

      var bodyFormData = new FormData();
      bodyFormData.append('Start',  window.sessionStorage.getItem("StartDate"));
      bodyFormData.append('End', window.sessionStorage.getItem("EndDate"));
      bodyFormData.append('Adults', window.sessionStorage.getItem("Adult"));
      bodyFormData.append('Children', window.sessionStorage.getItem("Children"));
  //console.log ("start"+window.sessionStorage.getItem("StartDate")+"end"+ window.sessionStorage.getItem("EndDate")+"adult"+window.sessionStorage.getItem("Adult")+"children"+window.sessionStorage.getItem("Children"));
      axios (

        {
            method:'post',
            url:'https://localhost:7271/api/RoomControllerCrud/Availability',
         
            data:bodyFormData,
            headers: { 'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
            'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken") }

        }



    ).then  (res=>
            {
              console.log('RES ARRAY');
                    console.log(res.data);
                  setRooms(res.data);
                  setAllRooms(res.data);
                  renderpage();
            });


//category get

axios (

  {
      method:'get',
      url:'https://localhost:7271/api/Category/GetAll',
      headers: {
      'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken") }

  }



).then  (res=>
      {
              console.log(res.data);
              setCategory(res.data);
      });

//sides get


axios (

  {
      method:'get',
      url:'https://localhost:7271/api/Category/GetSides',
      headers: {
      'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken") }

  }



).then  (res=>
      {
              console.log(res.data);
              setSides(res.data);
      });

    }

   }
   else 
   {
    alert("You are not Login!");
    window.location.href = "/";
   }

   }
   
   
   )

   function ChooseCategory(value)
   {
    setClickCategory(value);
    if(clickView==0)
      {
        
        if(value!=0)
      {
        setRooms(allrooms.filter(item => item.category == value));
        renderpage();
      }
      else
      {
          setRooms(allrooms);
          renderpage();
      }
    }
    else
    {
      if(value!=0)
      {
      setRooms(allrooms.filter(item => item.category == value && item.side == clickView ));
      renderpage();
    }
    else
    {
      setRooms(allrooms.filter(item => item.side == clickView ));
      renderpage();
    }
    }
    
   }
   

   function ChooseSide(value)
   {
      setClickView(value);
      if(clickCategory==0)
      {
      if(value!=0)
      {
        setRooms(allrooms.filter(item => item.side == value));
        renderpage();

      }
      else
      {
          setRooms(allrooms);
          renderpage();
      }
    }
    else
    {
      if(value!=0)
      {
      setRooms(allrooms.filter(item => item.side == value && item.category == clickCategory ));
      renderpage();
    }
    else
    {
        setRooms(allrooms.filter(item =>  item.category == clickCategory ));
        renderpage();
    }


    }
    
   }
   
   function sortprice(value)
   {
      if(value!='0')
      {
        if(value=='1')
        {
          
          setRooms(  rooms
            .slice()
            .sort((a, b) => parseFloat(a.price) - parseFloat(b.price)));
        
            renderpage();
        
         
        }
        else
        {
          setRooms(  rooms
            .slice()
            .sort((a, b) => parseFloat(b.price) - parseFloat(a.price)));
            renderpage();
        }
      }
      else
      {
         
      }
    

    }

    function loginbtn()
    {
      if(nameLogin!="Logout")
      {
       
       
      }
      else
      {
  
        setIsLogin(false);
  
        setnameLogin("Login");
        
        window.sessionStorage.clear();

        alert("See you next time");
        window.location.href = "/";
      }
  
    }

    function renderpage()
    {
      const indexOfLastItem = active * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = rooms.slice(indexOfFirstItem, indexOfLastItem);
    }

    function getSearch()
      {
                
                let Copy = [...findrooms];

                for (const iterator of allrooms) 
                {
                let name=iterator['name'];
               
                  if(name.toLowerCase().includes(inputSearch.toLowerCase()))
                  {
                    Copy.push(iterator);
                    
                  }
                }
              
                if(inputSearch!="")
              { setRooms(Copy); }
              else
              {
                setRooms(allrooms);
               
              }

      }

      function submitbtn()
      {

        if(FirstName!=""&&LastName!=""&&phoneNumber!="")
       { for (const iterator of arrBasket) 
        {
       
        var bodyFormData = new FormData();

        bodyFormData.append('roomNumber',  iterator.id);
        bodyFormData.append('Userid',  window.sessionStorage.getItem("UserId"));
        bodyFormData.append('FirstName',  FirstName);
        bodyFormData.append('LastName',  LastName);
        bodyFormData.append('totaldays',  totalDays);
        bodyFormData.append('Start',  startDate);
        bodyFormData.append('End',endDate);
        bodyFormData.append('phoneNumber', phoneNumber);
        bodyFormData.append('notice',notice);
        
       
        axios (
  
          {
              method:'post',
              url:'https://localhost:7271/api/RoomControllerCrud/Book',
              data:bodyFormData,
              headers: { 'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
              'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken") }
  
          }
  
  
  
      ).then  (res=>
              {
                      console.log(res);
                      alert("You have successfully booked!");
                      handleClose();
    window.location.href = "/";
                 
              });

       
      }
      
       }
       else{
        alert("Fill in empty lines!");
       }
    }
    
   


      function bookbtn(id)
      {
        setTotalDays( daysBetween(startDate,endDate));
        
        if(isLogin==true)
            {

              if(totalDays>1)
              {setBookProduct(rooms.find(item => item.id == id));
            handleShowM();
              }
              else{alert("You must book moore than 1 day!")};



            }
            else{alert("You are not loggin!")};
      }


      function treatAsUTC(date) {
        var result = new Date(date);
        result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
        return result;
    }
    
    function daysBetween(startDate, endDate) {
        var millisecondsPerDay = 24 * 60 * 60 * 1000;
        return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
    }

    function  addBasket()
    {
      
        setcountRoom(countRoom+1);
       
      
      let Copy = [...arrBasket];
      Copy.push(BookProduct);
      setArrBasket(Copy);
      console.log(arrBasket);
      console.log(BookProduct);
      window.sessionStorage.setItem("Basket", arrBasket);
      setTotalPrice(totalDays*parseInt(BookProduct['price'])+totalPrice);
      handleCloseM();
      
    }
   
    return(
        <div>

<Modal show={showM} onHide={handleCloseM}>
        <Modal.Header closeButton>
          <Modal.Title>My booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want add to your booking?</Modal.Body>
        <Modal.Footer>
        <Button variant="outline-warning" onClick={addBasket}>
            Book
          </Button>
          <Button variant="secondary" onClick={handleCloseM}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>

      <Modal id='basket' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking summary</Modal.Title>
        </Modal.Header>
        <Modal.Body> {
        arrBasket.map(
            (x)=><CartBasket  unic={x.id} name={x.name} startDate={startDate} endDate={endDate} picture={x.picture1} price={x.price} days={totalDays} guests={adult+" Adults "+children+" children "} ></CartBasket>
        )
        }
              <div className="d-flex justify-content-between mb-4">
                <MDBTypography tag="h5" className="text-uppercase">
                  Total price: 
                </MDBTypography>
                <MDBTypography tag="h5">{totalPrice} AED</MDBTypography>
              </div>
              <h3 style={{color:'navy'}}>YOUR DETAILS</h3>
              <MDBRow className="justify-content-between align-items-center">
                <MDBCol >
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control onChange={(e)=>setFirstName(e.target.value)} type="text" />
      
      </Form.Group>
                </MDBCol>
                <MDBCol  >
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={(e)=>setLastName(e.target.value)} type="text" />
      </Form.Group>
                </MDBCol>
                </MDBRow>

                <MDBRow className="justify-content-between align-items-center">
                <MDBCol >
                <Form.Group className="mb-3" >
        <Form.Label>Telephone Number</Form.Label>
        <Form.Control onChange={(e)=>setPhoneNumber(e.target.value)} type="text" />
      
      </Form.Group>
                </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-between align-items-center">
                <MDBCol  >
                <Form.Group className="mb-3" >
        <Form.Label>Notice</Form.Label>
        <Form.Control onChange={(e)=>setNotice(e.target.value)} type="text" />
      </Form.Group>
                </MDBCol>
                </MDBRow>

              <MDBCardBody>
            <p>
              <strong>We accept</strong>
            </p>
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <MDBCardImage className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
              alt="PayPal acceptance mark" />
          </MDBCardBody>
        <MDBCol style={{marginTop:20}}>
        <MDBRow>
          <Button  variant="outline-success" onClick={()=>handleShowPayCard()}  >
            Pay by card 
          </Button>
          </MDBRow>
          </MDBCol>
          <MDBCol>
          <MDBRow>
          <Button  variant="outline-success" onClick={()=>{ CreateQr()}} >
            Pay by QR 
          </Button>
          </MDBRow>
</MDBCol>
        </Modal.Body>
        <Modal.Footer>
        <Button  variant="warning"  onClick={submitbtn}>
            Checkout 
          </Button>
          <Button variant="dark" onClick={()=>{handleClose();arrBasket.splice(0, arrBasket.length);setTotalPrice(0); setcountRoom(0)}}>
            Modify booking
          </Button>
         
        </Modal.Footer>
      </Modal>
    
<Modal show={showPayCard} onHide={handleClosePayCard} >

<MDBCol >
<Modal.Header  closeButton>
<Modal.Title>Payment</Modal.Title>
        </Modal.Header>   
        <Modal.Body>
                    <label>Card number</label>
                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                      
                        type="text"
                        size="lg"
                        defaultValue="1234 5678 9012 3457"
                      />
                        <label>Name on card</label>
                      <MDBInput
                        className="mb-5"
                        type="text"
                        size="lg"
                        defaultValue="John Smith"
                      />
                       
                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Expiration"
                            type="text"
                            size="sm"
                            minLength="7"
                            maxLength="7"
                            defaultValue="01/22"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Cvv"
                            type="text"
                            size="sm"
                            minLength="3"
                            maxLength="3"
                            placeholder="&#9679;&#9679;&#9679;"
                            defaultValue="&#9679;&#9679;&#9679;"
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                      <MDBBtn style={{marginTop:30}} onClick={payCard}  size="lg">
                        Proceed to payment 
                      </MDBBtn>
                      </MDBRow>

                      </form>
                      </Modal.Body>
                      </MDBCol>
  
</Modal>



      <Modal  className="text-center" show={showQr}  onHide={handleCloseQr}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div>
   <img src={picture} alt="picture QR"></img>
    </div>
    <div >
			
			<div >{result}</div>		
		</div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseQr}>
            Close
          </Button>
          <Button variant="success" onClick={pay} >
            Proceed to pay
          </Button>
        </Modal.Footer>
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
              <MDBBtn className='bookbtn' onClick={()=>handleShow()} href='#booking' lg color='light' style={{marginLeft:500,color:'DarkGoldenRod'}}>
        My booking
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
          src="https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/tra/rooms/atlantistheroyal-rooms-presidentialsuitegrandlivingroom.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <img
        height={700}
          className="d-block w-100"
          src='https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/tra/rooms/atlantistheroyal-penthouse-interior-royalmansionbedroom.jpg'
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
        height={700}
          className="d-block w-100"
          src='https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/tra/rooms/atlantistheroyal-stays-interior-bridgesuiteliving.jpg'
          alt="Third slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          height={700}
          className="d-block w-100"
          src="https://www.atlantis.com/scropper/-/screen/1920/atlantis/dubai/tra/rooms/atlantis-the-royal_skyscape-penthouse_pool-view.jpg"
          alt="Third slide"
        />

      </Carousel.Item>

    </Carousel>

    <Navbar  bg="secondary" variant="dark">
        <Container style={{marginLeft:200, marginRight:50}}>
        
          <Nav  className="me-auto">
            <Nav.Link ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> &nbsp;
{startDate}  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
</svg> </Nav.Link>
            <Nav.Link >{endDate}</Nav.Link>
            <Nav.Link ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
</svg> Adults: &nbsp;{adult}</Nav.Link>
            <Nav.Link >Children: &nbsp;{children}</Nav.Link>
            <Nav.Link ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd" viewBox="0 0 16 16">
  <path d="M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
  <path d="M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198V11zM3.655 4.26 1.592 8.043C1.724 8.014 1.86 8 2 8h12c.14 0 .276.014.408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
</svg>  {countRoom} Room</Nav.Link>
          </Nav>
          <MDBBtn className='bookbtn' onClick={()=>setBookHidden("")} lg color='light' style={{marginLeft:500,color:'DarkGoldenRod'}}>
        Modify Booking
      </MDBBtn>
        </Container>
      </Navbar>

    <div id='booking' hidden={bookhidden} style={{marginLeft:200,marginTop:20}}>
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

<div>

<Navbar  bg="light" variant="dark">
        <Container style={{marginLeft:200, marginTop:20}}>
        
          <Nav  className="me-auto">
          <MDBNavbarItem style={{fontSize:20, color:'navy'}}>
            SELECT ROOM
          </MDBNavbarItem>


          <MDBNavbarItem style={{marginLeft:200}}>
            <h6 style={{ color:'navy'}}>Filter by </h6>
            <select className="select p-2  bg-grey"  onChange={({ target: { value } }) => ChooseCategory(value)} style={{ width: 'auto' }}>
                      <option value={0}>All category</option>
                      {
                      category.map((x) => 
                        <option  value={x.id}>
                        {x.name}
                        </option>
                     )}
                    </select>
             
            </MDBNavbarItem>
            <MDBNavbarItem style={{marginLeft:50}}>
           <h6>&nbsp;</h6>
            <select className="select p-2  bg-grey"  onChange={({ target: { value } }) => ChooseSide(value)} style={{ width: 'auto'}}>
                      <option value={0}>All sides</option>
                      {
                      sides.map((x) => 
                        <option  value={x.id}>
                        {x.name}
                        </option>
                     )}
                    </select>
             
            </MDBNavbarItem>
            <MDBNavbarItem style={{marginLeft:50}}>
            <h6 style={{ color:'navy'}}>Sort by</h6>
            <select className="select p-2  bg-grey"  onChange={({ target: { value } }) => sortprice(value)} style={{ width: 'auto' }}>
                      <option value='0'>By price</option>
                     
                        <option  value='1'>
                        Prices Low To High
                        </option>
                        <option  value='2'>
                        Prices High To Low
                        </option>
                   
                    </select>
             
            </MDBNavbarItem>
           
        
            
          </Nav>
          <Form style={{marginTop:30}}  className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setInputSearch(e.target.value)}
            />
            <Button onClick={getSearch} variant="outline-secondary">Search</Button>
          </Form>
         
        </Container>
      </Navbar>


</div>
<div>
<select  style={{marginLeft:1180,marginTop:50}} className="select p-2 rounded bg-grey"  onChange={({ target: { value } }) => setItemsPerPage(value)} >
                      <option value='10'>Choose count of page</option>
                    <option  value='4'> 4</option>
                    <option  value='6'>6</option>
                    <option  value='8'>8</option>
                    <option  value='10'>10</option>
                    </select>
</div>


<div>
{
  currentItems.map((x)=><BookItem book={bookbtn} unic={x.id} header={x.name} pic1={x.picture1} pic2={x.picture2} pic3={x.picture3} description={x.description} view={x.views} size={x.size} occupancy={x.capacity} notice={x.notice} price={x.price} ></BookItem>)
}

</div>


<div>
<nav aria-label='Page navigation example'>
      <MDBPagination  style={{marginLeft:650,marginTop:50}}  className='mb-0'>
      <MDBPaginationItem >
          <MDBPaginationLink  style={{color:'gray'}} onClick={(e) =>{active>1? handleClick(active-1): e.preventDefault()}} aria-disabled='true'>
            Previous
          </MDBPaginationLink>
        </MDBPaginationItem>
        {renderPageNumbers()}
        <MDBPaginationItem>
          <MDBPaginationLink style={{color:'gray'}} onClick={(e) =>{active===indexOfLastItem? handleClick(active+1): e.preventDefault()}} aria-disabled='true'>
            Next
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
      </nav>
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