import {MDBBtn,MDBInputGroup,MDBCheckbox , MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {MDBNavbarItem} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserTableItem from './UserTableItem';
import HistoryTableItem from './HistoryTableItem';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import React from 'react';

export default function UserTable(){


    const [f,setF] = useState(0);
    const [users,setUsers]=useState([]);
    const [history,setHistory]=useState([]);
    const [allhistory,setAllHistory]=useState([]);

    const [showOrder, setShowshowOrder] = useState(false);

    const handleCloseshowOrder = () => setShowshowOrder(false);
    const handleShowshowOrder = () => setShowshowOrder(true);


    const [showPaid, setShowshowPaid] = useState(false);

    const handleCloseshowPaid = () => setShowshowPaid(false);
    const handleShowshowPaid = () => setShowshowPaid(true);


    const [showRemove, setShowRemove] = useState(false);

    const handleCloseRemove = () => setShowRemove(false);
    const handleShowRemove = () => setShowRemove(true);


    const [idRemove,setIdRemove]=useState(0);
    const [idCloseOrder,setIdCloseOrder]=useState(0);
    const [idPaidOrder,setidPaidOrder]=useState(0);

    const [idUserUpdate,setIdUserUpdate]=useState(0);
    const [userLoginUpdate,setUserLoginUpdate]=useState('');
    const [userEmailUpdate,setUserEmailUpdate]=useState('');

    const [showUp, setShowUp] = useState(false);
    const handleCloseUp = () => setShowUp(false);
    const handleShowUp = () => setShowUp(true);

    const [showAddU,setShowAddU] = useState(false);
    const handleCloseAddU = () => setShowAddU(false);
    const handleShowAddU = () => setShowAddU(true);

    const [UserLoginAddU,setUserLoginAddU]=useState('');
    const [userEmailAddU,setUserEmailAddU]=useState('');
    const [userPasswordAddU,setUserPasswordAddU]=useState('');


    const [showAddA,setShowAddA] = useState(false);
    const handleCloseAddA = () => setShowAddA(false);
    const handleShowAddA = () => setShowAddA(true);

    const [UserLoginAddA,setUserLoginAddA]=useState('');
    const [userEmailAddA,setUserEmailAddA]=useState('');
    const [userPasswordAddA,setUserPasswordAddA]=useState('');

    useEffect(()=>

    {
       
        
    if(f==0)
       {   
        
        
        axios (
            {
            method:'get',
            url:'https://localhost:7271/api/Authenticate/getUsers',
            headers: {
                    'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
            },

            }



    ).then  (res=>
        {
            console.log(res.data);
            setUsers(res.data);
            setF(1);
           
        });


        axios (

            {
            method:'get',
            url:'https://localhost:7271/api/RoomControllerCrud/GetHistory',
            headers: {
                    'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
            },

            }



    ).then  (res=>
        {
            console.log(res.data);
            setHistory(res.data);
            setAllHistory(res.data);
            setF(1);
            
        });

         

       }
    })

    function removebtn(id)
    {
   
    setIdRemove(id);
    handleShowRemove();
       
    }

 
    function confirmRemove()
    {
   var bodyFormData = new FormData();
      bodyFormData.append('userID', idRemove);
                  axios (
    
                    {
                    method:'post',
                    url:'https://localhost:7271/api/Authenticate/deleteUser',
                    data:bodyFormData,
                    headers: {
                      'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
                            'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
                    },
                   
                    }
    
    
    
                ).then  (res=>
                {
                  alert("User deleted successfull")
                    console.log(res.data);
                   window.location.reload();
                   
                });  
    


    }


    function updatebtn(id)
    {
    
        
      let user= users.find(item=>item.id == id);
    
      setIdUserUpdate(id);
    
        setUserLoginUpdate(user['userName']);
        setUserEmailUpdate(user['email']);
    
    handleShowUp();
    
    
    }
    function confirmUp()
{

  var bodyFormData = new FormData();
  bodyFormData.append('userID', idUserUpdate);
  bodyFormData.append('UserName', userLoginUpdate);
  bodyFormData.append('email', userEmailUpdate);
 
  axios (

    {
    method:'post',
    url:'https://localhost:7271/api/Authenticate/updateUser',
    data:bodyFormData,
    headers: {
      'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
            'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
    },
   
    }



).then  (res=>
{
  alert("User updated successfull!")
    console.log(res.data);
    window.location.reload();
   
});  
 


}

function confirmAddUser()
{
   
    genPassword();
    function genPassword() {
       var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       var passwordLength = 9;
       var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
     }
        setUserPasswordAddU(password);
    }

    axios (
  
      {
      method:'post',
      url:'https://localhost:7271/api/Authenticate/regUser',
      data: JSON.stringify({ UserName: UserLoginAddU, Password: userPasswordAddU,Email:userEmailAddU}), 
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
     
      }
  
  
  
  ).then  (res=>
  {
    alert("User registered successfull!")
      console.log(res.data);
      window.location.reload();
     
  });  

}

function confirmAddAdmin()
{
   
    genPassword();
    function genPassword() {
       var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       var passwordLength = 9;
       var password = "";
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
     }
        setUserPasswordAddA(password);
    }

    axios (
  
      {
      method:'post',
      url:'https://localhost:7271/api/Authenticate/regAdmin',
      data: JSON.stringify({ UserName: UserLoginAddA, Password: userPasswordAddA,Email:userEmailAddA}), 
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
     
      }
  
  
  
  ).then  (res=>
  {
    alert("Admin registered successfull!")
      console.log(res.data);
      window.location.reload();
     
  });  

}



