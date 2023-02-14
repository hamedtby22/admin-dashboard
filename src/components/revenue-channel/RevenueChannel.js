import React from 'react';

//data
import {data} from '../../router';

//component
import ProgressBar from '../progress-bar/ProgressBar';

//styles
import './revenue-channel.scss';

const RevenueChannel = () => {

    return (
        <ul className='revenue-list'>
            {
                data.revenueByChannel.map((item,index) => (
                    <li className='revenue-list__item' key={`revenue-${index}`}>
                        <div className='revenue-list__item__title'>
                            <div>{item.title}</div>
                            <span className={`${item.value > 50 ? 'txt-success' : 'txt-danger'}`}
                            >{item.value}%</span>
                        </div>
                        <div>
                            <ProgressBar value={item.value} />
                        </div>
                    </li>
                )) 
            }
        </ul>
    );
};

export default RevenueChannel;