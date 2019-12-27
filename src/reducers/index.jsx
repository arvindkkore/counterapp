import { INCREMENT, DECREMENT,ADD } from '../actions/types';

const initialState = {
    count:0
  };
function rootReducer(state = initialState, action) {
     console.log(action)
  switch (action.type) {
    case ADD:
      console.log("increment");
    return {count :state.count+1}
    case INCREMENT:
        console.log("increment");
      return {count :state.count+1}
    case DECREMENT:
        console.log("DECREMENT");
      return {count :state.count-1};
    default:
      return state;
  }
}
export default rootReducer;
