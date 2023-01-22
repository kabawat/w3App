import { combineReducers } from "redux";
import { receiverProfile, chatMassage, chatContactList } from './chatMsg'
import { asideAction } from "./hideShow";
import socketController from './socket'
import myProfile from "./userProfile";
const rootReducer = combineReducers(
    {
        myProfile,
        chatMassage,
        asideAction,
        socketController,
        receiverProfile,
        chatContactList,
    }
);
export default rootReducer;