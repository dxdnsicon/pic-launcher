"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const log_1 = __importDefault(require("../utils/log"));
const service = axios_1.default.create({
    timeout: 20 * 1000
});
service.interceptors.request.use(config => {
    config.headers['Accept'] = '*/*',
        config.headers['Content-Type'] = 'application/json;charset=UTF-8',
        config.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        config.headers['Content-Length'] = JSON.stringify(config.data).length,
        config.headers['Accept-Encoding'] = 'gzip',
        config.headers['sec-fetch-mode'] = 'cors',
        config.headers['sec-fetch-site'] = 'same-site',
        config.headers['sec-fetch-dest'] = 'empty',
        config.headers['Accept-Language'] = 'zh-CN,zh;q=0.9',
        config.headers['Cookie'] = 'pgv_info=ssid=s1939187925; ts_last=112223; ts_refer=ADTAGjzt3755; pgv_pvid=4419147778; ts_uid=4570496454';
    return config;
}, error => {
    (0, log_1.default)(error);
    Promise.reject(error);
});
service.interceptors.response.use(response => {
    const res = response.data;
    (0, log_1.default)('log result:', res);
    return Promise.resolve(res);
}, error => {
    console.log('err' + error);
    return Promise.reject(error);
});
exports.default = service;
//# sourceMappingURL=axios.js.map