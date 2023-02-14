import React from 'react';

//data
import {data} from '../../router';

//styles
import './Totally-List.scss';

const TotallyList = () => {

    const icons = [
        <i className='bx bx-receipt'></i>,
        <i className='bx bx-user'></i>,
        <i className='bx bx-cube'></i>,
        <i className='bx bx-dollar'></i>,
    ]
    return (
        <ul className='overall-list'>
            {
                data.overall.map((item,index) => (
                    <li className='overall-list__item' key={`overall-${index}`}>
                        <div className='overall-list__item__icon'>
                            {
                                icons[index]
                            }
                        </div>
                        <div className='overall-list__item__info'>
                            <div>{item.value}</div>
                            <span>{item.title}</span>
                        </div>
                    </li>
                ))  
            }
        </ul>
    );
};

export default TotallyList;