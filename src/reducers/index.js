import { combineReducers } from 'redux';
import UserReducer from './reducer_user';
import SalleReducer from './reducer_salle'; 
import ActiveSalleReducer from './reducer_active_salle'
import TableReducer from './reducer_table'
import ActiveTableReducer from './reducer_active_table'
import ActiveUserReducer from './reducer_active_user'
import {reducer as ReducerForm} from 'redux-form'
import StatusReducer from './reducer_status'
import ActiveStatusReducer from './reducer_active_status'

const rootReducer = combineReducers({
  users : UserReducer,
  tables : TableReducer,
  salles : SalleReducer,
  activeSalle : ActiveSalleReducer,
  activeTable : ActiveTableReducer, 
  activeUser: ActiveUserReducer,
  form: ReducerForm,
  status: StatusReducer,
  activeStatus: ActiveStatusReducer

});

export default rootReducer;
