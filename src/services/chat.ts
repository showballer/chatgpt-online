/*
 * @Descripttion: 
 * @version: 
 * @Author: yuanyun
 * @Date: 2023-03-03 14:44:48
 * @LastEditors: yuanyun
 * @LastEditTime: 2023-03-07 20:04:52
 */
import { request } from '@umijs/max';

/** chatgpt调用接口 POST /v1/chat/completions */
export async function chat(body: any, options?: { [key: string]: any }) {
    return request<API.LoginResult>('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        data: body,
        ...(options || {}),
    });
}