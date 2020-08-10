import React from 'react';
import AddProduct from './addProduct';
import AllProducts from './allproducts';
import Menu from './menu';

class DisplayAllProducts extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
               
                {/* <AddProduct></AddProduct> */}
                {/* <Menu></Menu> */}
                <AllProducts></AllProducts>
            </div>
         );
    }
}
 
export default DisplayAllProducts;