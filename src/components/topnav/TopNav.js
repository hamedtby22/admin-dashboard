import React,{useState,useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

//components
import Dropdown from '../dropdown/Dropdown';
import ThemeMenu from '../thememenu/ThemeMenu';
//data
import { userData } from '../../router';
import { notifications } from '../../router';

//redux
import { setColorSetting,setModeSetting } from '../../redux/action/themeAction';

//img
import avatar from '../../assets/avatar.svg';

//styles
import './topnav.scss';

const TopNav = () => {
    const [value,setValue] = useState('');
    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);
    const location = useLocation();

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(setModeSetting(themeClass))
        dispatch(setColorSetting(colorClass))

    },[dispatch])

    const openSidebar = () => {
        document.body.classList.add('sidebar-open')
    }

    const handleSearch = (event) => {
        const search = event.target.value;
        setValue(search);
    }

    const handleDelete = () => {
        setValue('')
    }

    const currentUser = {
        display_name: 'hamed Talebi',
        image: avatar
    }

    const renderUserToggle = (user) => (
        <div className="top-nav__right-user">
            <div className="top-nav__right-user__image">
                <img src={user.image} alt="" />
            </div>
            <div className="top-nav__right-user__name">
                {user.display_name}
            </div>
        </div>
    )

    const renderUserMenu =(item, index) => (
        <Link to='/' key={index}>
            <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>
    )

    const renderNotificationItem = (item, index) => (
        <div className="notification-item" key={index}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    )

    return (
        <div className={`top-nav ${theme.mode}`}>
            <div className='menu-toggle' onClick={openSidebar}>
               <i className='bx bx-menu-alt-left' /> 
            </div>
            <div className='top-nav__left'>
                <input className={theme.mode} value={value} onChange={handleSearch} type='text' placeholder='Search...' />
                <i className='bx bx-search'></i>
                {
                    value.length > 0 && <i class='bx bx-x' onClick={handleDelete}></i>
                }
            </div>
            <div className={location.pathname !=='/' ? 'top-nav__right' :'top-nav__Mright' }> 
                <div className="top-nav__right__item">
                    <Dropdown
                        customToggle={() => renderUserToggle(currentUser)}
                        contentData={userData}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>    
                <div className="top-nav__right__item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                    />
                </div>  
                
                <div className="top-nav__right__item">
                        <ThemeMenu />
                </div> 
            </div>   
        </div>
    );
};

export default TopNav;