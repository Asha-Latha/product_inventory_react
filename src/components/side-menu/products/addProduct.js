import React from 'react';
import axios from 'axios';
import './addproducts.css';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
const regexp = new RegExp(`^-?[0-9]*$`);
class AddProduct extends React.Component {
    constructor(props){
     super(props);
     this.state={
         id:'',
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
         productIdError:'',
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

    getId=(e)=>{
        this.checkValidateProductId()
        this.setState({id: e.target.value})
        this.checkValidateProductId()
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
        "id": this.state.id,
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
    <div id="productadd">
<div id="linkbutton">
 <Link to="/side-menu"><button>Go Back</button></Link>
</div>

    <h2>Add Product</h2>
<form name="regi" action="">

<label>Product Image: </label>
<input type="file" onChange={this.getImage} multiple accept='image/*' />
<br></br>

<label for="r1" id="fn">Product ID :</label>
<input type="number" name="fname" id="id" onChange={this.getId}></input><br></br>
<p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.productIdError}</p> 

<label  for="r2" id="ln">Description  :</label>
<input type="text" name="lname" id="description" onChange={this.getDescription}></input><br></br>
<p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.descriptionError}</p> 


<label  for="r7" id="pn">Product Name  :</label>
<input type="text" name="lname" id="productName" onChange={this.getProductName}></input><br></br>
<p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.productNameError}</p> 

 
<label  for="r3" id="un"> Select Category:</label>
<select id="pd" onChange={this.getCategory} >
   
               {this.state.dropdownCategory.map(p=><option value={p.categoryName}>{p.categoryName}</option>)}
</select>

<label  for="r4" id="pwd">Quantity :</label>
<input type="number" name="pass" id="quantity" onChange={this.getQuantity}></input><br></br>
 
<label  for="r5" id="em">In-Stock :</label>
<input type="number" name="email" id="in_stock" onChange={this.getStock}></input><br></br>
 
<label  for="r6" id="mn">Price :</label>
<input type="number" name="mno" id="price" onChange={this.getPrice}></input><br></br>
</form>
<button type="submit" value="Submit" id="button" onClick={this.addProduct} disabled={this.state.buttonStatus}>Add Product</button>

</div>
 )}
}
 
export default AddProduct;
