import uuidv4 from 'uuid/v4';
import { INCREMENT, DECREMENT,ADD, RESET,DELETE } from './types';

export function increment(id) {
    return { type: INCREMENT,id };
  }
  
export const decrement = (id) => {
  return { type: DECREMENT,id };
}
export const delete_count = (id) => {
  return { type: DELETE,id };
}
export const add = () => {
  return { type: ADD };
}
export const reset = () => {
  return { type: RESET };
}
