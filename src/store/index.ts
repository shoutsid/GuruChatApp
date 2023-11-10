// src/store/index.ts
import {createStore, applyMiddleware} from 'redux';
import {getAIResponse} from '../api/chatService';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

interface ChatState {
  messages: string[];
}

const initialState: ChatState = {
  messages: [],
};

// Actions
const SEND_MESSAGE = 'SEND_MESSAGE';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

// Action Creators
export const sendMessage = (message, callback) => async dispatch => {
  dispatch({
    type: SEND_MESSAGE,
    payload: message,
  });

  setTimeout(async () => {
    try {
      const reply = await getAIResponse(message);
      dispatch({
        type: RECEIVE_MESSAGE,
        payload: reply,
      });
    } catch (error) {
      // Handle the error, e.g., by showing an alert or a toast to the user
      console.error('Error in sendMessage:', error);
    }
    callback();
  }, 1000); // 2 seconds delay
};

// Reducer
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [{text: action.payload, isGuru: false}, ...state.messages],
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [{text: action.payload, isGuru: true}, ...state.messages],
      };
    default:
      return state;
  }
};

// export const store = createStore(chatReducer, applyMiddleware(thunk));
const persistedReducer = persistReducer(persistConfig, chatReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
