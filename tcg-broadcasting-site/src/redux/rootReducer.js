import { combineReducers } from 'redux';

import userName from './Login/reducer';
import listOfPosts from './Messages/reducer';

export default combineReducers({
    userName,
    listOfPosts
})