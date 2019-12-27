import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counter from './components/counter';
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
      <main className ="container" >            
        <Counter/>
        <Counter/>
        <Counter/>
        
      </main>
    </div>
  );
}
}

export default App;
