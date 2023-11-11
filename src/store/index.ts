// src/store/index.ts
import {createStore, applyMiddleware} from 'redux';
import {createThread, createUser} from '../api/chatService';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {User} from '../client/models/user';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

interface ChatState {
  messages: {text: string; isGuru: boolean; timestamp: string}[];
  thread_id?: number;
  user_id?: number;
  user?: User;
}

const initialState: ChatState = {
  messages: [],
  thread_id: undefined,
  user_id: undefined,
  user: undefined,
};

// Actions
const SEND_MESSAGE = 'SEND_MESSAGE';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
const RESET = 'RESET';
const CREATE_THREAD = 'CREATE_THREAD';
const LOAD_HOME_SCREEN = 'LOAD_HOME_SCREEN';
const UPDATE_USER_ID = 'UPDATE_USER_ID';
const UPDATE_THREAD_ID = 'UPDATE_THREAD_ID';

// Reducer
// DO NOT MAKE ASYNC REQUESTS HERE,
// DATA SHOULD BE PASSED IN AS ACTION PAYLOAD
const chatReducer = (
  state: ChatState | undefined = initialState,
  action: any,
) => {
  console.log('EVENT: ', action.type);

  switch (action.type) {
    case RESET:
      return {
        ...state,
        messages: [],
        thread_id: undefined,
        user_id: undefined,
        user: undefined,
      };
    case UPDATE_USER_ID:
      return {
        ...state,
        user_id: action.payload,
      };
    case UPDATE_THREAD_ID:
      return {
        ...state,
        thread_id: action.payload,
      };
    case LOAD_HOME_SCREEN:
      return {...state};
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };
    case CREATE_THREAD:
      // const thread_id = await createThread();
      // console.log('CREATE_THREAD index.ts - thread_id ', thread_id);
      // action.payload.thread_id = thread_id;
      return {
        ...state,
        thread_id: action.payload.thread_id,
      };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, chatReducer);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
