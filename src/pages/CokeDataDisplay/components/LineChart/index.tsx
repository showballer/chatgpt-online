/*
 * @Descripttion: 
 * @version: 
 * @Author: yuanyun
 * @Date: 2022-02-22 13:03:26
 * @LastEditors: yuanyun
 * @LastEditTime: 2023-03-13 09:14:08
 */
import React, { useEffect, useState } from 'react'
import styles from './index.less'
import { Chart } from '@antv/g2';
import { useInterval } from 'ahooks';

interface LineChartProps {
    data: any[]
}

// interface LineChartDataType {
//     month: string
//     area: string
//     value: number
// }
let chart: any;

const getRandom = (n: number, m: number) => {
    const num = Math.floor(Math.random() * (m - n + 1) + n)
    return num
}


const LineChart: React.FC<LineChartProps> = ({ data }) => {

    const [lineInterval, setLineInterval] = useState<any>(5000)


    const initChart = () => {

        chart = new Chart({
            container: 'lineChartContainer',
            autoFit: true,
            height: 160,
            padding: [70, 20, 30, 50]
        });

        chart.data(data);

        chart.scale({
            month: {
                range: [0, 1],
            },
            value: {
                nice: true,
            },
        });

        chart.tooltip({
            showCrosshairs: true,
            shared: true,
        });

        chart.legend('area', {
            position: 'top-right',
            padding: [30, 20, 0, 20]
        });

        chart.axis('month', {
            // label: {
            //   formatter: (val) => {
            //     return val + ' °C';
            //   },
            // },
            grid: {
                line: {
                    style: (_points: any, val: any) => {
                        if (!val) return null;
                        return { lineDash: [2, 2], stroke: '#323C48' }
                    }
                },
            },
            tickLine: {
                alignTick: true,
                length: 1
            }

        });

        chart.axis('value', {

            grid: {
                line: {
                    style: (_points: any, val: any) => {
                        if (!val) return null;
                        return { lineDash: [2, 2], stroke: '#323C48' }
                    }
                },
            },
            tickLine: {
                alignTick: true,
                length: 1
            }

        });

        chart
            .area()
            .position('month*value')
            .color('area')
            .shape('smooth');


        chart
            .line()
            .position('month*value')
            .color('area')
            .shape('smooth');

        chart.render();

    }

    useEffect(() => {
        initChart()
        return () => {
            setLineInterval(undefined)
        }
    }, [])

    useInterval(() => {
        const newData = [
            { month: '01/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '01/01', area: '粤东', value: getRandom(350, 400) },
            { month: '02/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '02/01', area: '粤东', value: getRandom(350, 400) },
            { month: '03/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '03/01', area: '粤东', value: getRandom(350, 400) },
            { month: '04/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '04/01', area: '粤东', value: getRandom(350, 400) },
            { month: '05/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '05/01', area: '粤东', value: getRandom(350, 400) },
            { month: '06/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '06/01', area: '粤东', value: getRandom(350, 400) },
            { month: '07/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '07/01', area: '粤东', value: getRandom(350, 400) },
            { month: '08/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '08/01', area: '粤东', value: getRandom(350, 400) },
            { month: '09/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '09/01', area: '粤东', value: getRandom(350, 400) },
            { month: '10/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '10/01', area: '粤东', value: getRandom(350, 400) },
            { month: '11/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '11/01', area: '粤东', value: getRandom(350, 400) },
            { month: '12/01', area: '珠三角', value: getRandom(350, 400) },
            { month: '12/01', area: '粤东', value: getRandom(350, 400) },

            { month: '01/01', area: '粤西', value: getRandom(300, 400) },
            { month: '01/01', area: '粤北', value: getRandom(300, 400) },
            { month: '02/01', area: '粤西', value: getRandom(300, 400) },
            { month: '02/01', area: '粤北', value: getRandom(300, 400) },
            { month: '03/01', area: '粤西', value: getRandom(300, 400) },
            { month: '03/01', area: '粤北', value: getRandom(300, 400) },
            { month: '04/01', area: '粤西', value: getRandom(300, 400) },
            { month: '04/01', area: '粤北', value: getRandom(300, 400) },
            { month: '05/01', area: '粤西', value: getRandom(300, 400) },
            { month: '05/01', area: '粤北', value: getRandom(300, 400) },
            { month: '06/01', area: '粤西', value: getRandom(300, 400) },
            { month: '06/01', area: '粤北', value: getRandom(300, 400) },
            { month: '07/01', area: '粤西', value: getRandom(300, 400) },
            { month: '07/01', area: '粤北', value: getRandom(300, 400) },
            { month: '08/01', area: '粤西', value: getRandom(300, 400) },
            { month: '08/01', area: '粤北', value: getRandom(300, 400) },
            { month: '09/01', area: '粤西', value: getRandom(300, 400) },
            { month: '09/01', area: '粤北', value: getRandom(300, 400) },
            { month: '10/01', area: '粤西', value: getRandom(300, 400) },
            { month: '10/01', area: '粤北', value: getRandom(300, 400) },
            { month: '11/01', area: '粤西', value: getRandom(300, 400) },
            { month: '11/01', area: '粤北', value: getRandom(300, 400) },
            { month: '12/01', area: '粤西', value: getRandom(300, 400) },
            { month: '12/01', area: '粤北', value: getRandom(300, 400) },
        ];
        chart.changeData(newData)
    }, lineInterval)

    return (
        <div id='lineChartContainer' className={styles.chartWrapper} />
    )
}

export default LineChart