import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

const surveyReducer = (state = [], action) => {
    if (action.type === 'SET_SURVEY') {
        return [...action.payload]
    }else if (action.type === 'EMPTY') {
        return []
    }
    return state
}

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
