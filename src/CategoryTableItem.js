import { MDBTable,MDBBtn, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
  import { Component } from "react";

  class CategoryTableItem extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <tr  >
                 <th  scope='row'></th>
            <th onClick={() => this.props.show(this.props.unic)} scope='row'>{this.props.unic}</th>
            <td onClick={() => this.props.show(this.props.unic)}>{this.props.name}</td>
            <td onClick={() => this.props.show(this.props.unic)}> {this.props.bed} </td>
             <td onClick={() => this.props.delete(this.props.unic)}> <MDBBtn   color='dark'>
                            Remove category
                        </MDBBtn>
                        </td>
          </tr>
        );
    }
}

export default CategoryTableItem;