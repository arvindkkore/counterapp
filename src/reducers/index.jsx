import { INCREMENT, DECREMENT,ADD,RESET,DELETE } from '../actions/types';
import Counter from '../components/counter';
import counters from '../components/counters';

const initialState = {count:0, counters:[{id:1,count:1}]}
function rootReducer(state = initialState, action) {
   console.log(action)
  switch (action.type) {
    case ADD:      
    var abv = {count:0,counters:[...state.counters,{id:state.counters.length+1,count:1}]}
    console.log('abv');
    console.log(abv);
    return abv;//{counters:[...state.counters,{id:state.counters.length+1,count:0}]}
    case RESET: 
    var counters = state.counters.map(counter =>{          
         counter.count = 1;      
      return counter;
    } );
    console.log(counters);  
    return {count :state.count+1,counters:counters};
    return abv;
    case INCREMENT:
      console.log(state.counters);  
    var counters = state.counters.map(counter =>{
        if(counter.id === action.id){         
           ++counter.count  ;
        }
        return counter;
      } );
      console.log(counters);  
      return {count :state.count+1,counters:counters};
    case DECREMENT:
      var counters = state.counters.map(counter =>{
        if(counter.id === action.id && counter.count>1){
          -- counter.count ;
        }
        return counter;
      } );
      console.log(counters);
      return {count :state.count-1,counters:counters};
      case DELETE:
        var counters = state.counters.filter(counter => counter.id !== action.id);
        console.log('counters');
        console.log(counters);
        return {count :state.count-1,counters:counters};

    default:
      return state;
  }
}
export default rootReducer;
