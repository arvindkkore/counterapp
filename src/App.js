import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
import { connect } from 'react-redux';
class  App1 extends Component {

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
      <NavBar totalCount ={this.props.count}/>         
      <main className ="container-left m-2" >  
      <Counters />      
      </main>
    </div>
  );
}
}

function mapStateToProps(state) {
  return {...state,
    count: state.count
  };
}
const App = connect(mapStateToProps, null)(App1);
export default App;
