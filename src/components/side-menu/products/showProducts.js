import React from 'react';
class ShowProducts extends React.Component {
   
    constructor(props){
        super(props)

    }
    deleteCurrentProduct=()=>{
        console.log("delete product with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }
    render() { 
        return ( 

            <tr>
            <td>{this.props.id}</td>
            <td>{this.props.description}</td>
            <td>{this.props.category}</td>
            <td>{this.props.quantity}</td>
            <td>{this.props.in_stock}</td> 
            <td>{this.props.price}</td>
            <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteCurrentProduct}>Delete</button>
                </td>

            </tr>
       
         );
    }
}
 
export default ShowProducts;