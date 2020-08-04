import React from 'react';

import StockDisplay from './Dashboard/stockdetails';
import Offers from './offers/offers';
import DisplayAllProducts from './products/displayAllProducts';
class SideMenu extends React.Component {
    state = {  }
    render() { 
        return (  
            
            <div>
                <h2 id="product">Product Info</h2>
            <StockDisplay></StockDisplay>
            <Offers></Offers>
            <DisplayAllProducts></DisplayAllProducts>
            
            </div>
        );
    }
}
 
export default SideMenu;