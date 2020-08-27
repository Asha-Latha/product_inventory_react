import React from 'react';
import axios from 'axios';
import '../../side-menu/products/addproduct.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Logout from '../../logout/logout';

const regexp = new RegExp(`^-?[0-9]*$`);
class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      productName: '',
      category: '',
      quantity: '',
      stock: '',
      price: '',
      productimage: '',
      dropdownCategory: [],
      errors: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validate = (description, productName, quantity, stock, price) => {
    const errors = [];
    if (description.length < 5) {
      errors.push("Description should be at least 5 charcters long");
    }
    if (productName.length < 5) {
      errors.push("product name should be at least 5 charcters long");
    }

    if (quantity.length < 1) {
      errors.push("Select Quantity");
    }
    if (stock.length < 1) {
      errors.push("Select stock")
    }
    if (price.length < 1) {
      errors.push("Select price")
    }

    return errors;
  }

  componentWillMount() {
    axios.get('http://localhost:3000/addcategory')
      .then((response) => {
        this.setState({ dropdownCategory: response.data })
        console.log(response)
      }, (error) => {
        console.log(error)
      })
  }

  getDescription = (e) => {

    this.setState({ description: e.target.value })

  }
  getProductName = (e) => {

    this.setState({ productName: e.target.value })

  }

  getCategory = (e) => {
    this.setState({ category: e.target.value })
  }

  getQuantity = (e) => {
    this.setState({ quantity: e.target.value })
  }

  getStock = (e) => {
    this.setState({ stock: e.target.value })
  }
  getPrice = (e) => {
    this.setState({ price: e.target.value })
  }


  handleSubmit(e) {
    console.log("Inside add product handle submit functin")
    e.preventDefault();
    const { description, productName, quantity, stock, price } = this.state;
    const errors = this.validate(description, productName, quantity, stock, price);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    this.addProduct()
  }


  getImage = (event) => {
    console.log(event.target.value.substr(12));
    this.setState({ productimage: event.target.value.substr(12) })
  }
  addProduct = (e) => {
    console.log('add product')
    let addProducts = {
      "productimage": this.state.productimage,
      "description": this.state.description,
      "productName": this.state.productName,
      "category": this.state.category,
      "quantity": this.state.quantity,
      "in_stock": this.state.stock,
      "price": this.state.price
    }
    axios.post('http://localhost:3000/addproduct', addProducts)
      .then(response => {
        console.log("product added");
        console.log(response);
        this.props.history.push("/side-menu");
      }, error => {
        console.error(error);
      })
  }
  render() {
    const { errors } = this.state;
    return (
      <div><Logout></Logout>
        <div id="errorinfo">    {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}</div>

        <div id="productadd">

          <form name="regi" onSubmit={this.handleSubmit}>
            <fieldset id="fieldset">
              <legend id="legend">Add Product</legend>

              <label>Upload Image </label>
              <input type="file" onChange={this.getImage} multiple accept='image/*' required="required" />
              <br></br>

              <label>Description  </label>
              <input type="text" name="lname" id="description" onChange={this.getDescription}></input><br></br>


              <label>Product Name  </label>
              <input type="text" name="lname" id="productName" placeholder="productName" onChange={this.getProductName}></input><br></br>

              <label> Category</label>
              <select id="pd" onChange={this.getCategory} >

                {this.state.dropdownCategory.map(p => <option value={p.categoryName}>{p.categoryName}</option>)}
              </select><br></br>

              <label>Quantity </label>
              <input type="number" name="pass" id="quantity" min="0" onChange={this.getQuantity}></input><br></br>



              <label>In-Stock </label>
              <input type="number" name="email" id="in_stock" min="0" onChange={this.getStock}></input><br></br>



              <label>Price </label>
              <input type="number" name="mno" id="price" min="0" onChange={this.getPrice}></input><br></br>


              <button type="submit" value="Submit" id="subbutton">Add Product</button></fieldset>
          </form>
        </div></div>
    )
  }
}

export default AddProduct;