function closestatus(id)
{
    handleShowshowOrder();
setIdCloseOrder(id);

   
}

function paidtatus(id)
{
    handleShowshowPaid();
setidPaidOrder(id);

   
}
function confirmCloseStatus()
{
    
      var bodyFormData = new FormData();
      bodyFormData.append('Id', idCloseOrder);
                  axios (
    
                    {
                    method:'post',
                    url:'https://localhost:7271/api/RoomControllerCrud/CloseStatus',
                    data:bodyFormData,
                    headers: {
                      'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
                            'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
                    },
                   
                    }
    
    
    
                ).then  (res=>
                {
                  alert("Order closed!")
                    console.log(res.data);
                   window.location.reload();
                   
                });  


    handleCloseshowOrder();
}

function confirmPaidStatus()
{
    
      var bodyFormData = new FormData();
      bodyFormData.append('Id', idPaidOrder);
                  axios (
    
                    {
                    method:'post',
                    url:'https://localhost:7271/api/RoomControllerCrud/PaidStatus',
                    data:bodyFormData,
                    headers: {
                      'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
                            'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
                    },
                   
                    }
    
    
    
                ).then  (res=>
                {
                  alert("Ok!")
                    console.log(res.data);
                   window.location.reload();
                   
                });  


    handleCloseshowOrder();
}

function ChooseStatus(value)
{

 
     
     if(value!=0)
   {
     setHistory(allhistory.filter(item => item.status == value));
    
   }
   else
   {
    setHistory(allhistory);
      
   }
 
 
}

function sortDate(value)
{
   if(value!='0')
   {
     if(value=='1')
     {
    
       
       setHistory(  allhistory
         .slice()
         .sort((a, b)=>{ 
         var c = new Date(a.dateFisrt);
         var d = new Date(b.dateFisrt);
         return c-d;
         }
         ));
     
        
     
      
     }
     else
     {
      setHistory(  allhistory
         .slice()
         .sort((a, b)=>{ 
          var c = new Date(b.dateFisrt);
          var d = new Date(a.dateFisrt);
          return c-d;
          }
          ));
       
     }
   }
   else
   {
      
   }
 

 }

    
    return(
        <div>

<Modal show={showOrder} onHide={handleCloseshowOrder}>
        <Modal.Header closeButton>
          <Modal.Title>Close order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseshowOrder}>
            Cancel
          </Button>
          <Button variant="dark" onClick={confirmCloseStatus}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showPaid} onHide={handleCloseshowPaid}>
        <Modal.Header closeButton>
          <Modal.Title>Close order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseshowPaid}>
            Cancel
          </Button>
          <Button variant="dark" onClick={confirmPaidStatus}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showRemove} onHide={handleCloseRemove}>
        <Modal.Header closeButton>
          <Modal.Title>Remove user</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRemove}>
            Cancel
          </Button>
          <Button variant="dark" onClick={confirmRemove}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showUp}
        onHide={handleCloseUp}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <MDBInputGroup className='mb-3'  textBefore='User ID'>
      <input disabled value={idUserUpdate} className='form-control' type='text' />
    </MDBInputGroup>
    <MDBInputGroup className='mb-3' textBefore='Login User'>
      <input onChange={(e)=>setUserLoginUpdate(e.target.value)} value={userLoginUpdate} className='form-control' type='text' />
      </MDBInputGroup>
      <MDBInputGroup className='mb-3' textBefore='Email User'>
      <input onChange={(e)=>setUserEmailUpdate(e.target.value)} value={userEmailUpdate} type='email' className='form-control' />
      </MDBInputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUp}>
            Close
          </Button>
          <Button variant="dark" onClick={confirmUp}>Confirm</Button>
        </Modal.Footer>
      </Modal>


      <Modal
        show={showAddU}
        onHide={handleCloseAddU}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Registration User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <MDBInputGroup className='mb-3' textBefore='Login User'>
      <input onChange={(e)=>setUserLoginAddU(e.target.value)} className='form-control' type='text' />
      </MDBInputGroup>
      <MDBInputGroup className='mb-3' textBefore='Email User'>
      <input onChange={(e)=>setUserEmailAddU(e.target.value)} type='email' className='form-control' />
      </MDBInputGroup>
      <MDBInputGroup className='mb-3' textBefore='Email User'>
      <input  disabled type="password"  class="form-control"  placeholder="generate password"/>
      </MDBInputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddU}>
            Close
          </Button>
          <Button variant="dark" onClick={confirmAddUser}>Confirm</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showAddA}
        onHide={handleCloseAddA}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Registration Menager</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <MDBInputGroup className='mb-3' textBefore='Login'>
      <input onChange={(e)=>setUserLoginAddA(e.target.value)} className='form-control' type='text' />
      </MDBInputGroup>
      <MDBInputGroup className='mb-3' textBefore='Email'>
      <input onChange={(e)=>setUserEmailAddA(e.target.value)} type='email' className='form-control' />
      </MDBInputGroup>
      <MDBInputGroup className='mb-3' textBefore='Email'>
      <input  disabled type="password"  class="form-control"  placeholder="generate password"/>
      </MDBInputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddA}>
            Close
          </Button>
          <Button variant="dark" onClick={confirmAddAdmin}>Confirm</Button>
        </Modal.Footer>
      </Modal>

