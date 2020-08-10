import React from 'react';
import '../../side-menu/products/menu.css'
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Menu extends React.Component {
    state = {  }

     changeBackground=(e)=> {
        e.target.style.background = 'white';
      }
    
    render() { 


        let linkStyle ={
            padding: '6px 8px 6px 16px',
            textDecoration:'none',
           fontSize: '25px',
           color:'#F8F0EE;;',
            display: 'block'       
        }
          
       


        return ( 

            <div className="sidenav">
            
            
          <Link to="/stockdetails" style={linkStyle}  onMouseOver={this.changeBackground} ><i className="fa fa-desktop"></i><span>Dashboard</span></Link><br></br>
  
           <Link to="/side-menu" style={linkStyle}  onMouseOver={this.changeBackground}><i className="fa fa-cogs"></i><span>Products</span></Link><br></br>
           <Link to="/offers" style={linkStyle}  onMouseOver={this.changeBackground}><i className="fa fa-gift"></i><span>Offers</span></Link><br></br>
  
 
  
          </div>

);

{/* <div class="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div> */}
         
    }
}
 
export default Menu;