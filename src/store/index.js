import React, { createContext, useReducer } from "react";

import { cartReducer, userReducer } from './reducers';
import initialState from './state';

const store = createContext(initialState);
const { Provider } = store;

function combineReducers(reducers) {  
    return (state = {}, action) => {
      const newState = {};
      for (let key in reducers) {
        newState[key] = reducers[key](state[key], action);
      }
      return newState;
    }
  }

const StateProvider = ({ children }) => {
  const combinedReducers = combineReducers({
    cart: cartReducer,
    user: userReducer,
  });

  const [state, dispatch] = useReducer(combinedReducers, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
