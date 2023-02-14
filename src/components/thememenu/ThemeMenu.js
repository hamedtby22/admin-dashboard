import React, {useRef,useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';

//data
import { settings } from '../../router'

//redux
import {setColorSetting,setModeSetting} from '../../redux/action/themeAction';

//styles
import './theme-menu.scss'

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {

            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const ThemeMenu = () => {

    const [currMode, setcurrMode] = useState('light')
    const [currColor, setcurrColor] = useState('purple')

    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);

    const menu_ref = useRef(null)
    const menu_toggle_ref = useRef(null)

    clickOutsideRef(menu_ref, menu_toggle_ref)

    const setMode = mode => {
        console.log(mode);
        setcurrMode(mode.id)
        localStorage.setItem('themeMode', mode.class)
        dispatch(setModeSetting(mode.class))
    }

    const setColor = color => {
        setcurrColor(color.id)
        localStorage.setItem('colorMode', color.class)
        dispatch(setColorSetting(color.class))
    }
    useEffect(() => {
        
        const themeClass = settings.mode.find(e => e.class === localStorage.getItem('themeMode', 'theme-mode-light'))
        const colorClass = settings.color.find(e => e.class === localStorage.getItem('colorMode', 'theme-mode-light'))

        if (themeClass !== undefined) setcurrMode(themeClass.id)
        if (colorClass !== undefined) setcurrColor(colorClass.id)

        dispatch(setModeSetting(themeClass))
        dispatch(setColorSetting(colorClass))

    }, [dispatch]);
    
    return (
        <div className='dropdown'>
            <button ref={menu_toggle_ref} className="dropdown__toggle">
                <i className='bx bx-palette'></i>
            </button>
            <div ref={menu_ref} className={`${theme.mode} dropdown__content`}>
                <span>Choose Mode</span>
                <ul className="mode-list">
                    {
                        settings.mode.map((item, index) => (
                            <li key={index} onClick={() => setMode(item)}>
                                <div className={`mode-list__color ${item.background} ${item.id === currMode ? 'active' : ''}`}>
                                    <i className='bx bx-check'></i>
                                </div>
                                <span>{item.content}</span>
                            </li>
                        ))
                    }
                </ul>
                <span>Choose Color</span>
                <ul className="mode-list">
                        {
                            settings.color.map((item, index) => (
                                <li key={index} onClick={() => setColor(item)}>
                                    <div className={`mode-list__color ${item.background} ${item.id === currColor ? 'active' : ''}`}>
                                        <i className='bx bx-check'></i>
                                    </div>
                                    <span>{item.content}</span>
                                </li>
                            ))
                        }
                    </ul>
            </div>
        </div>
    )
}
export default ThemeMenu













// <div ref={menu_ref} className="theme-menu">
//                 <h4>Theme settings</h4>
//                 <button className="theme-menu__close" onClick={() => closeMenu()}>
//                     <i className='bx bx-x'></i>
//                 </button>
//                 <div className="theme-menu__select">
//                     <span>Choose mode</span>
//                     <ul className="mode-list">
//                         {
//                             mode_settings.map((item, index) => (
//                                 <li key={index} onClick={() => setMode(item)}>
//                                     <div className={`mode-list__color ${item.background} ${item.id === currMode ? 'active' : ''}`}>
//                                         <i className='bx bx-check'></i>
//                                     </div>
//                                     <span>{item.name}</span>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//                 <div className="theme-menu__select">
//                     <span>Choose color</span>
//                     <ul className="mode-list">
//                         {
//                             color_settings.map((item, index) => (
//                                 <li key={index} onClick={() => setColor(item)}>
//                                     <div className={`mode-list__color ${item.background} ${item.id === currColor ? 'active' : ''}`}>
//                                         <i className='bx bx-check'></i>
//                                     </div>
//                                     <span>{item.name}</span>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//             </div>