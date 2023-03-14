/*
 * @Descripttion: 
 * @version: 
 * @Author: yuanyun
 * @Date: 2022-02-22 13:03:26
 * @LastEditors: yuanyun
 * @LastEditTime: 2022-02-23 11:01:05
 */
import React, { useEffect } from 'react'
import styles from './index.less'
import { Chart } from '@antv/g2';

interface PieChartDataProps {
    item: string //  珠三角 粤东 粤西 粤北
    count: number
    percent: number
}

// interface LineChartDataType {
//     month: string
//     area: string
//     value: number
// }

const PieChart: React.FC<{ data: PieChartDataProps[] }> = ({ data }) => {


    let chart: any;

    const initChart = () => {

        chart = new Chart({
            container: 'pieChartContainer',
            width: 250,
            height: 250,
        });

        chart.coordinate('theta', {
            radius: 0.75,
        });

        chart.data(data);

        chart.legend(false); // 关闭图例

        chart.scale('percent', {
            formatter: (val: any) => {
                // eslint-disable-next-line no-param-reassign
                val = `${val * 100}%`;
                return val;
            },
        });

        chart.tooltip({
            showTitle: false,
            showMarkers: false,
        });

        chart
            .interval()
            .adjust('stack')
            .position('percent')
            .color('item')
            .label('percent', {
                offset: '-30%',
                style: {
                    textAlign: 'center',
                    fontSize: 12,
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, .45)',
                },
            })
            .tooltip('item*percent', (item: string, percent: any) => {
                // eslint-disable-next-line no-param-reassign
                percent = `${percent * 100}%`;
                return {
                    name: item,
                    value: percent,
                };
            });

        chart.interaction('element-active');
        chart.render();
    }

    useEffect(() => {
        initChart()
    }, [])

    return (
        <div id='pieChartContainer' className={styles.chartWrapper} />
    )
}

export default PieChart