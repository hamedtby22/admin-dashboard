import React from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,Title,Tooltip,Legend, BarElement} from 'chart.js';
import { Bar } from 'react-chartjs-2';

//components
import SummaryBox from '../components/box/SummaryBox';
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } 
    from '../components/dashboard-wrapper/DashboardWrapper';
import { SummaryBoxSpecial } from '../components/box/SummaryBox';
import Box from '../components/box/Box';
import TotallyList from '../components/totally/TotallyList';
import RevenueChannel from '../components/revenue-channel/RevenueChannel';
import DashboardTable from '../components/table/DashboardTable';
import CalenderTable from '../components/table/CalenderTable';

//data
import {data} from '../router';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    
    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className='row'>
                    <div className='col-8 col-md-12'>
                        <div className='row'>
                            {
                                data.summary.map((item,index) => (
                                    <div key={`summary-${index}`} className='col-6 col-md-6 col-sm-12 '>
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-4 hide-md'>
                        <SummaryBoxSpecial item={data.revenueSummary} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <Box>
                            <RevenueByMonthChart />
                        </Box>
                    </div>                
                </div>
                <div className='row'>
                    <div className='col-7 col-md-12'>
                        <Box>
                            <DashboardTable />
                        </Box>
                    </div>
                    <div className='col-5 col-md-12'>
                        <Box>
                            <CalenderTable />
                        </Box>
                    </div>              
                </div>
            </DashboardWrapperMain>
            <DashboardWrapperRight>
                <div>
                    <div className='mb'>Totally</div>
                    <div>
                        <TotallyList />
                    </div>
                    <div className='mb'>Revenue By Channel</div>
                    <div className='mb'>
                        <RevenueChannel />
                    </div>
                </div>
            </DashboardWrapperRight>
        </DashboardWrapper>
    );
};

export default Dashboard;


export const RevenueByMonthChart = () => {

    const chartOptions = {
        
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            yAxes: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor:'#2D83B5',
                borderRadius: 20,
                borderSkipped: 'bottom'
            }
        }
    }

    const chartData = {
        labels: data.revenueByMonths.labels,
        datasets: [
            {
                label: 'Revenue',
                data: data.revenueByMonths.data
            }
        ]
    }

    return (
        <>
            <div className='title mb'>
                Revenue By Months
            </div>
            <div >
                <Bar data={chartData} options={chartOptions} height={`300px`} />
            </div>
            
        </>
    )
}