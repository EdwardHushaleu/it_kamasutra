import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://www.w3schools.com/howto/img_nature_wide.jpg' />
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo