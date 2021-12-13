import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://illustrators.ru/uploads/illustration/image/1232594/main_%D1%8B%D1%8B%D1%8B%D1%8B.png' />
             {props.message}
            <div>
                <span>
                    like
                </span>
                {props.like}
            </div>
        </div>
    )
}

export default Post