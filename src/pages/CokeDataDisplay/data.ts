/*
 * @Descripttion: 
 * @version: 
 * @Author: yuanyun
 * @Date: 2022-02-22 08:11:12
 * @LastEditors: yuanyun
 * @LastEditTime: 2023-03-13 09:12:46
 */
const getRandom = (n: number, m: number) => {
    const num = Math.floor(Math.random() * (m - n + 1) + n)
    return num
}
export const defectListData = [
    { city: '深圳#线路[A0071]', date: '2022/1/25 12:17', type: '基础类' },
    { city: '深圳#线路[A0072]', date: '2022/1/25 12:17', type: '杆塔类' },
    { city: '深圳#线路[A0073]', date: '2022/1/25 12:17', type: '导地线类' },
    { city: '深圳#线路[A0074]', date: '2022/1/25 12:17', type: '小金具类' },
    { city: '深圳#线路[A0075]', date: '2022/1/25 12:17', type: '大金具类' },
    { city: '深圳#线路[A0076]', date: '2022/1/25 12:17', type: '绝缘子类' },
    { city: '深圳#线路[A0077]', date: '2022/1/25 12:17', type: '绝缘子类' },
    { city: '深圳#线路[A0078]', date: '2022/1/25 12:17', type: '绝缘子类' },
    { city: '深圳#线路[A0079]', date: '2022/1/25 12:17', type: '通道环境类' },
    { city: '深圳#线路[A0080]', date: '2022/1/25 12:17', type: '附属设施类' },
    { city: '深圳#线路[A0081]', date: '2022/1/25 12:17', type: '接地装置类' },
    { city: '深圳#线路[A0082]', date: '2022/1/25 12:17', type: '接地装置类' },
    { city: '深圳#线路[A0083]', date: '2022/1/25 12:17', type: '导地线类' },
    { city: '深圳#线路[A0084]', date: '2022/1/25 12:17', type: '大金具类' },
    { city: '深圳#线路[A0085]', date: '2022/1/25 12:17', type: '绝缘子类' },
    { city: '深圳#线路[A0071]', date: '2022/1/25 12:17', type: '基础类' },
    { city: '深圳#线路[A0072]', date: '2022/1/25 12:17', type: '杆塔类' },
    { city: '深圳#线路[A0073]', date: '2022/1/25 12:17', type: '导地线类' },
    { city: '深圳#线路[A0074]', date: '2022/1/25 12:17', type: '小金具类' },
    { city: '深圳#线路[A0075]', date: '2022/1/25 12:17', type: '大金具类' },
    { city: '深圳#线路[A0076]', date: '2022/1/25 12:17', type: '绝缘子类' },
    { city: '深圳#线路[A0077]', date: '2022/1/25 12:17', type: '绝缘子类' },
    { city: '深圳#线路[A0078]', date: '2022/1/25 12:17', type: '绝缘子类' },
    { city: '深圳#线路[A0079]', date: '2022/1/25 12:17', type: '通道环境类' },
    { city: '深圳#线路[A0080]', date: '2022/1/25 12:17', type: '附属设施类' },
    { city: '深圳#线路[A0081]', date: '2022/1/25 12:17', type: '接地装置类' },
    { city: '深圳#线路[A0082]', date: '2022/1/25 12:17', type: '接地装置类' },
    { city: '深圳#线路[A0083]', date: '2022/1/25 12:17', type: '导地线类' },
    { city: '深圳#线路[A0084]', date: '2022/1/25 12:17', type: '大金具类' },
    { city: '深圳#线路[A0085]', date: '2022/1/25 12:17', type: '绝缘子类' },
]

