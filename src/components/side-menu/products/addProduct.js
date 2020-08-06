import React from 'react';
import axios from 'axios';

import './addproducts.css'

class AddProduct extends React.Component {
    
    constructor(props){
     super(props);

     this.state={
         "id":"",
         "description":"",
         "category":"",
         "quantity":"",
         "stock":"",
         "price":""
     }
    }
    getId=(e)=>{
        this.setState({id: e.target.value})
      }

  getDescription=(e)=>{
    this.setState({description: e.target.value})
  }
  getCategory=(e)=>{
    this.setState({category: e.target.value}) 
  }

  getQuantity=(e)=>{
    this.setState({quantity: e.target.value}) 
  }

  getStock=(e)=>{
    this.setState({stock: e.target.value}) 
  }
getPrice=(e)=>{
    this.setState({price: e.target.value}) 
}

addProduct=(e)=>{
    console.log('add product')
    let addProducts = {
        "id": this.state.id,
        "description": this.state.description,
        "category":this.state.category,
        "quantity":this.state.quantity,
        "in_stock":this.state.stock,
        "price":this.state.price
    }

    axios.post('http://localhost:3000/addproduct', addProducts)
    .then(response=>{
        console.log(response);
        // this.props.history.push('/')
    }, error=>{
        console.error(error);
    })
}
    render() { 
        return (             
    <div id="productadd">
    <h2>Add Product</h2>
<form name="regi" action="">

<label for="r1" id="fn">Product ID :</label>
<input type="text" name="fname" id="id" onChange={this.getId}></input><br></br>
 
 
<label  for="r2" id="ln">Description  :</label>
<input type="text" name="lname" id="description" onChange={this.getDescription}></input><br></br>
 
<label  for="r3" id="un"> Select Category:</label>
<input type="text" name="uname" id="category" onChange={this.getCategory}></input><br></br>
 
<label  for="r4" id="pwd">Quantity :</label>
<input type="text" name="pass" id="quantity" onChange={this.getQuantity}></input><br></br>
 
<label  for="r5" id="em">In-Stock :</label>
<input type="text" name="email" id="in_stock" onChange={this.getStock}></input><br></br>
 
<label  for="r6" id="mn">Price :</label>
<input type="text" name="mno" id="price" onChange={this.getPrice}></input><br></br>
<button type="submit" value="Submit" id="button" onClick={this.addProduct}>Add Product</button>
</form>
</div>
         );
    }
}
 
export default AddProduct;
