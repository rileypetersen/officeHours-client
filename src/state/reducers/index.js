// import all reducers then...
import { authReducers, usersReducers } from './users.reducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // combine them
    authReducers,
    usersReducers
});

export default rootReducer;