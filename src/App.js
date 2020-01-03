import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
class  App extends Component {

  state = { count :0,
    products : [
        {id: 1,value :1},
        {id: 2,value :1},
        {id: 3,value :1},
        {id: 4,value :1},
        {id: 5,value :1},
    ]  
    };

handleReset = () =>{
 console.log("reset clicked.");
 const products = this.state.products.map(c => {
     c.value  = 1;
     return c; 
 });
 this.setState({products});
 } 
 render(){
  return (
    <div>
      <NavBar totalCount ={this.state.products.filter(c => c.value >0).reduce((prev,next) => prev + next.value,0)}/>         
      <main className ="container-left m-2" >  
      <Counters />      
      </main>
    </div>
  );
}
}

export default App;
