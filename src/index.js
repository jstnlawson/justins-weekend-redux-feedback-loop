import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

const surveyReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_FEELING':
        return { ...state, feeling: action.payload };
      case 'SET_UNDERSTAND':
        return { ...state, understanding: action.payload };
      case 'SET_SUPPORT':
        return { ...state, support: action.payload };
      case 'SET_COMMENTS':
        return { ...state, comments: action.payload };
      case 'RESET_SURVEY':
        return {};
      default:
        return state;
    }
  };

const storeInstance = createStore(
    combineReducers({
        surveyReducer
    }),
    applyMiddleware(logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
