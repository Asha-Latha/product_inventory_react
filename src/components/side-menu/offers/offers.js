import React from 'react';
import Menu from '../products/menu';
import logo from '../../../images/offer.jpg'

class Offers extends React.Component {
    state = {  }
    render() { 
        let imgStyle ={
            width:'80%',
            borderRadius:'10px',
            marginLeft: '200px'
        } 
        return ( 
            <div>
                 <Menu></Menu> 
               
                <img src={logo} alt="logo" id="offer" style={imgStyle}></img>
                
            </div>
         );
    }
}
 
export default Offers;