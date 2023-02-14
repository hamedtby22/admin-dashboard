import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

//redux
import { setColorSetting,setModeSetting } from '../../redux/action/themeAction';

//svg
import CancelIcon from '../../assets/cancel.svg';
import DoneIcon from '../../assets/done.svg';
import RefundedIcon from '../../assets/refunded.svg';

//styles
import './orders-table.scss';

const OrdersTable = (props) => {

    const [list, setList] = useState([]);
    
    const initialData = props.limit && props.Data ? props.Data.slice(0, Number(props.limit)) : props.Data

    const [dataOrder, setDataOrder] = useState(initialData)
    
    let pages = 1

    let range = []

    if (props.limit !== undefined) {
        let page = Math.floor(props.Data.length / Number(props.limit))
        pages = props.Data.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0)

    const selectPage = page => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)
        setDataOrder(props.Data.slice(start, end))
        setCurrPage(page)
    }
    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);
    useEffect(() => {
        setList(props.Data);
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(setModeSetting(themeClass))
        dispatch(setColorSetting(colorClass))
      }, [list,dispatch]);

    return (
        <div>
            <div className="table-wrapper">
                <table>
                <thead>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>COSTUMER</th>
                    <th>EMAIL</th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                </thead>
                {
                    dataOrder.map((item) => (                   
                        <tbody key={item.id} className='body-order'>
                            <tr className='body-order__tr'>
                                <td><span>{item.id}</span></td>
                                <td><span>{item.date}</span></td>
                                <td>
                                    <div className='body-order__status'>
                                        {item.status === 'Paid' ?
                                            <img
                                                src={DoneIcon}
                                                alt='paid-icon'
                                                className='body-order__icon' />
                                            : item.status === 'Canceled' ?
                                            <img
                                                src={CancelIcon}
                                                alt='canceled-icon'
                                                className='body-order__icon' />
                                            : item.status === 'Refunded' ?
                                            <img
                                                src={RefundedIcon}
                                                alt='refunded-icon'
                                                className='body-order__icon' />
                                            : null}
                                        <span>{item.status}</span>
                                    </div>
                                </td>
                                <td className='body-order__customer'>
                                    <div className='body-order__custava'>
                                        <img 
                                            src={item.avatar}
                                            className='body-order__avatar'
                                            alt={item.first_name + ' ' +item.last_name} />
                                        <span>{item.first_name} {item.last_name}</span>
                                    </div>
                                </td>
                                <td><span>{item.email}</span></td>
                                <td><span>{item.product}</span></td>
                                <td><span>${item.price}</span></td>
                            </tr>
                        </tbody>
                        ))
                }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className={`table__pagination ${theme.mode}`}>
                        {
                            range.map((item, index) => (
                                <div key={index} className={`table__pagination-item ${currPage === index ? `active ${theme.color}` : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default OrdersTable;

    

