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
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
  }
     

getCategoryName=(e)=>{

this.setState({cname:e.target.value})

}
validate=(cname)=>{
    const errors = [];
if (cname.length < 3) {
errors.push("Category should be at least 3 charcters long");
}
return errors;
}

handleSubmit(e) {
    console.log("Inside Addcategory handle submit function")
    e.preventDefault();
    const {cname} = this.state;
    const errors = this.validate(cname);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    this.addCategory()
  }

addCategory=()=>{
    console.log('add category')
    let addcategory = {
        "categoryName": this.state.cname   
    }
    axios.post('http://localhost:3000/addcategory', addcategory)
    .then(response=>{      
        console.log("added category");
        console.log(response );
        this.props.history.push('/side-menu')
    }, error=>{
        console.error(error);
    })
}

    render() { 
        const { errors } = this.state;
        return (
            <div><Logout></Logout>
            <div id="categoryadd">
             
    <form onSubmit={this.handleSubmit}>
                {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}
       Category Name &nbsp;
    <input type="text" name="uname" id="catname"  onChange={this.getCategoryName}></input> <br></br><br></br>
    <button type="submit" value="Submit" id="sbtbutton">Add Category</button></form> 
    </div>
    </div>
          );
    }
}
 
export default Category;