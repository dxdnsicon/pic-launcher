import fs from 'fs';
import { join } from 'path';
import { exec } from 'child_process';
import log from './log';

export const writeFile = (dir, fileName, content) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(join(dir + '/' + fileName), JSON.stringify(content));
}

export const isExist = (path) => {
  return !!fs.existsSync(path);
}

// 移动目录文件
export const mvFile = (from, dir, fileName) => {
  return new Promise((resolve) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    exec (`mv ${from} ${join(dir, fileName)}`, (error, stdout, stderr) => {
      if (error) {
        log ('error:' + stderr);
        resolve (null);
      } else {
        try {
          log ('pic rename success', stdout);
          resolve (stdout);
        } catch (e) {
          log (e);
          resolve (null);
        }
      }
    });
  })
}