import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';

//redux
import { setColorSetting,setModeSetting } from '../../redux/action/themeAction';

//data
import {sidebarItems} from '../../router'

//img
import digital from '../../assets/digital.png';

//styles
import './sidebar.scss'

const Sidebar = () => {
    
    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);
    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(setModeSetting(themeClass))
        dispatch(setColorSetting(colorClass))

    },[dispatch])
    
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sidebarItems.findIndex(item => item.section === curPath)
        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
        <div className={`sidebar ${theme.mode}`}>
            <div className="sidebar__logo">
                <img src={digital} alt='agrin-logo' />
                <div className="sidebar-close" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebarItems.map((nav, index) => (
                        <Link to={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && `active ${theme.color}`}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar__menu__item">
                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-log-out'></i>
                    </div>
                    <div className="sidebar__menu__item__txt">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar