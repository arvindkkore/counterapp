import uuidv4 from 'uuid/v4';
import { INCREMENT, DECREMENT } from './types';

export function increment() {
    return { type: INCREMENT };
  }
  
export const decrement = () => {
  return { type: DECREMENT };
}
