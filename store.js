// This code imports the necessary modules from Redux and creates a Redux store.

import { createStore } from 'redux';
import rootReducer from './reducers'; // Import your root reducer

// Create the Redux store using the imported root reducer
const store = createStore(rootReducer);

// Export the created store as the default export
export default store;