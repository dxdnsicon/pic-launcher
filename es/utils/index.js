"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mvFile = exports.isExist = exports.writeFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const child_process_1 = require("child_process");
const log_1 = __importDefault(require("./log"));
const writeFile = (dir, fileName, content) => {
    if (!fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir);
    }
    fs_1.default.writeFileSync((0, path_1.join)(dir + '/' + fileName), JSON.stringify(content));
};
exports.writeFile = writeFile;
const isExist = (path) => {
    return !!fs_1.default.existsSync(path);
};
exports.isExist = isExist;
const mvFile = (from, dir, fileName) => {
    return new Promise((resolve) => {
        if (!fs_1.default.existsSync(dir)) {
            fs_1.default.mkdirSync(dir);
        }
        (0, child_process_1.exec)(`mv ${from} ${(0, path_1.join)(dir, fileName)}`, (error, stdout, stderr) => {
            if (error) {
                (0, log_1.default)('error:' + stderr);
                resolve(null);
            }
            else {
                try {
                    (0, log_1.default)('pic rename success', stdout);
                    resolve(stdout);
                }
                catch (e) {
                    (0, log_1.default)(e);
                    resolve(null);
                }
            }
        });
    });
};
exports.mvFile = mvFile;
//# sourceMappingURL=index.js.map