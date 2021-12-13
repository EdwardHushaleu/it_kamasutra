import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.state.map((p) =>  <Post message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef();

   const alerts = () => {
        debugger;
        let text =newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref = { newPostElement }> </textarea>
                </div>
                <div>
                    <button onClick = { alerts }>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts