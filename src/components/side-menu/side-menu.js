import React from 'react';

import StockDisplay from './Dashboard/stockdetails';
import Offers from './offers/offers';
import DisplayAllProducts from './products/displayAllProducts';
import Menu from './products/menu';
class SideMenu extends React.Component {
    state = {  }
    render() { 
        return (  
            
            <div>
                {/* <h2 id="product">Product Info</h2> */}
                
            {/* <StockDisplay></StockDisplay>
            <Offers></Offers> */}
            <DisplayAllProducts></DisplayAllProducts>
            <Menu></Menu>
            
            </div>
        );
    }
}
 
export default SideMenu;