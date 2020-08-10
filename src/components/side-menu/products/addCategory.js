import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Category extends React.Component {  
    constructor(props){
        super(props);
        this.state={    
            cid:'',
            cname:'',
            categoryNameError:'',
            categoryIdError:'',
            buttonStatus:true
        }
    }

    checkValidateCategoryId=()=>{
        if(this.state.cid){
            this.setState({
                categoryIdError:"Mandatory",
                buttonStatus:true
            })  
        }
        else{
            this.setState({
                categoryIdError:'',
                buttonStatus:false
            })
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

getCategoryId=(e)=>{
this.checkValidateCategoryId()
this.setState({cid:e.target.value})
this.checkValidateCategoryId()
}

getCategoryName=(e)=>{
this.checkValidateCategoryName()
this.setState({cname:e.target.value})
this.checkValidateCategoryName()
}

addCategory=()=>{
    console.log('add category')
    let addcategory = {
        "id": this.state.cid,
        "categoryName": this.state.cname   
    }
    if(this.state.categoryNameError===''&&this.state.categoryIdError==='')
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
            <div id="categoryadd"><div>
            <Link to="/side-menu"><button>Go Back</button></Link>
           </div>
    <form name ="" action="">
    <label for="r1" id="fn"> Category Id:</label>
    <input type="number" name="fname" id="cid"  onChange={this.getCategoryId}></input><br></br>
    <p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.categoryIdError}</p> 
    <label  for="r3" id="un"> Category Name </label>
    <input type="text" name="uname" id="cname"  onChange={this.getCategoryName}></input> 
    <p style={{color:"red",fontSize:12,fontFamily:"italic"}}>{this.state.categoryNameError}</p> 
    </form>   
    <Link to="/side-menu"><button type="submit" value="Submit" id="button" onClick={this.addCategory} disabled={this.state.buttonStatus}>Add Category</button></Link>
    
    </div>
          );
    }
}
 
export default Category;