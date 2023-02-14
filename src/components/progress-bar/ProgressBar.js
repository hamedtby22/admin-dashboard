import { useEffect,useRef } from "react";

//styles
import './progress-bar.scss';

const ProgressBar = ({value}) => {

    const refProgress = useRef();

    useEffect(() => {
        refProgress.current.style.width = `${value}%`
    },[]);

    return (
        <div ref={refProgress} className='progress-bar'>
            <div className={`${value > 50 ? 'progress-bar__innerG' : 'progress-bar__innerR'}`} ></div>
        </div>
    );
};

export default ProgressBar;