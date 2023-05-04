import { MDBTable,MDBBtn, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
  import { Component } from "react";
import { Button } from 'react-bootstrap';

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
             <td onClick={() => this.props.delete(this.props.unic)}> <Button   variant='dark'>
                            Remove category
                        </Button>
                        </td>
                        <td onClick={() => this.props.updateBtn(this.props.unic,this.props.name,this.props.bed)}> <Button  variant='dark'>
                            Update category
                        </Button>
                        </td>
          </tr>
        );
    }
}

export default CategoryTableItem;