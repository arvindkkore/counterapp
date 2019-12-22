import React, { Component } from 'react';
import Counter from './counter';
class Counnters  extends Component {
    state = { count :0,
    products : [
        {id: 1,value :0},
        {id: 2,value :1},
        {id: 3,value :0},
        {id: 4,value :3},
        {id: 5,value :2},
    ]  
    };
     
   deleteItem = (counterId) =>{
       const products = this.state.products.filter(c => c.id != counterId);
       this.setState({products});
   } 

   increaseCount = (product) =>{
    const  products = [... this.state.products]
    const index = products.indexOf(product);
    products[index].value ++;  
    this.setState({products});
    }

    decreaseCount = (product) =>{   
        const  products = [... this.state.products]
        const index = products.indexOf(product);        
        products[index].value = products[index].value > 1 ? products[index].value -1  :1;  
        this.setState({products}); 
    }


   handleReeset = (counterId) =>{
    console.log("reset clicked.");
    const products = this.state.products.map(c => {
        c.value  = 1;
        return c;
    });
    this.setState({products});
    } 
   render(){
     return (<div>
         <button 
         onClick ={ this.handleReeset}
         className= 'btn btn-primary btn-sm m-2'>Reset</button>
         {
         this.state.products.map(p => 
         <Counter 
         key={p.id} 
         product ={p}
         selected={false}
         onIncrease = {this.increaseCount}
         onDecrease = {this.decreaseCount}
         onDelete ={this.deleteItem}
         />)
         }
     </div>)  
   } 
    }

   export default  Counnters;