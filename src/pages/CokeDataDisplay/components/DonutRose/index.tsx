/*
 * @Descripttion: 
 * @version: 
 * @Author: yuanyun
 * @Date: 2022-02-22 13:03:26
 * @LastEditors: yuanyun
 * @LastEditTime: 2022-02-23 15:07:59
 */
import React, { useEffect } from 'react'
import styles from './index.less'
import { Chart } from '@antv/g2';

interface DonutRosePropsType {
    type: string //  9类：基础类 杆塔类 导地线类 绝缘子类 大金具类 小金具类 接地装置类 通道环境类 附属设施类
    value: number
}

// interface LineChartDataType {
//     month: string
//     area: string
//     value: number
// }

const DonutRose: React.FC<{ data: DonutRosePropsType[] }> = ({ data }) => {

    let chart: any;

    const initChart = () => {
        chart = new Chart({
            container: 'donutRoseContainer',
            // autoFit: true,
            height: 220,
            width: 240
        });
        chart.data(data);
        chart.coordinate('polar', {
            innerRadius: 0.2,
        });
        // chart.legend('type', {
        //     position: 'bottom',
        // });
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            showMarkers: false
        });
        chart.interaction('element-highlight');
        chart
            .interval()
            .position('type*value')
            .color('type')
            .style({
                lineWidth: 1,
                stroke: '#fff',
            });
        chart.theme({ "styleSheet": { "brandColor": "#B8E1FF", "paletteQualitative10": ["#B8E1FF", "#9AC5FF", "#7DAAFF", "#5B8FF9", "#3D76DD", "#085EC0", "#0047A5", "#00318A", "#001D70"], "paletteQualitative20": ["#B8E1FF", "#9AC5FF", "#7DAAFF", "#5B8FF9", "#3D76DD", "#085EC0", "#0047A5", "#00318A", "#001D70"] } });
        chart.render();
    }

    useEffect(() => {
        initChart()
    }, [])

    return (
        <div id='donutRoseContainer' className={styles.chartWrapper} />
    )
}

export default DonutRose