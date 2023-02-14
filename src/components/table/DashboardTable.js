import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

//redux
import { setModeSetting } from '../../redux/action/themeAction';

//data
import {topCustomers} from '../../router';

//styles
import './dashboard-table.scss';

const DashboardTable = () => {

    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        dispatch(setModeSetting(themeClass))
    },[dispatch])

    return (
        <div className='table-wrapper'>
            <div className='mb'>
                Top Customers
            </div>
            <table>
                <thead className={`${theme.mode}`}>
                    <th>USER</th>
                    <th>TOTAL ORDERS</th>
                    <th>TOTAL SPENDING</th>                     
                </thead>
                {
                        topCustomers.map((item) => (
                            <tbody>
                                <tr key={item.username}>                         
                                    <td><span>{item.username}</span></td>
                                    <td><span>{item.order}</span></td>
                                    <td><span>{item.price}</span></td>                         
                                </tr>
                            </tbody>
                        ))
                }              
            </table>
            <button className={theme.mode}>View All</button>
        </div>
    );
};

export default DashboardTable;

