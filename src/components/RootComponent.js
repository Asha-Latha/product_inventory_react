import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Login from './userControl/login'
import Register from './userControl/register';
import SideMenu from './side-menu/side-menu'
import AllProducts from './side-menu/products/allproducts';

class RootComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header></Header><hr></hr>
                <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route> 
                <Route path='/side-menu' component={SideMenu}></Route> 
                </Switch>
                    <hr></hr>        
                <Footer></Footer>
            </div>
         );
    }
}
 
export default RootComponent;
