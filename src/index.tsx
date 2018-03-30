import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from "react-redux";
import {combineReducers, createStore, Reducer} from 'redux'
import 'semantic-ui-css/semantic.min.css';
import {Auth} from './Auth';

interface AppStore {
    isAuthenticated: boolean | null
}

const initialState: AppStore = {
    isAuthenticated: null
};

const reducer: Reducer<AppStore> = combineReducers({});
const store = createStore(reducer, initialState);
/*
share services
 */
export const auth = new Auth();

ReactDOM.render(
    (
        <Provider store={store}>
            <App/>
        </Provider>
    ),
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
