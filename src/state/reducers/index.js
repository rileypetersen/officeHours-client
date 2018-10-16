import authReducers from './auth.reducers';
import usersReducers from './users.reducers';
import orgsReducers from './organizations.reducers';
import sessionsReducers from './sessions.reducers'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    authReducers,
    usersReducers,
    orgsReducers,
    sessionsReducers
});

export default rootReducer;
