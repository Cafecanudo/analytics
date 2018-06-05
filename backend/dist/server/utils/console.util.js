"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require('colors/safe');
class ConsoleUtil {
    constructor() {
        colors.setTheme({
            silly: 'rainbow',
            input: 'grey',
            verbose: 'cyan',
            prompt: 'grey',
            info: 'green',
            data: 'grey',
            help: 'cyan',
            warn: 'yellow',
            debug: 'blue',
            error: 'red'
        });
    }
    static help(t, cl = true) {
        return new ConsoleUtil().help(t, cl);
    }
    static info(t, cl = true) {
        return new ConsoleUtil().info(t, cl);
    }
    static error(t, cl = true) {
        return new ConsoleUtil().error(t, cl);
    }
    static warn(t, cl = true) {
        return new ConsoleUtil().warn(t, cl);
    }
    static log(t, cl = true) {
        return new ConsoleUtil().log(t, cl);
    }
    help(t, cl = true) {
        console.log(colors.help(`${cl ? '#### [ ' : ''}${t}${cl ? ' ]' : ''}`));
        return t;
    }
    info(t, cl = true) {
        console.log(colors.info(`${cl ? '#### Info [ ' : ''}${t}${cl ? ' ]' : ''}`));
        return t;
    }
    error(t, cl = true) {
        console.log(colors.error(`${cl ? '@@@@@@@@> Error [ ' : ''}${t}${cl ? ' ]' : ''}`));
        return t;
    }
    warn(t, cl = true) {
        console.log(colors.warn(`${cl ? '#### Warn [ ' : ''}${t}${cl ? ' ]' : ''}`));
        return t;
    }
    log(t, cl = true) {
        console.log(`${cl ? '#### Log [ ' : ''}${t}${cl ? ' ]' : ''}`);
        return t;
    }
}
exports.default = ConsoleUtil;
