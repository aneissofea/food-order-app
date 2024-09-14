import React, { createContext, useReducer } from 'react';

const ItemsContext = createContext();

const itemsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export const ItemsProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemsReducer, []);

  return (
    <ItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
