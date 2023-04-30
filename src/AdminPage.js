import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import React from 'react';
import CategoryTableItem from './CategoryTableItem';
//import ProductTableItem from './ProductTableItem';
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


    return (
        <div>






<h1 style={{marginLeft: 30}}>DASHBOARD OF CATEGORY & PRODUCTS</h1>

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
        </tr>
      </MDBTableHead>
      <MDBTableBody >
       {
        masCategories.map((x)=> <CategoryTableItem id={x.id} show={showTable} unic={x.id} name ={x.name} bed={x.bedTypes} delete={deletecategory}></CategoryTableItem>)
       }
   <tr hidden={addCategoryHide} >
                 <th  scope='row' ></th>
          
            <td ></td>
            <td > <MDBInput onChange={((e)=>setAddCatName(e.target.value))} type='text'/> </td>
            <td > <MDBInput onChange={((e)=>setAddCatBed(e.target.value))} type='text'/> </td>
            <td > <Button   onClick={addCategory}  variant='dark'> Confirm to database</Button> </td>
          </tr>
      </MDBTableBody>
    </MDBTable>
    <h1 style={{marginLeft: 530}}>PRODUCT TABLE</h1>
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


  



            </div>
    )
}