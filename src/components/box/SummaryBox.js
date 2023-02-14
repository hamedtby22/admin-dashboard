import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'

//components
import Box from './Box';
import colors from '../../assets/color/colors';

//redux
import {setModeSetting } from '../../redux/action/themeAction';

//styles
import './summarybox.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
const SummaryBox = ({item}) => {

    const dispatch = useDispatch();
    const theme = useSelector(state =>state.theme);

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
        dispatch(setModeSetting(themeClass))
    },[dispatch])

    return (
        <Box>
            <div className={`summary-box ${theme.mode}`}>
                <div className='summary-box__info'>
                    <div className='summary-box__info__title'>
                        <div>{item.title}</div>
                        <span>{item.subtitle}</span>
                    </div>
                    <div className='summary-box__info__value'>
                        {item.value}
                    </div>
                </div>
                <div className='summary-box__chart'>
                <CircularProgressbarWithChildren
                        value={item.percent}
                        strokeWidth={10}
                        styles={buildStyles({
                            pathColor: item.percent < 50 ? colors.red : colors.green,
                            trailColor: 'transparent',
                            strokeLinecap: 'round'
                        })}
                    >
                        <div className="summary-box__chart__count">
                            {item.percent}%
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </Box>
    );
};

export default SummaryBox;


export const SummaryBoxSpecial = ({item}) => {

    const chartOptions = {
        responsive: true,
        scales: {
            xAxis: {
                display: false
            },
            yAxis: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point: {
                radius: 5
            }
        },
        layout: {
            padding: {
                top: 5,
                left: 15,
                right: 15,
                bottom: 10
            }
        }
    }

    const chartData = {
        labels: item.chartData.labels,
        datasets: [
            {
                label: 'Revenue',
                data: item.chartData.data,
                borderColor: '#fff',
                tension: 0.5
            }
        ]
    }

    return(
    <Box fullheight color>
        <div className='summary-box-special'>
            <div className='summary-box-special__title'>
                {item.title}
            </div>
            <div className='summary-box-special__value'>
                {item.value}
            </div>
            <div className='summary-box-special__chart'>
                <Line options={chartOptions} data={chartData} width='250px' />
            </div>
        </div>
    </Box>
    )}