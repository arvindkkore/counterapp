import React, { Component } from 'react';

class Counnter  extends Component {


   
    
 
    formateCounter(){
        return this.props.product.value === 0 ? 'ZERO':this.props.product.value ;
    }
    render() { 
        console.log(this.props);
        return ( 
            <div>               
                <button onClick = {() => this.props.onDecrease(this.props.product)} className ="btn btn-secondary btn-sm" >Decrease</button>
                <span  className ="badge badge-primary m-2" >{this.formateCounter()}</span>
                <button onClick = {() => this.props.onIncrease(this.props.product)} className ="btn btn-secondary btn-sm" >Increase</button>
                <button onClick = {() => this.props.onDelete(this.props.product.id)} className ="btn btn-danger btn-sm m-2" >Delete</button>
            </div>
         );
    }
} 
export default Counnter ;
