// /*
//  * @Descripttion: 
//  * @version: 
//  * @Author: yuanyun
//  * @Date: 2023-03-13 09:05:56
//  * @LastEditors: yuanyun
//  * @LastEditTime: 2023-03-13 09:05:58
//  */
// /*
//  * @Descripttion:
//  * @version:
//  * @Author: yuanyun
//  * @Date: 2021-02-20 09:44:57
//  * @LastEditors: yuanyun
//  * @LastEditTime: 2022-06-13 15:21:01
//  */
// import { parse } from 'querystring';

// const CryptoJS = require('crypto-js');

// /* eslint no-useless-escape:0 import/prefer-default-export:0 */
// const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

// export const isUrl = (path: string): boolean => reg.test(path);

// export const randByte = () => {
//   // eslint-disable-next-line no-bitwise
//   return Math.random() * 256 & 255;
// }



// /**
//  * @Author: yuanyun
//  * @name: sortTypeByLength
//  * @msg: 根据type内容长度排序
//  * @param {*} data  {typeA:any[],typeB:any[]}
//  * @return {*} [typeA,typeB]
//  */
// export const sortTypeByLength = (data: {}) => {
//   const toAry = Object.entries(data)
//   const sort = toAry.sort((a: any[], b: any[]) => b[1].length - a[1].length)
//   const toObj = Object.fromEntries(sort)
//   return Object.keys(toObj)
// }

// /**
// * @Author: yuanyun
// * @name: sortAbilityTypeByLength
// * @msg: 根据type内容长度排序
// * @param {*} data {type:{subtype:[]}}
// * @return {*}
// */
// export const sortAbilityTypeByLength = (data: {}) => {
//   console.log(data)
//   const toAry = Object.entries(data)
//   toAry.forEach((item: any) => {
//     const subType: any[] = Object.keys(item[1])
//     const subTypeToValue: any = []
//     subType.forEach(val => subTypeToValue.push(...item[1][val]))
//     // eslint-disable-next-line no-param-reassign
//     item[1] = [...subTypeToValue]
//   })
//   const sort = toAry.sort((a: any[], b: any[]) => b[1].length - a[1].length)
//   const toObj = Object.fromEntries(sort)
//   return Object.keys(toObj)
// }

// export const uuid = () => {
//   const randBytes = [];
//   for (let i = 0; i < 16; i += 1) {
//     randBytes.push(randByte());
//   }
//   // eslint-disable-next-line no-bitwise
//   randBytes[6] &= 15;
//   // eslint-disable-next-line no-bitwise
//   randBytes[6] |= 0x40;
//   // eslint-disable-next-line no-bitwise
//   randBytes[8] &= 0x3f;
//   // eslint-disable-next-line no-bitwise
//   randBytes[8] |= 0x80;
//   const a = [];
//   for (let i = 0; i < 16; i += 1) {
//     const b = randBytes[i];
//     a.push((b >>> 4).toString(16));
//     // eslint-disable-next-line no-bitwise
//     a.push((b & 15).toString(16));
//     if (i === 3 || i === 5 || i === 7 || i === 9) {
//       a.push('-');
//     }
//   }
//   return a.join('');
// }

// export const getRandomArray = (arr, num) => {
//   //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
//   var temp_array = new Array();
//   for (var index in arr) {
//     temp_array.push(arr[index]);
//   }
//   //取出的数值项,保存在此数组
//   var return_array = new Array();
//   for (var i = 0; i < num; i++) {
//     //判断如果数组还有可以取出的元素,以防下标越界
//     if (temp_array.length > 0) {
//       //在数组中产生一个随机索引
//       var arrIndex = Math.floor(Math.random() * temp_array.length);
//       //将此随机索引的对应的数组元素值复制出来
//       return_array[i] = temp_array[arrIndex];
//       //然后删掉此索引的数组元素,这时候temp_array变为新的数组
//       temp_array.splice(arrIndex, 1);
//     } else {
//       //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
//       break;
//     }
//   }
//   return return_array;
// }

// export const Uint8ToWordArray = (arr) => {
//   var words = [];
//   var sigBytes = arr.length;
//   for (var i = 0; i < sigBytes; i += 4) {
//     words.push((arr[i] << 24) | (arr[i + 1] << 16) | (arr[i + 2] << 8) | arr[i + 3]);
//   }
//   return CryptoJS.lib.WordArray.create(words, sigBytes);
// }


// /**
// *
// *格式化queryQaram
// * @param {*} data Object
// * @return {*}
// */
// export const formatQueryParam = (data: any) => {
//   const arr = []
//   // eslint-disable-next-line guard-for-in,no-restricted-syntax
//   for (const name in data) {
//     if (data[name])
//       arr.push(`${encodeURIComponent(name)}=${encodeURIComponent(data[name])}`);
//   }
//   if (arr.length > 0) {
//     return `?${arr.join('&')}`
//   }
//   return arr.join('&')
// }

// export function spliceEmpty(ary: []) {
//   for (let i = 0; i < ary.length; i += 1) {
//     if (ary[i] === "" || typeof (ary[i]) === "undefined") {
//       ary.splice(i, 1);
//       i -= 1;
//     }
//   }
//   return ary;
// }

// export const toTree = (data: any[]) => {
//   // console.time('start');
//   data.forEach((item: any) => {
//     // eslint-disable-next-line no-param-reassign
//     delete item.children
//     // eslint-disable-next-line no-param-reassign
//     // item.title = item.name
//     // eslint-disable-next-line no-param-reassign
//     item.value = item.id
//     // eslint-disable-next-line no-param-reassign
//     item.key = item.id
//   })
//   // console.log(data);
//   const map = {};
//   data.forEach((item) => {
//     map[item.id] = item;
//   });
//   // console.log(map);
//   const val: any = [];
//   data.forEach(function (item) {
//     const parent = map[item.parentId];
//     if (parent) {
//       (parent.children || (parent.children = [])).push(item);
//     } else {
//       val.push(item);
//     }
//   });
//   // console.timeEnd('start')
//   return val;
// }

// export const isAntDesignPro = (): boolean => {
//   if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
//     return true;
//   }
//   return window.location.hostname === 'preview.pro.ant.design';
// };

// // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
// export const isAntDesignProOrDev = (): boolean => {
//   const { NODE_ENV } = process.env;
//   if (NODE_ENV === 'development') {
//     return true;
//   }
//   return isAntDesignPro();
// };

// // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
// export function isAntdPro() {
//   return window.location.hostname === 'preview.pro.ant.design';
// }

// export const getPageQuery = () => parse(window.location.href.split('?')[1]);

// export const getUser = () => {
//   const user = JSON.parse(localStorage.getItem('user') || "{}")
//   return user
// }
// // cookie 操作函数
// export function setTokenCookie(name: string, value: string, time: string) {
//   document.cookie = `${name}=${escape(value)};${time ? `expires=${time};` : ''}path=/;domain=.ai.lxgs;`
//   // document.cookie = `${name}=${escape(value)};${time ? `expires=${time};` : ''}path=/;domain=localhost;`
// }
// export function delTokenCookie(name: string) {
//   setTokenCookie(name, '', '-1')
// }
