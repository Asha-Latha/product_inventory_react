import React from 'react';
import axios from 'axios';
import '../../side-menu/products/addproduct.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Logout from '../../logout/logout';

const regexp = new RegExp(`^-?[0-9]*$`);
class AddProduct extends React.Component {
    constructor(props){
     super(props);
     this.state={
         description:'',
         productName:'',
         category:'',
         quantity:'',
         stock:'',
         price:'',
         productimage:'',
         buttonStatus:true,
         dropdownCategory:[],
         descriptionError:'',
         productNameError:'',
         buttonStatus:true
     }
    }

    checkValidateDescription=()=>{
        if(this.state.description<1){
            this.setState({
                descriptionError:'Enter Description',
                buttonStatus:true
            })
        }
        else{
            this.setState({
                descriptionError:'',
                buttonStatus:false
            })
        }
    }
    checkValidateProductName=()=>{
        if(this.state.productName<1){
            this.setState({
                descriptionError:'Enter Product',
                buttonStatus:true
            })
        }
        else{
            this.setState({
                descriptionError:'',
                buttonStatus:false
            })
        }
    }
    checkValidateProductId=()=>{
       if(!regexp.test(this.state.id)){
           this.setState({
               productIdError:'Enter valid id',
               buttonStatus:true
           })
       }
       else{
              this.setState({
                  productIdError:'',
                  buttonStatus:false
              })
       }


    }
     componentWillMount(){
        axios.get('http://localhost:3000/addcategory')
    .then((response)=>{
         this.setState({dropdownCategory: response.data})
         console.log(response)},(error)=>{
         console.log(error)    
    })
    }

  getDescription=(e)=>{
      this.checkValidateDescription()
    this.setState({description: e.target.value})
    this.checkValidateDescription()
  }
  getProductName=(e)=>{
      this.checkValidateProductName()
    this.setState({productName:e.target.value})
    this.checkValidateProductName()
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

getImage=(event)=>{
    console.log(event.target.value.substr(12));
    this.setState({productimage: event.target.value.substr(12)})
}
addProduct=(e)=>{
    console.log('add product')
    let addProducts = {
        "productimage":this.state.productimage,
        "description": this.state.description,
        "productName":this.state.productName,
        "category":this.state.category,
        "quantity":this.state.quantity,
        "in_stock":this.state.stock,
        "price":this.state.price
    }
    axios.post('http://localhost:3000/addproduct', addProducts)
    .then(response=>{   
        console.log("product added");
        console.log(response);
        this.props.history.push("/side-menu");
    }, error=>{
        console.error(error);
    })
}
    render() {    
        return ( 
            <div><Logout></Logout>           
    <div id="productadd">
<div id="linkbutton">
 <Link to="/side-menu"><button id="gobtn">Go Back</button></Link>
</div>

    <h2>Add Product</h2>
<form name="regi" action="">

<label id="pdimg">Product Image: </label>&nbsp;
<input type="file" onChange={this.getImage} multiple accept='image/*' />
<br></br><br></br>

<label  for="r2" id="ln">Description  </label>&nbsp;&nbsp;
<input type="text" name="lname" id="description" onChange={this.getDescription}></input><br></br>
<p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.descriptionError}</p> 


<label  for="r7" id="pn">Product Name  </label>
<input type="text" name="lname" id="productName" onChange={this.getProductName}></input><br></br>
<p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.productNameError}</p> 

 
<label  for="r3" id="cat"> Category:</label>
<select id="pds" onChange={this.getCategory} >
   
               {this.state.dropdownCategory.map(p=><option value={p.categoryName}>{p.categoryName}</option>)}
</select><br></br><br></br>

<label  for="r4" id="pwd">Quantity </label>&nbsp;&nbsp;&nbsp;&nbsp;
<input type="number" name="pass" id="quantity" min="0" onChange={this.getQuantity}></input><br></br>
<p style={{color:"red",fontSize:12,fontFamily:"italic"}}></p> 

 
<label  for="r5" id="em">In-Stock </label>
<input type="number" name="email" id="in_stock" min="0" onChange={this.getStock}></input><br></br>
<p style={{color:"red",fontSize:12,fontFamily:"italic"}}></p> 

 
<label  for="r6" id="mn">Price </label>&nbsp;
<input type="number" name="mno" id="price" min="0" onChange={this.getPrice}></input><br></br>
<p style={{color:"red",fontSize:12,fontFamily:"italic"}}></p> 

</form>
<button type="submit" value="Submit" id="subbutton" onClick={this.addProduct} disabled={this.state.buttonStatus}>Add Product</button>

</div></div> 
 )}
}
 
export default AddProduct;
