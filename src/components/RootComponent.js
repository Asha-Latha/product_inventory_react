import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Login from './userControl/login'
import Register from './userControl/register';
import SideMenu from './side-menu/side-menu'
import AddProduct from './side-menu/products/addProduct'
import Category from './side-menu/products/addCategory'
import AllProducts from './side-menu/products/allproducts';
import StockDisplay from './side-menu/Dashboard/stockdetails';
import Offers from './side-menu/offers/offers';
import DisplayAllProducts from './side-menu/products/displayAllProducts';
import EditProduct from './side-menu/products/editProduct';
class RootComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                      
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route> 
                <Route path='/side-menu' component={SideMenu}></Route> 
                <Route path='/addProduct' component={AddProduct}></Route>
                <Route path='/addCategory' component={Category}></Route>
                <Route path='/stockdetails' component={StockDisplay}></Route>
                <Route path='/offers' component={Offers}></Route>
                <Route path='/displayAllProducts' component={DisplayAllProducts}></Route>
                <Route path='/editProduct' component={EditProduct}></Route>
                </Switch>           
                <Footer></Footer>
            </div>
         );
    }
}
 
export default RootComponent;
