import React,{useEffect} from 'react';

//redux
import { useSelector,useDispatch } from 'react-redux';

//data
import { setModeSetting } from '../../redux/action/themeAction';

//styles
import './dashboardwrapper.scss';

const DashboardWrapper = (props) => {
    return (
        <div className='dashboard-wrapper'>
            {props.children}
        </div>
    );
};

export default DashboardWrapper;


export const DashboardWrapperMain = (props) => {
    return (
        <div className='dashboard-wrapper__main'> 
            {props.children}
        </div>
    );
};

export const DashboardWrapperRight = (props) => {

    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        dispatch(setModeSetting(themeClass))
    },[dispatch])

    return (
        <div className={`dashboard-wrapper__right ${theme.mode}`}>
            {props.children}
        </div>
    );
};