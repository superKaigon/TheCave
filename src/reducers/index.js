import { combineReducers } from 'redux';
import UserReducer from './reducer_users';
import SalleReducer from './reducer_salle'; 
import ActiveSalleReducer from './reducer_active_salle'
import TableReducer from './reducer_table'
import ActiveTableReducer from './reducer_active_table'

const rootReducer = combineReducers({
  users : UserReducer,
  tables : TableReducer,
  salles : SalleReducer,
  activeSalle : ActiveSalleReducer,
  activeTable : ActiveTableReducer
});

export default rootReducer;
