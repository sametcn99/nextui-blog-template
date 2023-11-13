import { configureStore } from "@reduxjs/toolkit"; // Import the configureStore function from Redux Toolkit, a state management library.
import dateRangeReducer from "./dateRangeSlice"; // Import the dateRangeReducer from a separate file (dateRangeSlice).

// Create a Redux store using the configureStore function.
// The store will manage the application's state.
const store = configureStore({
  reducer: {
    // Define the reducers for the store. Reducers specify how the state is updated in response to actions.
    dateRange: dateRangeReducer, // Assign the dateRangeReducer to the 'dateRange' key in the reducers object.
  },
});

export default store; // Export the configured Redux store so it can be used throughout the application.
