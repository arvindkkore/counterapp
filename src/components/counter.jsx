import React, { Component } from 'react';
import { increment, decrement,add } from '../actions/index';

import { connect } from 'react-redux';
class Counter1  extends Component {


  increment = (id) => {
    this.props.dispatch(this.props.increment(id));
  };
  
  decrement = (id) => {
    this.props.dispatch(this.props.decrement(id));
  };
  delete_count = (id) => {
    this.props.dispatch(this.props.delete_count(id));
  };
    render() { 
        console.log(this.props);
        return ( 
            <div>               
                <button onClick = {()=> this.decrement(this.props.counter.id)} className ="btn btn-secondary btn-sm" >-</button>
                <span  className ="badge badge-primary m-2" >{this.props.counter.count}</span>
                <button onClick = {() =>this.increment(this.props.counter.id)} className ="btn btn-secondary btn-sm" >+</button>                
                <button onClick = {() =>this.delete_count(this.props.counter.id)} className ="btn btn-danger btn-sm m-2" >DELETE</button>                
            </div>
         );
    }
} 
function mapStateToProps(state) {
    return {...state,
      count: state.count
    };
  }
    
  const mapDispatchToProps = dispatch => {
    return {
      increment: (id) => {
        return {
           type: 'INCREMENT',
           id
         }},        
         decrement: (id) => {
         return {
             type: 'DECREMENT',
             id,
         }},
         delete_count: (id) => {
          return {
              type: 'DELETE',
              id,
          }},        
      dispatch  
    }
  }
  
  
  const Counter = connect(mapStateToProps, mapDispatchToProps)(Counter1);
  export default Counter;

