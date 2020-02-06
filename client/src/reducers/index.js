import { combineReducers } from 'redux';
import { images } from '../reducers/images';
import { connectRouter } from 'connected-react-router'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    images,
});

export default rootReducer
