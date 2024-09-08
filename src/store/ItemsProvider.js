// src/store/items-context.js
import React, { useReducer } from 'react';

// Define the initial state
const defaultItemsState = {
  items: [],
};

// Define the reducer function
const itemsReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    return {
      items: [...state.items, action.item],
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      items: state.items.filter(item => item.id !== action.id),
    };
  }
  return state;
};

// Create the context
const ItemsContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

// Define the provider component
export const ItemsProvider = (props) => {
  const [itemsState, dispatchItemsAction] = useReducer(itemsReducer, defaultItemsState);

  const addItemToMenuHandler = (item) => {
    dispatchItemsAction({ type: 'ADD_ITEM', item: item });
  };

  const removeItemFromMenuHandler = (id) => {
    dispatchItemsAction({ type: 'REMOVE_ITEM', id: id });
  };

  const itemsContext = {
    items: itemsState.items,
    addItem: addItemToMenuHandler,
    removeItem: removeItemFromMenuHandler,
  };

  return (
    <ItemsContext.Provider value={itemsContext}>
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
