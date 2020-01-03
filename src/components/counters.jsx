import React, { Component } from 'react';
import Counter from './counter';
import { connect } from 'react-redux';
import { add,reset } from '../actions/index';
class Counters  extends Component {   

  add = () => {
    this.props.dispatch(this.props.add());
  };
  reset = () => {
    this.props.dispatch(this.props.reset());
  };
   render(){
     return (<div>
         <button className= 'btn btn-primary btn-sm m-2' onClick ={this.add}>ADD</button>
         <button className= 'btn btn-primary btn-sm m-2' onClick ={this.reset}>RESET</button>
         { this.props.counters.map(p =><Counter key={p.id}  counter ={p}/>) }
     </div>)  
   } 
 }
 function mapStateToProps(state) {
  return {...state, counters: state.counters};
}
const mapDispatchToProps = dispatch => {
  return {
    add: () => {
       return {
           type: 'ADD'           
       }},   
    reset: () => {
        return {
            type: 'RESET'           
    }},
    dispatch  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counters);