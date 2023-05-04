import { MDBTable,MDBBtn, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
  import { Component } from "react";
import { Button } from 'react-bootstrap';

  class RoomTableItem extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <tr  >
                 <th  scope='row'></th>
            <th scope='row'>{this.props.unic}</th>
            <td >{this.props.name}</td>
            <td ><img src={this.props.pic1} width={100} height={50} alt="..."/></td>
            <td ><img src={this.props.pic2} width={100} height={50} alt="..."/></td>
            <td ><img src={this.props.pic3} width={100} height={50} alt="..."/></td>
            <td > {this.props.category} </td>
            <td > {this.props.capacity} </td>
            <td > {this.props.description} </td>
            <td > {this.props.side} </td>
            <td > {this.props.views} </td>
            <td > {this.props.size} </td>
            <td > {this.props.notice} </td>
            <td > {this.props.price} </td>


             <td onClick={() => this.props.delete(this.props.unic)}>
             <Button   variant='dark'> Remove item</Button> </td>
              <td onClick={() => this.props.updateBtn(this.props.unic,this.props.name,this.props.pic1,this.props.pic2,this.props.pic3,this.props.capacity,this.props.description,this.props.size,this.props.notice,this.props.price,this.props.category,this.props.side)}>
             <Button  variant='dark'>Update item </Button> </td>
          </tr>
        );
    }
}

export default RoomTableItem;