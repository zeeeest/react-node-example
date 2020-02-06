import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";

export default function configureStore(history) {
    const sagaMiddleware = createSagaMiddleware();
    const routMiddleware = routerMiddleware(history);
    const store = createStore(
        rootReducer(history),
        compose(applyMiddleware(sagaMiddleware, routMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept("../reducers/index", function() {
            store.replaceReducer(rootReducer(history))
        })
    }

    return store
}