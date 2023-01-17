import { combineReducers } from "redux";
import chatMassage from './chatMsg'
import { asideAction } from "./hideShow";
import socketController from './socket'
const rootReducer = combineReducers(
    {
        socketController,
        chatMassage,
        asideAction,
    }
);
export default rootReducer;