import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/index";
import {logger, socketConnect} from "../middleware";

const store = createStore(rootReducer, applyMiddleware(logger, socketConnect));
export default store;
