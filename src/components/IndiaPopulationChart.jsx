import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const IndiaPopulationChart = () => {
    // Sample population data (2023 estimates in crores)
    const populationData = [
        { state: 'Uttar Pradesh', population: 23.9 },
        { state: 'Maharashtra', population: 12.5 },
        { state: 'Bihar', population: 12.3 },
        { state: 'West Bengal', population: 9.9 },
        { state: 'Madhya Pradesh', population: 8.7 },
        { state: 'Tamil Nadu', population: 7.9 },
        { state: 'Rajasthan', population: 7.7 },
        { state: 'Karnataka', population: 6.8 },
        { state: 'Gujarat', population: 6.7 },
        { state: 'Odisha', population: 4.6 },
    ];

    const [chartType, setChartType] = useState('bar');

    const barChartOptions = {
        chart: {
            type: 'bar',
            height: 500,
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: populationData.map(item => item.state),
            title: {
                text: 'Population (in Crores)',
            },
        },
        yaxis: {
            title: {
                text: 'States',
            },
        },
        title: {
            text: 'Indian States Population Distribution',
            align: 'center',
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return value + ' Crores';
                }
            }
        }
    };

    const pieChartOptions = {
        chart: {
            type: 'pie',
            height: 500,
        },
        labels: populationData.map(item => item.state),
        title: {
            text: 'Population Percentage Distribution',
            align: 'center',
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return value + ' Crores';
                }
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    const series = chartType === 'bar'
        ? [{
            name: 'Population',
            data: populationData.map(item => item.population)
        }]
        : populationData.map(item => item.population);

    return (
        <div className="container mx-auto p-6">
            <div className="mb-4 flex gap-4 justify-center">
                <button
                    onClick={() => setChartType('bar')}
                    className={`px-4 py-2 rounded ${chartType === 'bar' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                >
                    Bar Chart
                </button>
                <button
                    onClick={() => setChartType('pie')}
                    className={`px-4 py-2 rounded ${chartType === 'pie' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                >
                    Pie Chart
                </button>
            </div>

            <ReactApexChart
                options={chartType === 'bar' ? barChartOptions : pieChartOptions}
                series={series}
                type={chartType}
                height={500}
                className="bg-white p-4 rounded-lg shadow-lg"
            />

            <div className="mt-4 text-gray-600 text-sm">
                <p>* Population data in crores (1 crore = 10 million)</p>
                <p>* Data based on 2023 estimates</p>
            </div>
        </div>
    );
};

export default IndiaPopulationChart;