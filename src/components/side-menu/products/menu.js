import React from 'react';
import '../../side-menu/products/menu.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class Menu extends React.Component {
    state = {  }
    render() { 
        return ( 

            <div className="sidebar">
            <ul>
            
          <li><Link to="/stockdetails"><i className="fas fa-desktop"></i><span>Dashboard</span></Link></li>
  
          <li> <Link to="/displayAllProducts"><i className="fas fa-cogs"></i><span>Products</span></Link></li>
          <li> <Link to="/offers"><i className="fas fa-gift"></i><span>Offers</span></Link></li>
  
  </ul>
  
          </div>
         );
    }
}
 
export default Menu;