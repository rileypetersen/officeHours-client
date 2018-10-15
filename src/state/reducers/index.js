import authReducers from './auth.reducers';
import usersReducers from './users.reducers';
import orgsReducers from './organizations.reducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    authReducers,
    usersReducers,
    orgsReducers
});

export default rootReducer;
