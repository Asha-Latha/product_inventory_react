import React from 'react';
import { Link } from 'react-router-dom';
import '../../side-menu/products/addproducts.css';
import ShowProducts from './showProducts';
import { withRouter } from "react-router-dom";

import axios from 'axios';
import Logout from '../../logout/logout';
import Header from '../../header/header';
export class AllProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteSuccess: false,
      searchV: '',
      dropdownvalue: '',
      myid: 0,
      allproducts: [],
      finalSearchValue: [],
      dropdownCategory: []
    }

  }

  intializeState = () => {
    setTimeout(() => {
      this.setState({ deleteSuccess: false })
    }, 2000)
  }


  componentWillMount() {
    axios.get('http://localhost:3000/addcategory')
      .then((response) => {
        this.setState({ dropdownCategory: response.data })
        console.log(response)
      }, (error) => {
        console.log(error)
      })
    this.getProducts()
  }

  getProducts() {
    axios.get('http://localhost:3000/addproduct')
      .then((response) => {
        this.setState({ allproducts: response.data })
        this.setState({ finalSearchValue: response.data })
        console.log(response)
      }, (error) => {
        console.log(error)
      })
  }

  editProductWithId = (id) => {
    console.log('edit product for received id: ' + id);
    this.setState({ myid: id })
    console.log('Edit product with id: ' + id);
    this.props.history.push({
      pathname: '/editProduct',
      state: { myid: id }
    })


  }

  deleteProductWithId = (id) => {
    console.log('delete product for received id: ' + id);
    axios.delete('http://localhost:3000/addproduct/' + id)
      .then(response => {
        console.log(response)
        this.setState({ deleteSuccess: true })
        this.getProducts()
        this.intializeState()
      }, error => {
        console.error(error)
      })
  }

  getSearch = (e) => {
    let searchvalue = e.target.value.toLowerCase();
    if (searchvalue === '') {
      // this.getProducts()
    }

    this.setState({ searchV: searchvalue })
    console.log(searchvalue);
    let searchProducts = this.state.finalSearchValue.filter(f => {
      return f.productName.toLowerCase().match(searchvalue.toLowerCase())
    })
    this.setState({
      allproducts: searchProducts
    })
  }

  getCategory = (e) => {
    let dp = e.target.value;
    this.setState({ dropdownvalue: dp })
    let dpvalues = this.state.finalSearchValue.filter(f => {
      return f.category.match(dp)
    })
    if (dp === 'select') {
      return this.state.allproducts;
    }
    this.setState({
      allproducts: dpvalues
    })
  }

  renderProducts = () => {
    console.log('in render products')
    return (
      this.state.allproducts.map(showProducts => {
        return (
          <ShowProducts
            id={showProducts.id}
            productimage={showProducts.productimage}
            description={showProducts.description}
            productName={showProducts.productName}
            category={showProducts.category}
            quantity={showProducts.quantity}
            in_stock={showProducts.in_stock}
            price={showProducts.price}
            editId={this.editProductWithId}
            deleteId={this.deleteProductWithId}>
          </ShowProducts>
        )
      })
    )
  }
  render() {
    let linkstyle = {
      textDecoration: 'none',
      color: 'white'
    }
    return (

      <div><Header></Header>
        <div>
          <div id="add-product">
            <div class="topnav">
              <Link to="/addProduct" >Product +</Link>
              <Link to="/addCategory">Category+</Link>
              <Link to="/stockdetails">Dashboard</Link>
              <Link to="/offers">Offers</Link>
            </div>
          </div ><br></br>
          <div id="drop-down">
            <br></br>
 Filter Category:&nbsp;
<select id="pdf" onChange={this.getCategory} >
              <option value="select">Select</option>

              {this.state.dropdownCategory.map(p => <option value={p.categoryName}>{p.categoryName}</option>)}
            </select></div>
          <div >
            Search Product:
    <input type="text" name="search" id="forSearch" value={this.state.searchV} onChange={this.getSearch}></input>
          </div>
          <br></br>
          <div className="row">
            {this.renderProducts()}
          </div></div>
      </div>
    );
  }
}

export default withRouter(AllProducts);