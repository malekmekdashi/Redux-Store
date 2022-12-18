import { createStore } from "redux";
import reducers from './reducers';

// removed the GlobalState file from the utils folder and moved the const of arrays to the reducers and handled it in the initialState const. 
// In this file, 'createStore' is used to create the store. This brings together the state, actions, reducers that make up our app. The store has several responsibilities such as: holding the current application state inside, allows access to the current state, allows state to be updated, registers listener callbacks, and handles unregistering of listeners.

export default createStore(reducers);