export const areaTable = [
    { name: '广州', value: getRandom(100, 200) },
    { name: '深圳', value: getRandom(100, 200) },
    { name: '佛山', value: getRandom(100, 200) },
    { name: '东莞', value: getRandom(100, 200) },
    { name: '珠海', value: getRandom(100, 200) },
    { name: '汕头', value: getRandom(100, 200) },
    { name: '潮州', value: getRandom(100, 200) },
    { name: '湛江', value: getRandom(100, 200) },
    { name: '茂名', value: getRandom(100, 200) },
    { name: '阳江', value: getRandom(100, 200) },
    { name: '云浮', value: getRandom(100, 200) },
    { name: '韶关', value: getRandom(100, 200) },
    { name: '清远', value: getRandom(100, 200) },
    { name: '梅州', value: getRandom(100, 200) },
    { name: '河源', value: getRandom(100, 200) }
]

export const defectCategoryData = [
    { name: '基础类', value: 1735, percent: 68, percentType: 'plus' },
    { name: '杆塔类', value: 108, percent: 68, percentType: 'plus' },
    { name: '导地线类', value: 234, percent: 68, percentType: 'minus' },
    { name: '绝缘子类', value: 1735, percent: 68, percentType: 'minus' },
    { name: '大金具类', value: 1735, percent: 68, percentType: 'plus' },
    { name: '小金具类', value: 1735, percent: 68, percentType: 'plus' },
    { name: '接地装置类', value: 1735, percent: 68, percentType: 'plus' },
    { name: '通道环境类', value: 1735, percent: 68, percentType: 'plus' },
    { name: '附属设施类', value: 1735, percent: 68, percentType: 'minus' },
]

export const lineChartsData = [
    { month: '01/01', area: '珠三角', value: 320 },
    { month: '01/01', area: '粤东', value: 390 },
    { month: '02/01', area: '珠三角', value: 320 },
    { month: '02/01', area: '粤东', value: 390 },
    { month: '03/01', area: '珠三角', value: 320 },
    { month: '03/01', area: '粤东', value: 390 },
    { month: '04/01', area: '珠三角', value: 320 },
    { month: '04/01', area: '粤东', value: 390 },
    { month: '05/01', area: '珠三角', value: 320 },
    { month: '05/01', area: '粤东', value: 390 },
    { month: '06/01', area: '珠三角', value: 320 },
    { month: '06/01', area: '粤东', value: 390 },
    { month: '07/01', area: '珠三角', value: 320 },
    { month: '07/01', area: '粤东', value: 390 },
    { month: '08/01', area: '珠三角', value: 320 },
    { month: '08/01', area: '粤东', value: 390 },
    { month: '09/01', area: '珠三角', value: 320 },
    { month: '09/01', area: '粤东', value: 390 },
    { month: '10/01', area: '珠三角', value: 320 },
    { month: '10/01', area: '粤东', value: 390 },
    { month: '11/01', area: '珠三角', value: 320 },
    { month: '11/01', area: '粤东', value: 390 },
    { month: '12/01', area: '珠三角', value: 320 },
    { month: '12/01', area: '粤东', value: 390 },

    { month: '01/01', area: '粤西', value: 200 },
    { month: '01/01', area: '粤北', value: 230 },
    { month: '02/01', area: '粤西', value: 200 },
    { month: '02/01', area: '粤北', value: 230 },
    { month: '03/01', area: '粤西', value: 200 },
    { month: '03/01', area: '粤北', value: 230 },
    { month: '04/01', area: '粤西', value: 200 },
    { month: '04/01', area: '粤北', value: 230 },
    { month: '05/01', area: '粤西', value: 200 },
    { month: '05/01', area: '粤北', value: 230 },
    { month: '06/01', area: '粤西', value: 200 },
    { month: '06/01', area: '粤北', value: 230 },
    { month: '07/01', area: '粤西', value: 200 },
    { month: '07/01', area: '粤北', value: 230 },
    { month: '08/01', area: '粤西', value: 200 },
    { month: '08/01', area: '粤北', value: 230 },
    { month: '09/01', area: '粤西', value: 200 },
    { month: '09/01', area: '粤北', value: 230 },
    { month: '10/01', area: '粤西', value: 200 },
    { month: '10/01', area: '粤北', value: 230 },
    { month: '11/01', area: '粤西', value: 200 },
    { month: '11/01', area: '粤北', value: 230 },
    { month: '12/01', area: '粤西', value: 200 },
    { month: '12/01', area: '粤北', value: 230 },
];

