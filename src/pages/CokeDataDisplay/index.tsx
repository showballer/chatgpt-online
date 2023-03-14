/*
 * @Descripttion: 
 * @version: 
 * @Author: yuanyun
 * @Date: 2022-01-25 10:11:43
 * @LastEditors: yuanyun
 * @LastEditTime: 2023-03-13 09:52:38
 */
import React, { useEffect, useState } from 'react'
import styles from './index.less'
import { Row, Col } from 'antd'
import {
    PlusOutlined,
    MinusOutlined
} from '@ant-design/icons';
import Clock from './components/Clock';
import LineChart from './components/LineChart'
// import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
// import DonutRose from './components/DonutRose';
import Donut from './components/Dount';
import Donut2 from './components/Dount2';
// import { WaterWave } from '@/components/Charts';
import { useInterval } from 'ahooks';
import { useSize } from 'ahooks';
import { defectListData, areaTable, defectCategoryData, lineChartsData, radarChartData, dountData, dountData2 } from './data'
import TweenOne from 'rc-tween-one';


const Children = require('rc-tween-one/lib/plugin/ChildrenPlugin');


TweenOne.plugins.push(Children);

interface DefectCategoryDataType {
    name: string // 缺陷名称
    value: number // 缺陷数量
    percent: number // 同比增/减
    percentType: string // 同比类型
}

interface AreaTableDataType {
    name: string // 地名
    value: number // 缺陷总数
}

interface DefectListsType {
    city: string // 城市#编号
    date: string // 日期
    type: string // 缺陷类型
}

// interface WaterWaveProps {
//     name: string
//     percent: number
// }

let defectListCount = 0




const CokeDataDisplay: React.FC = () => {
    // const [areaTableInterval, setAreaTableInterval] = useState<any>(3000);
    // const [defectListInterval, setDefectListInterval] = useState<any>(1000)
    // const [defectListActive, setDefectListActive] = useState(false)
    // const [areaTableData, setAreaTableData] = useState<AreaTableDataType[]>(areaTable)
    // const [waterWaveData, setWaterWaveData] = useState<WaterWaveProps>({ name: '基础类', percent: 40 })
    // const [categoryData, setCategoryData] = useState(defectCategoryData)

    // const [areaTableUpdate, setAreaTableUpdate] = useState(false)
    const size = useSize(document.querySelector('body'))


    return (
        <div style={{
            transform: size?.width ? `scale(${size.width / 1920})` : `scale(1)`
        }} className={styles.datavWrapper}>

        </div >
    )
}

export default CokeDataDisplay