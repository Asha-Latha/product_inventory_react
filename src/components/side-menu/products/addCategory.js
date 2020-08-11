import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Logout from '../../logout/logout';
import '../../side-menu/products/addcat.css'

class Category extends React.Component {  
    constructor(props){
        super(props);
        this.state={    
            cname:'',
            categoryNameError:'',
            buttonStatus:true
        }
    }
checkValidateCategoryName=()=>{
    if(this.state.cname.length<1){
        this.setState({
            categoryNameError:'Enter Category',
            buttonStatus:true
        })}
        else{
        this.setState({
            categoryNameError:'',
            buttonStatus:false
        }     
        )
    }
}

getCategoryName=(e)=>{
this.checkValidateCategoryName()
this.setState({cname:e.target.value})
this.checkValidateCategoryName()
}

addCategory=()=>{
    console.log('add category')
    let addcategory = {
        "categoryName": this.state.cname   
    }
    if(this.state.categoryNameError==='')
    axios.post('http://localhost:3000/addcategory', addcategory)
    .then(response=>{      
        console.log("added category");
        console.log(response );
    }, error=>{
        console.error(error);
    })
}

    render() { 
        return (
            <div><Logout></Logout>
            <div id="categoryadd">
             <div>
            <Link to="/side-menu"><button id="gobtn">Go Back</button></Link>
           </div>
    <form name ="">
      <label  for="r3"> Category Name </label>&nbsp;
    <input type="text" name="uname" id="catname"  onChange={this.getCategoryName}></input> 
    <p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.categoryNameError}</p> 
    </form>   
    <Link to="/side-menu"><button type="submit" value="Submit" id="sbtbutton" onClick={this.addCategory} disabled={this.state.buttonStatus}>Add Category</button></Link>
    </div>
    </div>
          );
    }
}
 
export default Category;