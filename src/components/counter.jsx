import React, { Component } from 'react';

class Counnter  extends Component {
    state = {...this.props.value};

    constructor(props){
        super(props);
        console.log("state",this.state); 
      }
    

    increaseCount =(product) =>{
    this.setState({value : this.state.value+1});
    console.log(product);
    }
    decreaseCount =() =>{       
        this.setState({value : (this.state.value > 0)?this.state.value - 1:0});  
    }
 
    formateCounter(){
        return this.state.value === 0 ? 'ZERO':this.state.value ;
    }
    render() { 
        console.log(this.props);
        return ( 
            <div>               
                <button onClick = {this.decreaseCount} className ="btn btn-secondary btn-sm" >Decrease</button>
                <span  className ="badge badge-primary m-2" >{this.formateCounter()}</span>
                <button onClick = {() => this.increaseCount({id:10})} className ="btn btn-secondary btn-sm" >Increase</button>
                <button onClick = {() => this.props.onDelete(this.state.id)} className ="btn btn-danger btn-sm m-2" >Delete</button>
            </div>
         );
    }
} 
export default Counnter ;
