"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUpdates = void 0;
const update_notifier_1 = __importDefault(require("update-notifier"));
const semver_compare_1 = __importDefault(require("semver-compare"));
const checkUpdates = () => {
    const notifier = (0, update_notifier_1.default)({
        pkg: require('../../package.json'),
        shouldNotifyInNpmScript: true,
        updateCheckInterval: 0,
    });
    if (notifier.update && (0, semver_compare_1.default)(notifier.update.latest, notifier.update.current) === 1) {
        notifier.notify({
            defer: false,
        });
        return true;
    }
    return false;
};
exports.checkUpdates = checkUpdates;
//# sourceMappingURL=utils.js.map