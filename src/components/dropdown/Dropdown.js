import React,{useRef,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';

//redux
import { setColorSetting,setModeSetting } from '../../redux/action/themeAction';

//styles
import './dropdown.scss';

const clickOutsideRef = (content_ref, toggle_ref) => {
    
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const Dropdown = props => {
    
    const theme = useSelector(state =>state.theme);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(setModeSetting(themeClass))
        dispatch(setColorSetting(colorClass))

    },[dispatch])
    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)
    
    return (
        <div className='dropdown'>
            
            <button ref={dropdown_toggle_el} className='dropdown__toggle' >
                {
                    props.icon ? <i className={props.icon || props.background}></i> : ''
                }
                {
                    props.badge ? <span className={`dropdown__toggle-badge ${theme.color}`}>{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>

            <div ref={dropdown_content_el} className={`${theme.mode} dropdown__content`} >
                {
                    props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                }
                
                {
                    props.renderFooter ? (
                        <div className="dropdown__footer">
                            {props.renderFooter()}
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Dropdown