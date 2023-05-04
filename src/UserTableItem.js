import { MDBTable,MDBBtn, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
  import { Component } from "react";

  class UserTableItem extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <tr  >
                 <th  scope='row'></th>
            <th onClick={() => this.props.show(this.props.unic)}  scope='row'>{this.props.unic}</th>
            <td onClick={() => this.props.show(this.props.unic)} >{this.props.name}</td>
            <td >{this.props.email}</td>
            <td onClick={() => this.props.remove(this.props.unic)}>
                 <MDBBtn    color='dark'> Delete </MDBBtn>
             </td>
             <td onClick={() => this.props.update(this.props.unic)}>
                 <MDBBtn   color='dark'> Update </MDBBtn>
             </td>
          </tr>
        );
    }
}

export default UserTableItem;