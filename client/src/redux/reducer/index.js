import { combineReducers } from "redux";
import chatMassage, { receiverProfile } from './chatMsg'
import { asideAction } from "./hideShow";
import socketController from './socket'
const rootReducer = combineReducers(
    {
        chatMassage,
        asideAction,
        socketController,
        receiverProfile,
    }
);
export default rootReducer;