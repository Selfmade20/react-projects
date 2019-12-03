import { combineReducers } from 'redux';

import login from './login/reducer';
import posts from './posts/reducer';

export default combineReducers({
    login,
    posts
})