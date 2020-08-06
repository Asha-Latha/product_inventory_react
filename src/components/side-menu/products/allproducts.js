import React from 'react';
import {Link} from 'react-router-dom';
import '../../side-menu/products/addproducts.css';
import ShowProducts from './showProducts';
import axios from 'axios';
class AllProducts extends React.Component {
    constructor(props){
      super(props);
      this.state={
        deleteSuccess:false,
            myid:0,
      allproducts:[]
      }
    }

    intializeState=()=>{
      setTimeout(()=>{
          this.setState({deleteSuccess: false})
      }, 2000)
  }
    componentWillMount(){
      this.getProducts()
  }

  getProducts(){
      axios.get('http://localhost:3000/addproduct')
      .then((response)=>{
         
           this.setState({allproducts: response.data})
          console.log(response)},(error)=>{
              console.log(error)
          
      })
  }

  editProductWithId=(id)=>{
    console.log('edit product for received id: ' + id);

    this.setState({myid: id})
        console.log('Edit friend with id: ' + id);
        this.props.history.push({
                                    pathname: '/editfriend', 
                                    state: {myid: id}
                                })
    

  }

  deleteProductWithId=(id)=>{
    console.log('delete product for received id: ' + id);
    axios.delete('http://localhost:3000/addproduct/' + id)
            .then(response=>{
                 console.log(response)
                 //show deleteSuccess message
                 this.setState({deleteSuccess: true})
                 this.getProducts()
                 //remove deleteSuccess message after 2000 millisecond
                 this.intializeState()
            }, error=>{
                console.error(error)
            })
}


    renderProducts=()=>{
      console.log('in render products')
      return (
          this.state.allproducts.map(showProducts=>{
              return (
                  <ShowProducts 
                  
                  id = {showProducts.id}
                  description = {showProducts.description}
                  category = {showProducts.category}
                  quantity ={showProducts.quantity}
                  in_stock = {showProducts.in_stock}
                  price={showProducts.price}
                   editId={this.editProductWithId}
                deleteId={this.deleteProductWithId}>

                  </ShowProducts>
              )
          })
      )
}
    render() { 
        return ( 
            <div>
                {/* <h2>All Products</h2> */}
                <div id="add-product">

<button type="submit" value="add"  id="submit" > <Link to="/addProduct">Product +</Link></button>
<button type="submit" value="addcategory"  id="submit" > <Link to="/addCategory">Category +</Link></button>
</div >
<div id="drop-down">
    <label for="view" id="labelview">View :</label>
    <select name="view" id="view" >
      <option value="active">Active</option>
      <option value="inactive">In-Active</option>
      
    </select>
</div>

<div id = "search">
    <label id="labelsearch">Search Product: </label>
    <input type="text" name="search" id="forSearch"></input> 
</div>




<div id="product-details"><table id="table">
  <thead>
    <tr>
      <th>Product ID</th>
      <th>Description</th> 
      <th>Product Category</th>
      <th>Quantity</th>
      <th>In-Stock</th> 
      <th>Price</th>
      <th>Edit</th> 
      <th>Delete</th>
    </tr></thead>
    <tbody>
        
        {this.renderProducts()} 
        </tbody>
  </table>
  {this.state.deleteSuccess &&
                    <div>
                          <h3>Product deleted !!!!</h3>  
                    </div>}
</div>
            </div>
         );
        }   
}
 
export default AllProducts;