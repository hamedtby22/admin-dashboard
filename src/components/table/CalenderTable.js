import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Calendar from 'react-calendar';

//redux
import { setColorSetting,setModeSetting } from '../../redux/action/themeAction';

//styles
import './calender-Table.scss';

const CalenderTable = () => {

    const [value, setValue] = useState(new Date());

    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);
    
    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        dispatch(setModeSetting(themeClass))
    },[dispatch])
    return (
        <div>
            <Calendar className={`${theme.mode}`} value={value} onChange={(d) => setValue(d)} />
        </div>
    );
};

export default CalenderTable;
