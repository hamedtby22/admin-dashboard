import React,{useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

//data
import { setModeSetting } from '../redux/action/themeAction';

//components
import Sidebar from '../components/sidebar/Sidebar';
import TopNav from '../components/topnav/TopNav';

//styles
import './layout.scss';

const Layout = () => {

    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        dispatch(setModeSetting(themeClass))
    },[dispatch])

    return (
        <div>
            <Sidebar />
            <div className={`main ${theme.mode}`}>
                <div className={`main__content ${theme.mode}`}>
                    <TopNav />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;