// import all reducers then...
import authReducers from './auth.reducers';
import usersReducers from './users.reducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // combine them
    authReducers,
    usersReducers
});

export default rootReducer;