/*
 * @Author: shiningding <shiningding@tencent.com>
 * @Date: 2021-05-17 17:01:04
 * @--------------------------------------------------: 
 * @LastEditTime: 2021-09-10 16:03:41
 * @Modified By: shiningding <shiningding@tencent.com>
 * @---------------------------------------------------: 
 * @Description: 中文转码
 */

export const encodeUnicode = str => {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    res[i] = ('00' + str.charCodeAt (i).toString (16)).slice (-4);
  }
  return '\\u' + res.join ('\\u');
};

// 解码
export const decodeUnicode = (str) => {
  str = str.replace (/\\/g, '%');
  return unescape (str);
}
