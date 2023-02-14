import React from 'react';

//styles
import './userinfo.scss';

const UserInfo = ({user}) => {
    return (
        <div className='user-info'>
            <div className='user-info__img'>
                <img src={user.img} alt='profile' />
            </div>
            <div className='user-info__name'>
                <span>{user.name}</span>
            </div>
        </div>
    );
};

export default UserInfo;