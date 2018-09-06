// import all reducers then...
import usersReducers from './users.reducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // combine them
    usersReducers
});

export default rootReducer;