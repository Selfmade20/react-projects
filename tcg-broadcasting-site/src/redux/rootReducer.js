import { combineReducers } from 'redux';

import userName from './login/reducer';
import listOfPosts from './messages/reducer';

export default combineReducers({
    userName,
    listOfPosts
})