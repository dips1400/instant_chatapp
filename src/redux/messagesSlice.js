import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: "messages",
    initialState: {
      allMessages: [], // Initialize as an empty array
    },
    reducers: {
      setMessages: (state, action) => {
        state.allMessages = action.payload || []; 
      },
      addMessage: (state, action) => {
        state.allMessages.push(action.payload); // Add a single message
      },
    },
  });
  
  export const { setMessages, addMessage } = messagesSlice.actions;
  
  export default messagesSlice.reducer;
  
