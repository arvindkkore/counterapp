import React, { Component } from 'react';
import { increment, decrement } from '../actions/index';

import { connect } from 'react-redux';
class Counnter1  extends Component {

  state = { count: 0 }

  increment = () => {
    this.props.dispatch(this.props.increment());
  };
  
  decrement = () => {
    this.props.dispatch(this.props.decrement());
  };
    render() { 
        console.log(this.props);
        return ( 
            <div>               
                <button onClick = {this.decrement} className ="btn btn-secondary btn-sm" >-</button>
                <span  className ="badge badge-primary m-2" >{this.props.count}</span>
                <button onClick = {this.increment} className ="btn btn-secondary btn-sm" >+</button>                
            </div>
         );
    }
} 
function mapStateToProps(state) {
    return {
      count: state.count
    };
  }    
  const mapDispatchToProps = dispatch => {
    return {
      increment: () => {
        return {
           type: 'INCREMENT'
         }},
     
         decrement: () => {
         return{
             type: 'DECREMENT'
         }},     
      dispatch  
    }
  }
  
  
  const Counnter = connect(mapStateToProps, mapDispatchToProps)(Counnter1);
  export default Counnter;

