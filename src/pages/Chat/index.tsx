/*
 * @Descripttion: 
 * @version: 
 * @Author: yuanyun
 * @Date: 2023-03-03 13:34:30
 * @LastEditors: yuanyun
 * @LastEditTime: 2023-03-14 09:49:02
 */
import React, { useState, useRef, useEffect } from 'react'
import { Input, Row, Col, Button, Spin } from 'antd';
import lodash from 'lodash'
import { SendOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import { chat } from '@/services/chat';

import {
    PageContainer,
} from '@ant-design/pro-components';
import styles from './index.less'







const Chat: React.FC = () => {
    // const [flag, setFlag] = useState('')
    const [inputValue, setInputValue] = useState('')
    const contentRef = useRef(null)
    const [lists, setLists] = useState<any>([])
    // const [message, setMessage] = useState('')
    // const [showLoading, setShowLoading] = useState(true)
    // const [show, setShow] = useState(true)
    // console.log(inputValue)
    // console.log(message, 'msg')


    useEffect(() => {
        // const fakeRes = { "id": "chatcmpl-6rgvwYal4fNtKGCpXojIOBvh2EWSi", "object": "chat.completion", "created": 1678254440, "model": "gpt-3.5-turbo-0301", "usage": { "prompt_tokens": 9, "completion_tokens": 19, "total_tokens": 28 }, "choices": [{ "message": { "role": "assistant", "content": "\n\n你好，有什么可以帮助您的吗？" }, "finish_reason": "stop", "index": 0 }] }
        // const oriMsg = fakeRes.choices[0].message.content
        // console.log(oriMsg, 'orimsg')
        // const newMsg = fakeRes.choices[0].message.content.replace(/[\n]{0,2}/, '')
        // console.log(newMsg, 'newmsg')

    }, [1]);

    const addLists = (flag: string, value?: string) => {
        // setShowLoading(true)
        let items = lists;
        if (flag === 'ask') {
            items.push(
                <div key={lodash.random(1, 10000000000000)} style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', textAlign: 'end' }}>
                    <Row justify='end' align='top' gutter={20}>
                        <Col span={21}>
                            <Row justify='end'>
                                <div className={styles.chatBoxWrapper} style={{ borderRadius: 8, padding: '10px 20px', fontSize: 16, color: 'rgba(255, 255, 255, 1)', lineHeight: '1.5em', letterSpacing: 1 }}>
                                    {inputValue}
                                </div>
                            </Row>
                        </Col>
                        <Col span={1}>
                            <div style={{ marginTop: 2, width: 40, height: 40, borderRadius: 8, backgroundImage: 'url(/img/user.png)', backgroundSize: 'cover' }} />
                        </Col>
                    </Row>
                </div>,
            )
        }
        if (flag === 'answer') {
            items.push(
                <div key={lodash.random(1, 10000000000000)} style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', textAlign: 'start' }}>
                    <Row align='top' gutter={20}>
                        <Col span={1}>
                            <Row justify='end'>
                                <div style={{ marginTop: 2, width: 40, height: 40, borderRadius: 8, backgroundImage: 'url(/img/ai.png)', backgroundSize: 'cover' }} />
                            </Row>
                        </Col>
                        <Col span={21}>
                            <Row justify='start'>
                                {value ? (
                                    <pre key={lodash.random(1, 10000000000000)} className={styles.chatBoxWrapper} style={{ margin: 0, whiteSpace: 'pre-wrap', maxWidth: '100%', wordWrap: 'break-word', borderRadius: 8, padding: '10px 20px', fontSize: 16, color: 'rgba(255, 255, 255, 1)', lineHeight: '1.5em', letterSpacing: 1 }}>
                                        {value}
                                    </pre>
                                ) : (
                                    <Spin style={{ marginTop: 10 }} size="default" />
                                )}
                            </Row>
                        </Col>
                    </Row>
                </div>
            )
        }
        // setShow(true)
        setLists(() => { return [...items] })
    }


    // const renderAsk = () => {
    //     const divRef: any = contentRef.current
    //     console.log(divRef, 'divRef')
    //     const child =
    //         <div style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', textAlign: 'end' }}>
    //             <Row justify='end' align='top' gutter={20}>
    //                 <Col span={21}>
    //                     <Row justify='start'>
    //                         <span style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.75)', lineHeight: '1.5em', letterSpacing: 1 }}>
    //                             坯布生产是成品布前的重要一环，其质量直接影响后道工序的生产，并最终影响成品布质量。智能坯布检测解决方案利用机器视觉图像识别技术，可实时分辨织机上坯布中的断经、断纬等缺陷，通过机器验布代替传统人工验布方式，有效提高缺陷检测效率、提升产品品质、降低人力成本。
    //                             坯布生产是成品布前的重要一环，其质量直接影响后道工序的生产，并最终影响成品布质量。智能坯布检测解决方案利用机器视觉图像识别技术，可实时分辨织机上坯布中的断经、断纬等缺陷，通过机器验布代替传统人工验布方式，有效提高缺陷检测效率、提升产品品质、降低人力成本。
    //                             坯布生产是成品布前的重要一环，其质量直接影响后道工序的生产，并最终影响成品布质量。智能坯布检测解决方案利用机器视觉图像识别技术，可实时分辨织机上坯布中的断经、断纬等缺陷，通过机器验布代替传统人工验布方式，有效提高缺陷检测效率、提升产品品质、降低人力成本。
    //                             坯布生产是成品布前的重要一环，其质量直接影响后道工序的生产，并最终影响成品布质量。智能坯布检测解决方案利用机器视觉图像识别技术，可实时分辨织机上坯布中的断经、断纬等缺陷，通过机器验布代替传统人工验布方式，有效提高缺陷检测效率、提升产品品质、降低人力成本。
    //                             坯布生产是成品布前的重要一环，其质量直接影响后道工序的生产，并最终影响成品布质量。智能坯布检测解决方案利用机器视觉图像识别技术，可实时分辨织机上坯布中的断经、断纬等缺陷，通过机器验布代替传统人工验布方式，有效提高缺陷检测效率、提升产品品质、降低人力成本。
    //                         </span>
    //                     </Row>
    //                 </Col>
    //                 <Col span={1}>
    //                     <div style={{ marginTop: 2, width: 30, height: 30, borderRadius: 8, backgroundImage: 'url(/img/user.png)', backgroundSize: 'cover' }} />
    //                 </Col>
    //             </Row>
    //         </div>


    //     ReactDOM.createPortal(child, divRef);

    //     return (
    //         <div style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', textAlign: 'end' }}>
    //             <Row justify='end' align='top' gutter={20}>
    //                 <Col span={21}>
    //                     <Row justify='start'>
    //                         <span style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.75)', lineHeight: '1.5em', letterSpacing: 1 }}>
    //                             坯布生产是成品布前的重要一环，其质量直接影响后道工序的生产，并最终影响成品布质量。智能坯布检测解决方案利用机器视觉图像识别技术，可实时分辨织机上坯布中的断经、断纬等缺陷，通过机器验布代替传统人工验布方式，有效提高缺陷检测效率、提升产品品质、降低人力成本。
    //                             坯布生产是成品布前的重要一环，其质量直接影响后道工序的生产，并最终影响成品布质量。智能坯布检测解决方案利用机器视觉图像识别技术，可实时分辨织机上坯布中的断经、断纬等缺陷，通过机器验布代替传统人工验布方式，有效提高缺陷检测效率、提升产品品质、降低人力成本。
    //                             坯布生产是成品布前的重要一环，其质量直接影响后道工序的生产，并最终影响成品布质量。智能坯布检测解决方案利用机器视觉图像识别技术，可实时分辨织机上坯布中的断经、断纬等缺陷，通过机器验布代替传统人工验布方式，有效提高缺陷检测效率、提升产品品质、降低人力成本。
    //                             坯布生产是成品布前的重要一环，其质量直接影响后道工序的生产，并最终影响成品布质量。智能坯布检测解决方案利用机器视觉图像识别技术，可实时分辨织机上坯布中的断经、断纬等缺陷，通过机器验布代替传统人工验布方式，有效提高缺陷检测效率、提升产品品质、降低人力成本。
    //                             坯布生产是成品布前的重要一环，其质量直接影响后道工序的生产，并最终影响成品布质量。智能坯布检测解决方案利用机器视觉图像识别技术，可实时分辨织机上坯布中的断经、断纬等缺陷，通过机器验布代替传统人工验布方式，有效提高缺陷检测效率、提升产品品质、降低人力成本。
    //                         </span>
    //                     </Row>
    //                 </Col>
    //                 <Col span={1}>
    //                     <div style={{ marginTop: 2, width: 30, height: 30, borderRadius: 8, backgroundImage: 'url(/img/user.png)', backgroundSize: 'cover' }} />
    //                 </Col>
    //             </Row>
    //         </div>
    //     )
    // }

    // const renderAnswer = () => {
    //     return (
    //         <div style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', textAlign: 'start' }}>
    //             <Row align='top' gutter={20}>
    //                 <Col span={1}>
    //                     <Row justify='end'>
    //                         <div style={{ marginTop: 2, width: 30, height: 30, borderRadius: 8, backgroundImage: 'url(/img/ai.png)', backgroundSize: 'cover' }} />
    //                     </Row>
    //                 </Col>
    //                 <Col span={21}>
    //                     <span style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.75)', lineHeight: '1.5em', letterSpacing: 1 }}>
    //                         你好
    //                     </span>
    //                 </Col>
    //             </Row>
    //         </div>
    //     )
    // }


    const sendText = async (value: string) => {
        const res: any = await chat({
            model: 'gpt-3.5-turbo-0301',
            messages: [{ role: 'user', content: value }]
        })
        // setShowLoading(false)
        if (res) {
            // const message: string = res?.choices[0].message.content.replace(/\/n\/n/, '')
            const str: string = res?.choices[0].message.content.replace(/[\n]{0,2}/, '')
            addLists('answer', str)
            // setMessage(str)
        }
    }


    return (
        <div>
            <PageContainer>
                <div style={{ height: '100%', width: '100%', position: 'relative', marginTop: 40 }}>
                    <div ref={contentRef} >
                        <QueueAnim type={['right', 'left']} leaveReverse>
                            {lists}
                        </QueueAnim>
                        {/* <div style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', textAlign: 'end' }}>
                    <Row justify='end' align='top' gutter={20}>
                        <Col span={21}>
                            <Row justify='end'>
                                <span style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.75)', lineHeight: '1.5em', letterSpacing: 1 }}>
                                    你好
                                </span>
                            </Row>
                        </Col>
                        <Col span={1}>
                            <div style={{ marginTop: 2, width: 30, height: 30, borderRadius: 8, backgroundImage: 'url(/img/user.png)', backgroundSize: 'cover' }} />
                        </Col>
                    </Row>
                </div>
                <div style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', textAlign: 'start' }}>
                    <Row align='top' gutter={20}>
                        <Col span={1}>
                            <Row justify='end'>
                                <div style={{ marginTop: 2, width: 30, height: 30, borderRadius: 8, backgroundImage: 'url(/img/ai.png)', backgroundSize: 'cover' }} />
                            </Row>
                        </Col>
                        <Col span={21}>
                            <span style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.75)', lineHeight: '1.5em', letterSpacing: 1 }}>
                                你好
                            </span>
                        </Col>
                    </Row>
                </div> */}
                    </div>
                </div>
            </PageContainer>
            <Row className={styles.bottomWrapper} style={{ position: 'fixed', top: 30, width: '100%', height: 150 }} align='middle'>
                <div style={{ marginLeft: 30 }}>
                    <Input
                        onKeyUp={(e) => {
                            if (e.keyCode === 13) {
                                addLists('ask')
                                sendText(inputValue)
                            }
                        }}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        style={{ width: 750, height: 50, marginRight: 10 }} placeholder="输入文字" />
                    <Button
                        onClick={() => {
                            addLists('ask')
                            sendText(inputValue)
                        }} size='large' type='primary' shape="circle" icon={<SendOutlined />} />
                </div>

            </Row>
        </div>

    )
}

export default Chat
