const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESAGE-BODY';    
const SEND_MESSAGE = 'SEND-MESSAGE';

let inicialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vadim'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Vika'},
        {id: 5, name: 'Sasha'}
    ],
    messages: [
        {id:1, message: 'Hi'},
        {id:2, message: 'How are you'},
        {id:3, message: 'Yo'},
  ],
    newMessageBody: ""
};

const dialogsReducer = (state = inicialState,action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id:4, message: body});
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;