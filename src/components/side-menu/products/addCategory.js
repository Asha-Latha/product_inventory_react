import React from 'react';

class Category extends React.Component {
    state = {  }
    render() { 
        return (
            <div id="categoryadd">
    <form>
    <label for="r1" id="fn">Parent Category :</label>
    <input type="text" name="fname" id="r1"></input>
     
    <label  for="r2" id="ln">Child Category  :</label>
    <input type="text" name="lname" id="r2"></input>
     
    <label  for="r3" id="un"> Category Name </label>
    <input type="text" name="uname" id="r3"></input>    
    <button type="submit" value="Submit" id="button">Add Category</button>
    </form>
    </div>
          );
    }
}
 
export default Category;