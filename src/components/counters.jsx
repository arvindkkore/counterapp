import React, { Component } from 'react';
import Counter from './counter';
class Counnters  extends Component {
   
     
   
   render(){
     return (<div>
         <button 
         onClick ={this.props.onReset}
         className= 'btn btn-primary btn-sm m-2'>Reset</button>
         {
         this.props.products.map(p => 
         <Counter 
         key={p.id} 
         product ={p}
         selected={false}
         onIncrease = {this.props.onIncrement}
         onDecrease = {this.props.onDecrement}
         onDelete ={this.props.onDelete}        
         />)
         }
     </div>)  
   } 
    }

   export default  Counnters;