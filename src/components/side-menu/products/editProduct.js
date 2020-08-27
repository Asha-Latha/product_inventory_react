import React from 'react';
import axios from 'axios';
import '../../side-menu/products/addproducts.css'
import { Link } from 'react-router-dom'
import Logout from '../../logout/logout';
class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.location.state);
        this.state = {
            id: 0,
            productimage: '',
            description: '',
            productName: '',
            category: '',
            quantity: '',
            price: '',
            in_stock: '',
            dropdownCategory: [],
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate = (description, productName, quantity, in_stock, price) => {
        const errors = [];
        if (description.length < 5) {
            errors.push("Description should be at least 5 charcters long")
        }
        if (productName.length < 5) {
            errors.push("product name should be at least 5 charcters long")
        }
        if (quantity.length < 1) {
            errors.push("Enter quantity!!")
        }
        if (price.length < 1) {
            errors.push("Enter Price!!")
        }
        if (in_stock.length < 1) {
            errors.push("Enter stock!!")
        }
        //   if(price.length< 1){
        //       errors.push("Enter Price!!")
        //   }
        return errors;
    }


    componentWillMount() {
        if (this.props.location.state !== undefined) {
            axios.get('http://localhost:3000/addproduct/' + this.props.location.state.myid)
                .then(response => {
                    console.log(response);
                    this.setState({
                        id: response.data.id,
                        productimage: response.data.productimage,
                        description: response.data.description,
                        productName: response.data.productName,
                        category: response.data.category,
                        quantity: response.data.quantity,
                        in_stock: response.data.in_stock,
                        price: response.data.price
                    })
                }, error => {
                    console.error(error);
                })
        }

        axios.get('http://localhost:3000/addcategory')
            .then((response) => {
                this.setState({ dropdownCategory: response.data })
                console.log(response)
            }, (error) => {
                console.log(error)
            })
    }


    getDescription = (event) => {


        this.setState({ description: event.target.value })

    }

    getCategory = (event) => {
        this.setState({ category: event.target.value })
    }

    getProductName = (event) => {

        this.setState({ productName: event.target.value })

    }

    getQuantity = (event) => {

        this.setState({ quantity: event.target.value })

    }

    getPrice = (event) => {

        this.setState({ price: event.target.value })

    }

    getStock = (event) => {

        this.setState({ in_stock: event.target.value })

    }

    getImage = (event) => {
        console.log(event.target.value.substr(12));
        this.setState({ productimage: event.target.value.substr(12) })
    }

    handleSubmit = (e) => {
        console.log("Inside edit product handle submit function")
        e.preventDefault();
        const { description, productName, quantity, in_stock, price } = this.state;
        const errors = this.validate(description, productName, quantity, in_stock, price);
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
        this.editProduct()
    }

    editProduct = () => {
        console.log('Edit friend via axios and put')
        let editProducts = {
            "productimage": this.state.productimage,
            "description": this.state.description,
            "productName": this.state.productName,
            "category": this.state.category,
            "quantity": this.state.quantity,
            "in_stock": this.state.in_stock,
            "price": this.state.price

        }

        axios.put('http://localhost:3000/addproduct/' + this.state.id, editProducts)
            .then(response => {
                this.props.history.push('/side-menu')
                console.log(response);
            }, error => {
                console.error(error);
            })

    }

    render() {
        const { errors } = this.state;

        if (this.props.location.state === undefined) {
            return (
                <div>
                    <Link to="/side-menu"><h1>Pl. go to from home page!!!! </h1></Link>

                </div>
            )
        }

        return (

            <div><Logout></Logout>
                <div>


                    <form onSubmit={this.handleSubmit}>
                        {errors.map(error => (
                            <p key={error}>Error: {error}</p>
                        ))}

                        <h3 data-testid='h3'>Edit Product!!!!</h3>

                        <label >Product ID </label>
                        <input type="text" name="fname" id="id" value={this.state.id} readOnly></input><br></br>

                        <label>Product Image </label>
                        <input type="file" onChange={this.getImage} multiple accept='image/*' required="required" />
                        <br></br>


                        <label>Description  </label>
                        <input type="text" name="lname" id="description" value={this.state.description} onChange={this.getDescription}></input><br></br>


                        <label>Product Name  </label>
                        <input type="text" name="lname" id="productName" value={this.state.productName} onChange={this.getProductName}></input><br></br>

                        <label> Select Category</label>
                        <select id="pd" onChange={this.getCategory}>
                            {this.state.dropdownCategory.map(p => <option value={p.categoryName}>{p.categoryName}</option>)}
                        </select><br></br>

                        <label>Quantity </label>
                        <input type="number" name="pass" id="quantity" min="0" value={this.state.quantity} onChange={this.getQuantity}></input><br></br>

                        <label>In-Stock </label>
                        <input type="number" name="email" id="in_stock" min="0" value={this.state.in_stock} onChange={this.getStock}></input><br></br>


                        <label>Price </label>
                        <input type="number" name="mno" id="price" min="0" value={this.state.price} onChange={this.getPrice}></input><br></br>
                        <button type="submit" >Edit Product</button>
                        <br></br>

                    </form>
                </div>
            </div>

        );
    }
}

export default EditProduct;