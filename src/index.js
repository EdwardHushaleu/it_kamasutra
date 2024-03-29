import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from 'react-dom';



 let rernderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rernderEntireTree(store.getState());

store.subscribe(rernderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
