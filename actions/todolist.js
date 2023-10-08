// This code defines three Redux action creators: addItem, updateItem, and deleteItem. 
 
export const addItem = (text) => { 
  return { 
    type: 'ADD_ITEM', 
    payload: text, 
  }; 
}; 
 
export const updateItem = (index, text) => { 
  return { 
    type: 'UPDATE_ITEM', 
    payload: { index, text }, 
  }; 
}; 
 
export const deleteItem = (index) => { 
  return { 
    type: 'DELETE_ITEM', 
    payload: index, 
  }; 
}; 
 