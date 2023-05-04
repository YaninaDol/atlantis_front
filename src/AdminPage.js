import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import React from 'react';
import CategoryTableItem from './CategoryTableItem';
import RoomTableItem from './RoomTableItem';
import {MDBBtn,MDBInputGroup,MDBCheckbox , MDBTable, MDBTableHead, MDBTableBody, MDBInput } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function AdminPage(){

    const [f,setF] = useState(0);
    const [masCategories,setMasCategories]=useState([]);
    const [allrooms,setAllrooms]=useState([]);
    const [rooms,setRooms]=useState([]);
    const [bookInfo,setBookInfo]=useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const [findproducts,setFindProducts] = useState([]);

    const [addCategoryHide,setAddCategoryHide] = useState("hidden");
    const [addCatName,setAddCatName] = useState("");
    const [addCatBed,setAddCatBed] = useState("");

    const [updateCategoryHide,setUpdateCategoryHide] = useState("hidden");
    const [UpdateCatId,setUpdateCatId] = useState(0);
    const [UpdateCatName,setUpdateCatName] = useState("");
    const [UpdateCatBed,setUpdateCatBed] = useState("");


    const [addRoomHide,setAddRoomHide] = useState("hidden");
    const [addRoomName,setAddRoomName] = useState("");
    const [addRoomPic1,setAddRoomPic1] = useState("");
    const [addRoomPic2,setAddRoomPic2] = useState("");
    const [addRoomPic3,setAddRoomPic3] = useState("");
    const [addRoomCategory,setAddRoomCategory] = useState("");

    const [addRoomStatus,setAddRoomStatus] = useState("");
    const [addRoomSide,setAddRoomSide] = useState("");
    const [addRoomSideName,setAddRoomSideName] = useState("");

    const [addRoomCapacity,setAddRoomCapacity] = useState("");
    const [addRoomDescription,setAddRoomDescription] = useState("");
    const [addRoomSize,setAddRoomSize] = useState("");
    const [addRoomNotice,setAddRoomNotice] = useState("");
    const [addRoomPrice,setAddRoomPrice] = useState("");
  
    const [updateRoomHide,setUpdateRoomHide] = useState("hidden");
    const [UpdateRoomId,setUpdateRoomId] = useState(0);
    const [updateRoomName,setUpdateRoomName] = useState("");
    const [updateRoomPic1,setUpdateRoomPic1] = useState("");
    const [updateRoomPic2,setUpdateRoomPic2] = useState("");
    const [updateRoomPic3,setUpdateRoomPic3] = useState("");
  
    const [updateRoomCapacity,setUpdateRoomCapacity] = useState("");
    const [updateRoomDescription,setUpdateRoomDescription] = useState("");
    const [updateRoomSize,setUpdateRoomSize] = useState("");
    const [updateRoomNotice,setUpdateRoomNotice] = useState("");
    const [updateRoomPrice,setUpdateRoomPrice] = useState("");

    const [sides,setSides] = useState([]);

    if(f==0)
    {   
     
     
     axios (
         {
         method:'get',
         url:'https://localhost:7271/api/Category/GetAll',
         headers: {
                 'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
         },

         }



 ).then  (res=>
     {
         console.log(res.data);
         setMasCategories(res.data);
         setF(1);
        
     });


     axios (

         {
         method:'get',
         url:'https://localhost:7271/api/Room/GetRooms',
         headers: {
                 'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
         },

         }



 ).then  (res=>
     {
         console.log(res.data);
         setAllrooms(res.data);
         setRooms(res.data);
         setF(1);
         
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
 


    //deleteCategory

    function deletecategory(id)
{
   
  var bodyFormData = new FormData();
  bodyFormData.append('id', id);
              axios (

                {
                method:'post',
                url:'https://localhost:7271/api/Category/Delete',
                data:bodyFormData,
                headers: {
                  'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
                        'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
                },
               
                }



            ).then  (res=>
            {
              alert(res.data.value);
              
               window.location.reload();
               
            });  

}

//showTable

function showTable(id)
{

  let Copy = [...findproducts];

  for (const iterator of allrooms) 
  {
  let name=iterator['category'];
  
    if(name==id)
    {
       
      Copy.push(iterator);
      
    }
  }
  setRooms(Copy);

}

//getSearch

function getSearch()
{
     
          let Copy = [...findproducts];

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

//addCategory 

function addCategory()
{
    
    var bodyFormData = new FormData();
  bodyFormData.append('categoryName', addCatName);
  bodyFormData.append('bedTypes', addCatBed);
              axios (

                {
                method:'post',
                url:`https://localhost:7271/api/Category/AddCategory`,
                data:bodyFormData,
                headers: {
                  'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
                        'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
                },
               
                }



            ).then  (res=>
            {
              alert("Category added successfull")
                console.log(res.data);
               window.location.reload();
               
            });  



}

//updateCategory

function updateCategory()
{
    
    var bodyFormData = new FormData();
  bodyFormData.append('id', UpdateCatId);
  bodyFormData.append('categoryName', UpdateCatName);
  bodyFormData.append('bedTypes', UpdateCatBed);
              axios (

                {
                method:'post',
                url:`https://localhost:7271/api/Category/UpdateCategory`,
                data:bodyFormData,
                headers: {
                  'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
                        'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
                },
               
                }



            ).then  (res=>
            {
              alert("Category updated successfull")
               console.log(res.data.value);
               window.location.reload();
               
            });  



}

//update btn
 function updateBtn(id,name,bed)
 {
  setUpdateCatId(id);
  setUpdateCatName(name);
  setUpdateCatBed(bed);
  setUpdateCategoryHide("");

 }

    //deleteRoom
    function deleteRoom()
{
   
  // var bodyFormData = new FormData();
  // bodyFormData.append('id', id);
  //             axios (

  //               {
  //               method:'post',
  //               url:'https://localhost:7271/api/Category/Delete',
  //               data:bodyFormData,
  //               headers: {
  //                 'Accept': 'text/plain', 'Content-Type': 'multipart/form-data',
  //                       'Authorization':'Bearer '+ window.sessionStorage.getItem("AccessToken")
  //               },
               
  //               }



  //           ).then  (res=>
  //           {
  //             alert(res.data.value);
              
  //              window.location.reload();
               
  //           });  

}

function deleteRoombtn(id)
{

}
 function updateRoomBtn(id)
 {

 }


    return (
        <div>






<h1 style={{marginLeft: 30}}>DASHBOARD OF CATEGORY & ROOMS</h1>

<MDBTable>
<Button   variant='dark' onClick={(()=>setAddCategoryHide(""))}>
                           + Add new category
                        </Button>
                       
                     
         
      <MDBTableHead dark>
      <tr>
        <th scope='col'></th>
          <th scope='col'>#</th>
          <th scope='col'>Category Name</th>
          <th scope='col'> Bed Types</th>
          <th scope='col'>Actions</th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >
       {
        masCategories.map((x)=> <CategoryTableItem id={x.id} show={showTable} unic={x.id} name ={x.name} bed={x.bedTypes} delete={deletecategory} updateBtn={updateBtn}></CategoryTableItem>)
       }
   <tr hidden={addCategoryHide} >
                 <th  scope='row' ></th>
          
            <td ></td>
            <td > <MDBInput onChange={((e)=>setAddCatName(e.target.value))} type='text'/> </td>
            <td > <MDBInput onChange={((e)=>setAddCatBed(e.target.value))} type='text'/> </td>
            <td > <Button   onClick={addCategory}  variant='dark'> Confirm to database</Button> </td>
          </tr>

          <tr hidden={updateCategoryHide} >
                 <th  scope='row' ></th>
          
           <td > <MDBInput disabled value={UpdateCatId} type='text'/> </td>
            <td > <MDBInput onChange={((e)=>setUpdateCatName(e.target.value))} value={UpdateCatName} type='text'/> </td>
            <td > <MDBInput onChange={((e)=>setUpdateCatBed(e.target.value))} value={UpdateCatBed} type='text'/> </td>
            <td > <Button   onClick={updateCategory}  variant='dark'> Confirm to database</Button> </td>
          </tr>
      </MDBTableBody>
    </MDBTable>
    <h1 style={{marginLeft: 530}}>ROOMS TABLE</h1>
    <Form  className="d-flex small">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setInputSearch(e.target.value)}
            />
            <Button onClick={getSearch} variant="outline-success">Search</Button>
          </Form>



          <Button   variant='dark' onClick={(()=>setAddRoomHide(""))}>
                           + Add new room
                        </Button>
          <MDBTable>

                       
                     
         
      <MDBTableHead dark>
      <tr>
        <th scope='col'></th>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'> Picture1</th>
          <th scope='col'> Picture2</th>
          <th scope='col'> Picture3</th>
          <th scope='col'> Category</th>
          <th scope='col'> Capacity</th>
          <th scope='col'> Status</th>
          <th scope='col'> Description</th>
          <th scope='col'> Side</th>
          <th scope='col'> Views</th>
          <th scope='col'> Size</th>
          <th scope='col'> Notice</th>
          <th scope='col'> Price</th>

          <th scope='col'>Actions</th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >
      <tr hidden={addRoomHide} >
                 <th  scope='row' ></th>
          
            <td ></td>
            <td > <MDBInput onChange={((e)=>setAddRoomName(e.target.value))} type='text'/> </td>
            <td > <MDBInput onChange={((e)=>setAddRoomPic1(e.target.value))} type='text'/> </td>
            <td > <MDBInput onChange={((e)=>setAddRoomPic2(e.target.value))} type='text'/> </td>
            <td > <MDBInput onChange={((e)=>setAddRoomPic3(e.target.value))} type='text'/> </td>
            <td > <MDBInputGroup className='mb-3' >
      <div className="mb-6 pb-2">
                <select className="select p-2 rounded bg-grey" style={{ width: "100%" }} onChange={(e)=>setAddRoomCategory(e.target.value)}>
                <option value={0}></option>
                      {
                      masCategories.map((x) => 
                        <option  value={x.id}>
                        {x.name}
                        </option>
                     )}
                  
                </select>
                </div>
      </MDBInputGroup>
           </td>
           <td > <MDBInput onChange={((e)=>setAddRoomCapacity(e.target.value))} type='text'/> </td>
           <td></td>
           <td > <MDBInput onChange={((e)=>setAddRoomDescription(e.target.value))} type='text'/> </td>
           <td >  <MDBInputGroup className='mb-3' >
      <div className="mb-6 pb-2">
                <select className="select p-2 rounded bg-grey" style={{ width: "100%" }} onChange={(e)=>setAddRoomSide(e.target.value)}>
                <option value={0}>Choose side</option>
                      {
                      sides.map((x) => 
                        <option  value={x.id}>
                        {x.name}
                        </option>
                     )}
                  
                </select>
                </div>
      </MDBInputGroup>
           
          </td>
          <td></td>
          <td > <MDBInput onChange={((e)=>setAddRoomSize(e.target.value))} type='text'/> </td>
       
          <td > <MDBInput onChange={((e)=>setAddRoomNotice(e.target.value))} type='text'/> </td>
          <td > <MDBInput onChange={((e)=>setAddRoomPrice(e.target.value))} type='number' min='0' onkeyup="this.value  = this.value.replace(/[^0-9]/gi, '');"/> </td>

            <td > <Button   onClick={addCategory}  variant='dark'> Confirm to database</Button> </td>
          </tr>

       {
        rooms.map((x)=> <RoomTableItem   unic={x.id} name ={x.name} pic1={x.picture1} pic2={x.picture2} pic3={x.picture3} category={x.category} capacity={x.capacity} status={x.status} description={x.description} side={x.side} views={x.views} size={x.size} notice={x.notice} price={x.price}  delete={deleteRoombtn} updateBtn={updateRoomBtn}></RoomTableItem>)
       }


          <tr hidden={updateCategoryHide} >
                 <th  scope='row' ></th>
          
           <td > <MDBInput disabled value={UpdateCatId} type='text'/> </td>
            <td > <MDBInput onChange={((e)=>setUpdateCatName(e.target.value))} value={UpdateCatName} type='text'/> </td>
            <td > <MDBInput onChange={((e)=>setUpdateCatBed(e.target.value))} value={UpdateCatBed} type='text'/> </td>
            <td > <Button   onClick={updateCategory}  variant='dark'> Confirm to database</Button> </td>
          </tr>
      </MDBTableBody>
    </MDBTable>

  



            </div>
    )
}