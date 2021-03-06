import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { dishes } from './dishes';
import { comments } from './comments';
import { promos } from './promotions';
import { leaders } from './leaders';


//Creates the Store that will store all the state data.
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes, comments, promos, leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}