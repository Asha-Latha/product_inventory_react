import React from 'react';
import logo from '../../../images/offer.jpg'
import Logout from '../../logout/logout';
import {Link} from 'react-router-dom'

class Offers extends React.Component {
    state = {  }
    render() { 
        let imgStyle ={
            width:'80%',
            borderRadius:'10px',
            marginLeft: '200px'
        } 
        return ( 
            <div><Logout></Logout>
            
            <div>
                 
                <img src={logo} alt="logo" id="offer" style={imgStyle}></img>
                
            </div>
            </div>
         );
    }
}
 
export default Offers;