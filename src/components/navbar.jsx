import React, { Component } from 'react';

class NavBar  extends Component {

    render() { 
        console.log(this.props);
        return ( 
            <nav className ="navbar navbar-light bg-light">  
            <a className = "navbar-brand" href ='#'>NavBar</a>                            
            </nav>
         );
    }
} 
export default NavBar ;