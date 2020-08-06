import React from 'react';
import AddProduct from './addProduct';
import AllProducts from './allproducts';

class DisplayAllProducts extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* <AddProduct></AddProduct> */}
                <AllProducts></AllProducts>
            </div>
         );
    }
}
 
export default DisplayAllProducts;