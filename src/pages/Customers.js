import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

//components
import CustomersTable from '../components/table/CustomersTable';

//data
import { customersItems } from '../router';
import { setModeSetting } from '../redux/action/themeAction';

const Customers = () => {

    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        dispatch(setModeSetting(themeClass))
    },[dispatch])

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className={`card ${theme.mode}`}>
                        <div className="card__body">
                            <CustomersTable
                                limit='10'
                                bodyData={customersItems}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers