import { legacy_createStore, combineReducers } from "redux";
import arrStatus from "./ArrStatus/reducer";
import numStatus from "./NumStatus/reducer";

// import reducer from "./reducer.ts";


const reducers = combineReducers({
    ArrStatus: arrStatus,
    NumStatus: numStatus
});

const store = legacy_createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store