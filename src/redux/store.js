import { createStore, combineReducers } from "redux";

// Actions
const SET_CONTACTS = "SET_CONTACTS";
const SET_ACTIVE_CONTACT = "SET_ACTIVE_CONTACT";
const SET_MESSAGES = "SET_MESSAGES";

// Action Creators
export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  payload: contacts,
});

export const setActiveContact = (contactId) => ({
  type: SET_ACTIVE_CONTACT,
  payload: contactId,
});

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

// Reducers
const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return action.payload;
    default:
      return state;
  }
};

const activeContactReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_CONTACT:
      return action.payload;
    default:
      return state;
  }
};

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  contacts: contactsReducer,
  activeContact: activeContactReducer,
  messages: messagesReducer,
});

// Create Redux store
export const store = createStore(rootReducer);
