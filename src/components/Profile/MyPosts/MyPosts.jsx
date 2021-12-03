import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, message: "привет", likesCount: 34.},
        { id: 2, message: "hiii", likesCount: 87,},

    ]

    let postElements = posts.map((p) =>  <Post message={p.message} like={p.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts