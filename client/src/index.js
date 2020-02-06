import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from "./redux";
import { createBrowserHistory } from 'history'
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

export const history = createBrowserHistory();

const store = configureStore(history);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter
            history={history}
        >
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root"),
);


