import { combineReducers } from 'redux'

import users from './users/reducer'
import books from './books/reducer'
import computers from './computers/reducer'

export default combineReducers({
  users,
  books,
  computers,
})