<div>

        <Button style={{float:'left'}} outline rounded className='mx-2' href='/admin' variant='dark'>
        &#8592; GO TO DASHBOARD OF CATEGORY & ROOMS
</Button>
<Button style={{marginLeft:500}} outline onClick={()=>handleShowAddU()} variant='dark'>
       REGISTER USER
</Button>

<Button  style={{marginLeft:20}}  outline onClick={()=>handleShowAddA()} variant='dark'>
REGISTER MENAGER
</Button>

</div>




      
<h1 style={{marginLeft: 330}}>DASHBOARD OF USERS</h1>
<MDBTable>
<MDBTableHead dark>
  <tr>
  <th scope='col'></th>
    <th scope='col'>#</th>
    <th scope='col'>User Name</th>
    <th scope='col'>Email</th>
    <th scope='col'></th>
    <th scope='col'></th>
  </tr>
</MDBTableHead>
<MDBTableBody >
 {
  users.map((x)=> <UserTableItem id={x.id}  unic={x.id} name ={x.userName} email={x.email} remove={removebtn} update={updatebtn}></UserTableItem>)
 }
</MDBTableBody>
</MDBTable>


<div hidden="">

<h1 style={{marginLeft: 330}}>HISTORY OF ORDERS</h1>


<div>

<Navbar  bg="light" variant="dark">
        <Container style={{marginLeft:200, marginTop:20}}>
        
          <Nav  className="me-auto">
        

          <MDBNavbarItem style={{marginLeft:-180}}>
            <h6 style={{ color:'black'}}>Sort by</h6>
            <select className="select p-2  bg-grey"  onChange={({ target: { value } }) => sortDate(value)} style={{ width: 'auto' }}>
                      <option value='0'>By Date</option>
                     
                        <option  value='1'>
                        Sort Oldest to Newest
                        </option>
                        <option  value='2'>
                        Sort Newest to Oldest
                        </option>
                   
                    </select>
             
            </MDBNavbarItem>

          <MDBNavbarItem style={{marginLeft:630}}>
            <h6 style={{ color:'black'}}>Filter by </h6>
            <select className="select p-2  bg-grey"  onChange={({ target: { value } }) => ChooseStatus(value)} style={{ width: 'auto' }}>
                      <option value="">All statuses</option>
                        <option  value="new">New</option>
                        <option  value="paid">Paid</option>
                        <option  value="closed">Closed</option>
                   
                    </select>
             
            </MDBNavbarItem>
          
        
           
        
            
          </Nav>
         
         
        </Container>
      </Navbar>


</div>


<MDBTable>
<MDBTableHead dark>
  <tr>
  <th scope='col'></th>
    <th scope='col'>#</th>
    <th scope='col'>Date first</th>
    <th scope='col'>Date last</th>
    <th scope='col'>Room ID</th>
    <th scope='col'>Total days</th>
    <th scope='col'>User ID</th>
    <th scope='col'>Phone number</th>
    <th scope='col'>Status</th>
    <th scope='col'>Notes</th>
    <th scope='col'>Name</th>
    <th scope='col'>Surname</th>
    <th scope='col'></th>
    <th scope='col'></th>
  </tr>
</MDBTableHead>
<MDBTableBody >
 {
  history.map((x)=> <HistoryTableItem id={x.id} closestatus={closestatus} paidstatus={paidtatus} unic={x.id} datefirst={x.dateFisrt} datelast={x.dateLast} roomId={x.roomNumber} totalDays={x.totalDays} userId={x.userId} phoneNumber={x.phoneNumber} status={x.status} notes={x.notes} name={x.firstName} surname={x.lastName}></HistoryTableItem>)
 }
</MDBTableBody>
</MDBTable>
</div>


    </div>
    );
}