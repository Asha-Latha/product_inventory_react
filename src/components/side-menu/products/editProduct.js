import React from 'react';
import axios from 'axios';
import '../../side-menu/products/addproducts.css'
import {Link} from 'react-router-dom'
import Logout from '../../logout/logout';
class EditProduct extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.location.state);
        this.state={
            id:0,
            productimage:'',
            description:'',
            productName:'',
            category:'',
            quantity:'',
            in_stock:'',
            price:'',
            dropdownCategory:[]
       }
    }

    componentWillMount(){
        if(this.props.location.state !== undefined){
            axios.get('http://localhost:3000/addproduct/'+this.props.location.state.myid)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        id: response.data.id,
                        productimage:response.data.productimage,
                        description:response.data.description,
                        productName:response.data.productName,
                        category: response.data.category,
                        quantity : response.data.quantity,
                        in_stock: response.data.in_stock,
                        price:response.data.price 
                    })
                }, error=>{
                    console.error(error);
                })
        }

        axios.get('http://localhost:3000/addcategory')
        .then((response)=>{
             this.setState({dropdownCategory: response.data})
             console.log(response)},(error)=>{
             console.log(error)    
        })
    }


    getDescription=(event)=>{
        
        this.setState({description: event.target.value})
    }

    getCategory=(event)=>{
        this.setState({category: event.target.value})
    }

    getProductName=(event)=>{
        this.setState({productName:event.target.value})
    }

    getQuantity=(event)=>{
        this.setState({quantity: event.target.value})
    }

    getPrice=(event)=>{
        this.setState({price:event.target.value})
    }

    getStock=(event)=>{
        this.setState({in_stock:event.target.value})
    }

    getImage=(event)=>{
        console.log(event.target.value.substr(12));
        this.setState({productimage: event.target.value.substr(12)})
    }

    editProduct=()=>{
        console.log('Edit friend via axios and put')
        let editProducts = {
            "productimage":this.state.productimage,
            "description": this.state.description,
            "productName":this.state.productName,
            "category": this.state.category,
            "quantity": this.state.quantity,
            "in_stock":this.state.in_stock,
            "price":this.state.price

        }
        axios.put('http://localhost:3000/addproduct/'+this.state.id, editProducts)
                .then(response=>{
                    this.props.history.push('/side-menu')
                    console.log(response);
                }, error=>{
                    console.error(error);
                })
    }
    render() { 
        if(this.props.location.state === undefined){
        return ( 
<div>
                    <h1>Pl. go to from home page!!!! </h1>
                </div>

         )
        }
    

    return(
        <div><Logout></Logout>
<div>
<div>
 <Link to="/side-menu"><button>Go Back</button></Link>
</div>
<form>
<h3>Edit Product!!!!</h3>
        <label for="r1" id="fn">Product ID :</label>
<input type="text" name="fname" id="id" value={this.state.id} readOnly></input><br></br>

<label>Product Image: </label>
<input type="file" onChange={this.getImage} multiple accept='image/*' />
<br></br>
 
 
<label  for="r2" id="ln">Description  :</label>
<input type="text" name="lname" id="description" value={this.state.description} onChange={this.getDescription}></input><br></br>


<label  for="r2" id="ln">Product Name  :</label>
<input type="text" name="lname" id="productName" value={this.state.productName} onChange={this.getProductName}></input><br></br>
 
<label  for="r3" id="un"> Select Category:</label>
<select id="pd" onChange={this.getCategory}>
            {this.state.dropdownCategory.map(p=><option value={p.categoryName}>{p.categoryName}</option>)}
</select><br></br>
 
<label  for="r4" id="pwd">Quantity :</label>
<input type="text" name="pass" id="quantity" value={this.state.quantity} onChange={this.getQuantity}></input><br></br>
 
<label  for="r5" id="em">In-Stock :</label>
<input type="text" name="email" id="in_stock" value={this.state.in_stock} onChange={this.getStock}></input><br></br>
 
<label  for="r6" id="mn">Price :</label>
<input type="text" name="mno" id="price" value={this.state.price} onChange={this.getPrice}></input><br></br>

                    <button type="button" onClick={this.editProduct}>Edit Product</button>
                    <br></br> 

</form>
</div>
</div>
    
    );
}}
 
export default EditProduct;