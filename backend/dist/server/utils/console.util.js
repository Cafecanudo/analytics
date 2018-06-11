"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require('colors/safe');
const lenh = 100;
class ConsoleUtil {
    constructor() {
        this.showStructure = true;
        colors.setTheme({
            silly: 'rainbow',
            input: 'grey',
            verbose: 'cyan',
            prompt: 'grey',
            info: 'green',
            data: 'cyan',
            help: 'cyan',
            warn: 'yellow',
            debug: 'blue',
            error: 'red'
        });
    }
    static clear() {
        console.clear();
    }
    static ln() {
        console.log();
    }
    static data(t) {
        return new ConsoleUtil().data(t);
    }
    static white(t) {
        return new ConsoleUtil().white(t);
    }
    static help(t) {
        return new ConsoleUtil().help(t);
    }
    static info(t) {
        return new ConsoleUtil().info(t);
    }
    static error(t) {
        return new ConsoleUtil().error(t);
    }
    static warn(t) {
        return new ConsoleUtil().warn(t);
    }
    static log(t) {
        return new ConsoleUtil().log(t);
    }
    static literal() {
        const _c = new ConsoleUtil();
        _c.showStructure = false;
        return _c;
    }
    data(t) {
        console.log(colors.data(this.complenteStr(`${this.showStructure ? '#### Data' : ''}[ ${t}`)));
        return t;
    }
    help(t) {
        console.log(colors.help(this.complenteStr(`${this.showStructure ? '#### Help' : ''}[ ${t}`)));
        return t;
    }
    info(t) {
        console.log(colors.info(this.complenteStr(`${this.showStructure ? '#### Info' : ''}[ ${t}`)));
        return t;
    }
    error(t) {
        console.log(colors.error(this.showStructure ? this.complenteStr(`#### Error[ ${t}`) : t));
        return t;
    }
    warn(t) {
        console.log(colors.warn(this.complenteStr(`${this.showStructure ? '#### Warn' : ''}[ ${t}`)));
        return t;
    }
    log(t) {
        console.log(colors.prompt(this.complenteStr(`${this.showStructure ? '#### Log' : ''}[ ${t}`)));
        return t;
    }
    white(t) {
        console.log(this.complenteStr(t));
        return t;
    }
    complenteStr(t) {
        let out = t;
        for (var i = 0; i < (lenh - t.length); i++) {
            out += '.';
        }
        return out + ' ]';
    }
}
exports.default = ConsoleUtil;
//# sourceMappingURL=console.util.js.map