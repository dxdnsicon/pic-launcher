/*
 * @Author: shiningding <shiningding@tencent.com>
 * @Date: 2021-11-18 20:03:04
 * @--------------------------------------------------: 
 * @LastEditTime: 2021-11-18 20:12:30
 * @Modified By: shiningding <shiningding@tencent.com>
 * @---------------------------------------------------: 
 * @Description: 核心逻辑
 */

import Cheerio from 'cheerio';

const loadUrl = (url: string) => {
  const $ = Cheerio.load(url)
}

export default loadUrl;
