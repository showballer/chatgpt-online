/*
 * @Descripttion: 
 * @version: 
 * @Author: yuanyun
 * @Date: 2022-02-16 14:25:25
 * @LastEditors: yuanyun
 * @LastEditTime: 2022-02-16 15:04:28
 */
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useInterval } from 'ahooks';


const Clock: React.FC = () => {
    const [interval, setInterval] = useState<any>(1000);
    const [clock, setClock] = useState(moment().format('LTS'));
    const [date, setDate] = useState(moment().format('L'));


    useInterval(() => {
        setClock(moment().format('LTS'))
        setDate(moment().format('L'))
    }, interval);

    useEffect(() => {
        return () => {
            setInterval(undefined)
        };
    }, []);

    return (
        <div style={{ width: 144, textAlign: 'center' }}>
            <div style={{ fontSize: 25 }}>{clock}</div>
            <div style={{ fontSize: 14 }}>{date}</div>
        </div>

    )
}

export default Clock