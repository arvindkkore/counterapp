import { INCREMENT, DECREMENT,ADD,RESET,DELETE } from '../actions/types';
import Counter from '../components/counter';
import counters from '../components/counters';

const initialState = {count:1, counters:[{id:1,count:1}]}
var totalcount =0;
function rootReducer(state = initialState, action) {
   console.log(action)
  switch (action.type) {
    case ADD:      
    var abv = {count:state.count+1,counters:[...state.counters,{id:state.counters.length+1,count:1}]}    
    return abv;//{counters:[...state.counters,{id:state.counters.length+1,count:0}]}
    case RESET: 
    totalcount =0;
    var counters = state.counters.map(counter =>{          
         counter.count = 1;      
         totalcount = totalcount +1;
      return counter;
    } );    
    return {count :totalcount,counters:counters};
    return abv;
    case INCREMENT:     
      totalcount = state.count;
    var counters = state.counters.map(counter =>{
        if(counter.id === action.id){         
           ++counter.count  ;
           totalcount = totalcount +1;
        }
        return counter;
      } );     
      return {count :totalcount,counters:counters};
    case DECREMENT:
      totalcount = state.count;
      var counters = state.counters.map(counter =>{
        if(counter.id === action.id && counter.count>1){
          -- counter.count ;
          totalcount = totalcount - 1;
        }
        return counter;
      } );      
      return {count :totalcount,counters:counters};
      case DELETE:        
        var counters = state.counters.filter(counter => counter.id !== action.id); 
        totalcount = counters.reduce((total, counter) => total + counter.count, 0);              
        return {count :totalcount,counters:counters};

    default:
      return state;
  }
}
export default rootReducer;
