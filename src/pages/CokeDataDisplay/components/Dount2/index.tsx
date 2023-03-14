/*
 * @Descripttion: 
 * @version: 
 * @Author: yuanyun
 * @Date: 2022-02-22 13:03:26
 * @LastEditors: yuanyun
 * @LastEditTime: 2022-03-02 14:40:31
 */
import React, { useState, useEffect } from 'react'
import styles from './index.less'
import { Chart } from '@antv/g2';
import { useInterval } from 'ahooks';

interface DonutRosePropsType {
    count: number
    percent: number
    item: string //  9类：基础类 杆塔类 导地线类 绝缘子类 大金具类 小金具类 接地装置类 通道环境类 附属设施类
}

// interface LineChartDataType {
//     month: string
//     area: string
//     value: number
// }
let chart: any;
let interval: any;
let lastItem: null;
let innerView: any;
let count = 0;

const Donut: React.FC<{ data: DonutRosePropsType[] }> = ({ data }) => {

    const [dountInterval, setDountInterval] = useState<any>(3000)

    // 修改状态时不仅要修改当前项为active，也要记得清空其他项的active状态
    function changeStatus(i: number) {
        if (i >= 1) {
            // 这里一定要用自带的setState方法，而不要直接变成true
            interval.elements[i].setState('active', true)
            interval.elements[i].stateStatus = true
            // 这里一定要用自带的clearStates方法，而不要直接变成false
            interval.elements[(i - 1)].clearStates()
            interval.elements[(i - 1)].stateStatus = false
            const state = interval.elements[i].states[0]
            const { stateStatus } = interval.elements[i]
            const eledata = interval.elements[i].data
            if (state === 'active') {
                if (stateStatus) {
                    // 更新 Annotation
                    updateAnnotation(eledata);
                } else {
                    // 隐藏 Annotation
                    clearAnnotation();
                }
            }
        } else {
            // 临界情况单独考虑
            interval.elements[i].setState('active', true)
            interval.elements[i].stateStatus = true
            interval.elements[8].clearStates()
            interval.elements[8].stateStatus = false
            const state = interval.elements[i].states[0]
            const { stateStatus } = interval.elements[i]
            const eledata = interval.elements[i].data
            if (state === 'active') {
                if (stateStatus) {
                    // 更新 Annotation
                    updateAnnotation(eledata);
                } else {
                    // 隐藏 Annotation
                    clearAnnotation();
                }
            }
        }
    }

    // 绘制 annotation
    function updateAnnotation(newData: any) {
        if (newData.item !== lastItem) {
            innerView.annotation().clear(true);
            innerView
                .annotation()
                .text({
                    position: ['51%', '50%'],
                    content: newData.item,
                    style: {
                        fontSize: 18,
                        fill: '#fff',
                        textAlign: 'center',
                    },
                    offsetY: -20,
                })
                .text({
                    position: ['51%', '50%'],
                    content: newData.count,
                    style: {
                        fontSize: 20,
                        fill: '#fff',
                        textAlign: 'center',
                    },
                    offsetX: -10,
                    offsetY: 20,
                })
                .text({
                    position: ['49%', '50%'],
                    content: '个',
                    style: {
                        fontSize: 18,
                        fill: '#fff',
                        textAlign: 'center',
                    },
                    offsetY: 20,
                    offsetX: 20,
                });
            innerView.render(true);
            lastItem = newData.item;
        }
    }

    // 清空 annotation
    function clearAnnotation() {
        innerView.annotation().clear(true);
        innerView.render(true);
        lastItem = null;
    }


    const initChart = () => {
        chart = new Chart({
            container: 'donutContainer2',
            width: 250,
            height: 250,
            padding: [0, 10, 0, 0]
        });
        console.log(chart)
        // 新建一个 view 用来单独渲染Annotation
        innerView = chart.createView();
        chart.coordinate('theta', {
            radius: 0.75,
            innerRadius: 0.8,
        });

        chart.data(data);

        chart.scale('percent', {
            formatter: (val: any) => {
                // eslint-disable-next-line no-param-reassign
                val = `${val * 100}%`;
                return val;
            },
        });

        chart.tooltip(false);

        // 声明需要进行自定义图例字段： 'item'
        chart.legend(false);

        interval = chart
            .interval()
            .adjust('stack')
            .position('percent')
            .color('item')
            .style({
                fillOpacity: 1,
            })
            .state({
                active: {
                    style: (element: any) => {
                        const { shape } = element;
                        return {
                            lineWidth: 10,
                            stroke: shape.attr('fill'),
                            strokeOpacity: shape.attr('fillOpacity'),
                        };
                    },
                },
            });

        // 移除图例点击过滤交互
        // chart.removeInteraction('legend-filter');
        // chart.interaction('element-active');
        chart.theme({ "styleSheet": { "brandColor": "#B8E1FF", "paletteQualitative10": ["#B8E1FF", "#9AC5FF", "#7DAAFF", "#5B8FF9", "#3D76DD", "#085EC0", "#0047A5", "#00318A", "#001D70"], "paletteQualitative20": ["#B8E1FF", "#9AC5FF", "#7DAAFF", "#5B8FF9", "#3D76DD", "#085EC0", "#0047A5", "#00318A", "#001D70"] } });

        chart.render();

        // 监听 element 上状态的变化来动态更新 Annotation 信息
        // chart.on('element:statechange', (ev: any) => {
        //     const { state, stateStatus, element } = ev.gEvent.originalEvent;
        //     // 本示例只需要监听 active 的状态变化
        //     if (state === 'active') {
        //         const d = element.getData();
        //         if (stateStatus) {
        //             // 更新 Annotation
        //             updateAnnotation(d);
        //         } else {
        //             // 隐藏 Annotation
        //             clearAnnotation();
        //         }
        //     }
        // });

        // 监听 element 上状态的变化来动态更新 Annotation 信息
        chart.on('element:mouseover', (ev: any) => {
            console.log(ev)
            // clearAnnotation()
            // setDountInterval(undefined)
        });
    }

    useEffect(() => {
        initChart()
        return () => {
            setDountInterval(undefined)
        };
    }, [])

    useInterval(() => {
        // 定时切换
        if (count > 8) {
            count = 0
        }
        changeStatus(count)
        count += 1
    }, dountInterval)

    return (
        <div id='donutContainer2' className={styles.chartWrapper} />
    )
}

export default Donut