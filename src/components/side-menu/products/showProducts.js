import React from 'react';
import {withRouter} from 'react-router-dom';
import '../../side-menu/products/addproducts.css';
 class ShowProducts extends React.Component {
   
    constructor(props){
        super(props);
        this.state={
        myid:0}
    }

    editCurrentProduct=()=>{       
         console.log("edit friend with id: " + this.props.id);
         this.props.editId(this.props.id)
    }
    deleteCurrentProduct=()=>{
        console.log("delete product with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }
    render() {
        let imgStyle ={
            width:'100%',
            borderRadius:'10px'
        } 
        return ( 
            <div className="column">
            <div className="card">
            <img src={"images/" + this.props.productimage} style={imgStyle}></img>
            <h3>{this.props.productName}</h3>
            <p>Category: {this.props.category}</p>
            <p>Description: {this.props.description}</p>
            <p>Quantity : {this.props.quantity}</p>
            <p>Price:{this.props.price} </p>
            <p>In-Stock:{this.props.in_stock}</p>
            <p><button onClick={this.editCurrentProduct}>Edit</button>
              <button onClick={this.deleteCurrentProduct}>Delete</button></p>
                </div>
                </div>
       
         );
    }
}
 
export default ShowProducts;