let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "привет", likesCount: 34,},
                {id: 2, message: "hiii", likesCount: 87,},
                {id: 3, message: "hiii gitler", likesCount: 235,},
                {id: 4, message: "hiii gitler my furer", likesCount: 8235,},

            ],
            newPostText: "Proba",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Vasia",},
                {id: 2, name: "Petia",},
                {id: 3, name: "Sveta",},
                {id: 4, name: "Ura",},
                {id: 5, name: "Kiril",},
                {id: 6, name: "Artem",}
            ],
            messages: [
                {id: 1, message: "Hello",},
                {id: 2, message: "How are you",},
                {id: 3, message: "Welcome",},
                {id: 4, message: "Welcome, How are you",},
                {id: 5, message: "Hello",},
                {id: 6, message: "Coool men",}
            ],
        },
        sidebar: {},
    },
    getState() {
        debugger;
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

}


export default store
window.store = store;