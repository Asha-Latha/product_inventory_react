import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../side-menu/products/showproducts.css';
class ShowProducts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myid: 0
        }
    }

    editCurrentProduct = () => {
        console.log("edit friend with id: " + this.props.id);
        //this.props.history.push('/')
        this.props.editId(this.props.id)
    }
    deleteCurrentProduct = () => {
        console.log("delete product with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }
    render() {
        let imgStyle = {
            width: '200px',
            height: '205px',
            borderRadius: '10px'
        }
        return (
            <div className="column">
                <div className="card">
                    <img src={"images/" + this.props.productimage} style={imgStyle}></img>
                    <h3>{this.props.productName}</h3>
                    <p id="showprdt">Category: {this.props.category}</p>
                    <p id="showprdt">Description: {this.props.description}</p>
                    <p id="showprdt">Quantity : {this.props.quantity}</p>
                    <p id="showprdt">Price: {this.props.price} </p>
                    <p id="showprdt">In-Stock:{this.props.in_stock}</p>
                    <p id="showprdt"><button onClick={this.editCurrentProduct} id="editbtn">Edit</button>
                        <button onClick={this.deleteCurrentProduct} id="delbtn">Delete</button></p>
                </div>
            </div>

        );
    }
}

export default ShowProducts;