// This code defines a Redux reducer function that handles state updates for a list of items. 
 
const initialState = { 
  listData: [], 
}; 
 
const reducer = (state = initialState, action) => { 
  switch (action.type) { 
    case 'ADD_ITEM': 
      // Add the payload (new item) to the listData array 
      return { 
        ...state, 
        listData: [...state.listData, action.payload], 
      }; 
    case 'UPDATE_ITEM': 
      // Update the item at the specified index with the new text 
      const updatedList = [...state.listData]; 
      updatedList[action.payload.index] = action.payload.text; 
      return { 
        ...state, 
        listData: updatedList, 
      }; 
    case 'DELETE_ITEM': 
      // Remove the item at the specified index from the listData array 
      const filteredList = state.listData.filter((item, index) => index !== action.payload); 
      return { 
        ...state, 
        listData: filteredList, 
      }; 
    default: 
      // Return the current state if the action type is not recognized 
      return state; 
  } 
}; 
 
export default reducer; 