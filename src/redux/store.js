import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";
    
    
    let store = {
        _state: {
            profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', LikesCount: 45},
                {id: 2, message: "it's my first post?", LikesCount: 45}
              ],
            },
        dialogsPage: {
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
        },
        sidebar: {
            
        } 
    },

_callSubscriber () {
        
    },
    
getState () {
    return this._state;
},

subscribe (observer) {
    this._callSubscriber = observer;
},

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store