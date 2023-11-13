import { createSlice } from '@reduxjs/toolkit'; // Import the createSlice function from Redux Toolkit.

// Create a slice of the Redux store for managing date range state
const dateRangeSlice = createSlice({
    name: 'dateRange', // The name of the slice in the Redux store
    initialState: {
        startDate: null, // The start date of the date range (initially null)
        endDate: null,   // The end date of the date range (initially null)
    },
    reducers: {
        // Reducer function for setting the start date
        setStartDate: (state, action) => {
            state.startDate = action.payload; // Update the start date with the payload from the action
        },
        // Reducer function for setting the end date
        setEndDate: (state, action) => {
            state.endDate = action.payload; // Update the end date with the payload from the action
        },
    },
});

// Export the action creators for setting the start and end dates
export const { setStartDate, setEndDate } = dateRangeSlice.actions;

// Export the reducer function to be used in the Redux store
export default dateRangeSlice.reducer;
