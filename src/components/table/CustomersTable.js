import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

//redux
import { setColorSetting,setModeSetting } from '../../redux/action/themeAction';

//styles
import './customers-table.scss';

const CustomersTable = props => {

    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);
    
    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(setModeSetting(themeClass))
        dispatch(setColorSetting(colorClass))

    },[dispatch])

    const [list, setList] = useState([]);

    const initialData = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

    const [dataCustomer, setDataCustomer] = useState(initialData)
    
    let pages = 1

    let range = []

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0)

    const selectPage = page => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)
        setDataCustomer(props.bodyData.slice(start, end))
        setCurrPage(page)
    }

    useEffect(() => {
        setList(props.bodyData);
      }, [list]);


    return (
        <div>
            <div className="table-wrapper">
                <table>
                    <thead className={theme.mode}>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>TOTAL SPEND</th>
                        <th>TOTAL ORDERS</th>
                        <th>LOCATION</th>
                    </thead>
                    {
                        dataCustomer.map((item) => (                   
                            <tbody key={item.id}>
                                <tr>
                                    <td>{item.id}<span></span></td>
                                    <td><span>{item.name}</span></td>
                                    <td><span>{item.email}</span></td>
                                    <td><span>{item.total_spend}</span></td>
                                    <td><span>{item.total_orders}</span></td>
                                    <td><span>{item.location}</span></td>
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

export default CustomersTable;