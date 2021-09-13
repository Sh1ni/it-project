import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/DialogsReducer';
import store from '../../redux/reduxStore';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = () => {
    return {
        updateNewMessageBody: () => {
            store.dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            store.dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer