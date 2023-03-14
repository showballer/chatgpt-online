/*
 * @Descripttion: 
 * @version: 
 * @Author: yuanyun
 * @Date: 2022-02-22 13:03:26
 * @LastEditors: yuanyun
 * @LastEditTime: 2022-02-23 14:11:57
 */
import React, { useEffect } from 'react'
import styles from './index.less'
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';

interface RadarChartPropsType {
    item: string //  缺陷类别：基础类 杆塔类 导地线类 绝缘子类 大金具类 小金具类 接地装置类 通道环境类 附属设施类
    '珠三角'?: number
    '粤东'?: number
    '粤西'?: number
    '粤北'?: number
}

// interface LineChartDataType {
//     month: string
//     area: string
//     value: number
// }

const RadarChart: React.FC<{ data: RadarChartPropsType[] }> = ({ data }) => {


    let chart: any;

    const handleData = (source: RadarChartPropsType[]) => {
        const { DataView } = DataSet;
        const dv = new DataView().source(source);
        dv.transform({
            type: 'fold',
            // fields: ['珠三角', '粤东', '粤西', '粤北'], // 展开字段集
            fields: ['计划统计'], // 展开字段集
            key: 'area', // key字段
            value: 'value', // value字段
        });
        return dv
    }

    const initChart = () => {

        chart = new Chart({
            container: 'radarChartContainer',
            width: 360,
            height: 360,
            padding: [10, 30, 10, 30]
        });

        chart.data(handleData(data).rows);

        chart.scale('value', {
            min: 0,
        });
        chart.coordinate('polar', {
            radius: 0.8,
        });
        chart.tooltip({
            shared: true,
            showCrosshairs: true,
            crosshairs: {
                line: {
                    style: {
                        lineDash: [4, 4],
                        stroke: '#333'
                    }
                }
            }
        });
        chart.axis('item', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    style: {
                        lineDash: null,
                    },
                },
            },
        });
        chart.axis('value', {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    type: 'line',
                    style: {
                        lineDash: null,
                    },
                },
            },
        });

        chart
            .line()
            .position('item*value')
            .color('area')
            .size(2);
        chart
            .point()
            .position('item*value')
            .color('area')
            .shape('circle')
            .size(4)
            .style({
                stroke: '#fff',
                lineWidth: 1,
                fillOpacity: 1,
            });
        chart
            .area()
            .position('item*value')
            .color('area');
        chart.render();

    }

    useEffect(() => {
        initChart()
    }, [])

    return (
        <div id='radarChartContainer' className={styles.chartWrapper} />
    )
}

export default RadarChart