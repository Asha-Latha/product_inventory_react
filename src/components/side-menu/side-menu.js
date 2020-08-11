import React from 'react';

import StockDisplay from './Dashboard/stockdetails';
import Offers from './offers/offers';
import DisplayAllProducts from './products/displayAllProducts';

class SideMenu extends React.Component {
    state = {  }
    render() { 
        return (     
            <div>
            <DisplayAllProducts></DisplayAllProducts>
            </div>
        );
    }
}
 
export default SideMenu;