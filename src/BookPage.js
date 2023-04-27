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
    const handleClosePayCard = () => showPayCard(false);
    const handleShowPayCard = () => showPayCard(true);



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



        </div>
    )
  }