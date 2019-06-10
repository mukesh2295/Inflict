import React ,{Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import { Router, Route, Switch , Redirect} from 'react-router-dom';

class Logout extends Component  {
    onClick = () => {
        return <Redirect to="/" />;
    }
    render (){
    return (
       <div>
     <form >
        <button type="submit"  onClick = {this.onClick}>
            Logout
          </button>
     </form>     
         </div> 
    );
    } 
}
    export default Logout;