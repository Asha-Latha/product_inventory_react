import React from 'react';
import Menu from '../products/menu'

class StockDisplay extends React.Component {
    state = {  }
    render() { 
        return ( 

            <div>
                
                <h2>Stock Details</h2>
                <Menu></Menu> 
            </div>
         );
    }
}
 
export default StockDisplay;