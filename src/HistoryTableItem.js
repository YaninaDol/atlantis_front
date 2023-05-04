import { MDBTable,MDBBtn, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
  import { Component } from "react";
import { Button } from 'react-bootstrap';

  class HistoryTableItem extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <tr  >
                 <th  scope='row'></th>
            <th  scope='row'>{this.props.unic}</th>
            <td >{this.props.datefirst}</td>
            <td >{this.props.datelast}</td>
            <td >{this.props.roomId}</td>
            <td >{this.props.totalDays}</td>
            <td >{this.props.userId}</td>
            <td >{this.props.phoneNumber}</td>
            <td >{this.props.status}</td>
            <td >{this.props.notes}</td>
            <td >{this.props.name}</td>
            <td >{this.props.surname}</td> 

            <td onClick={() => this.props.paidstatus(this.props.unic)}> <Button   variant='dark'>
                            Paid
                        </Button>
                        </td>
            <td onClick={() => this.props.closestatus(this.props.unic)}> <Button   variant='dark'>
                            Close
                        </Button>
                        </td>
          </tr>
        );
    }
}

export default HistoryTableItem;