// export const radarChartData = [
//     { item: '基础类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
//     { item: '杆塔类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
//     { item: '导地线类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
//     { item: '绝缘子类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
//     { item: '大金具类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
//     { item: '小金具类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
//     { item: '接地装置类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
//     { item: '通道环境类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
//     { item: '附属设施类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
// ]

export const radarChartData = [
    { item: '共发布计划', '计划统计': 843, },
    { item: '共完成计划', '计划统计': 431, },
    { item: '当日计划', '计划统计': 370, },
    { item: '已完成', '计划统计': 270, },
    { item: '正在执行', '计划统计': 470, },
    // { item: '接地装置类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
    // { item: '通道环境类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
    // { item: '附属设施类', '珠三角': 70, '粤东': 30, '粤西': 50, '粤北': 65 },
]

export const pieChartData = [
    { item: '基础类', count: 40, percent: 0.4 },
    { item: '杆塔类', count: 21, percent: 0.21 },
    { item: '导地线类', count: 17, percent: 0.17 },
    { item: '绝缘子类', count: 13, percent: 0.13 },
    { item: '大金具类', count: 13, percent: 0.13 },
    { item: '小金具类', count: 13, percent: 0.13 },
    { item: '接地装置类', count: 13, percent: 0.13 },
    { item: '通道环境类', count: 13, percent: 0.13 },
    { item: '附属设施类', count: 13, percent: 0.13 },
];

export const dountRoseData = [
    { type: '基础类', value: 41.8 },
    { type: '杆塔类', value: 38 },
    { type: '导地线类', value: 33.7 },
    { type: '绝缘子类', value: 30.7 },
    { type: '大金具类', value: 25.8 },
    { type: '小金具类', value: 31.7 },
    { type: '接地装置类', value: 33 },
    { type: '通道环境类', value: 46 },
    { type: '附属设施类', value: 46 },
];

export const dountData = [
    { item: '基础类', count: getRandom(100, 200), percent: 0.4 },
    { item: '杆塔类', count: getRandom(100, 200), percent: 0.21 },
    { item: '导地线类', count: getRandom(100, 200), percent: 0.17 },
    { item: '绝缘子类', count: getRandom(100, 200), percent: 0.13 },
    { item: '大金具类', count: getRandom(100, 200), percent: 0.13 },
    { item: '小金具类', count: getRandom(100, 200), percent: 0.13 },
    { item: '接地装置类', count: getRandom(100, 200), percent: 0.13 },
    { item: '通道环境类', count: getRandom(100, 200), percent: 0.13 },
    { item: '附属设施类', count: getRandom(100, 200), percent: 0.13 },
];

export const dountData2 = [
    { item: '基础类', count: getRandom(100, 200), percent: 0.4 },
    { item: '杆塔类', count: getRandom(100, 200), percent: 0.21 },
    { item: '导地线类', count: getRandom(100, 200), percent: 0.17 },
    { item: '绝缘子类', count: getRandom(100, 200), percent: 0.13 },
    { item: '大金具类', count: getRandom(100, 200), percent: 0.13 },
    { item: '小金具类', count: getRandom(100, 200), percent: 0.13 },
    { item: '接地装置类', count: getRandom(100, 200), percent: 0.13 },
    { item: '通道环境类', count: getRandom(100, 200), percent: 0.13 },
    { item: '附属设施类', count: getRandom(100, 200), percent: 0.13 },
];

export const waterWaveDatas = [
    { name: '基础类', percent: 40 },
    { name: '杆塔类', percent: 40 },
    { name: '导地线类', percent: 40 },
    { name: '绝缘子类', percent: 40 },
    { name: '大金具类', percent: 40 },
    { name: '小金具类', percent: 40 },
    { name: '接地装置类', percent: 40 },
    { name: '通道环境类', percent: 40 },
    { name: '附属设施类', percent: 40 }
]

