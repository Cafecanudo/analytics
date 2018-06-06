const colors = require('colors/safe');

const lenh = 100;

class ConsoleUtil {

    constructor() {
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

    static clear(): any {
        console.clear();
    }

    static ln(): any {
        console.log();
    }

    static data(t?): any {
        return new ConsoleUtil().data(t);
    }

    static white(t?): any {
        return new ConsoleUtil().white(t);
    }

    static help(t?): any {
        return new ConsoleUtil().help(t);
    }

    static info(t?): any {
        return new ConsoleUtil().info(t);
    }

    static error(t?): any {
        return new ConsoleUtil().error(t);
    }

    static warn(t?): any {
        return new ConsoleUtil().warn(t);
    }

    static log(t?): any {
        return new ConsoleUtil().log(t);
    }

    data(t?): any {
        console.log(colors.data(this.complenteStr(`#### Data[ ${t}`)));
        return t;
    }

    help(t?): any {
        console.log(colors.help(this.complenteStr(`#### Help[ ${t}`)));
        return t;
    }

    info(t?): any {
        console.log(colors.info(this.complenteStr(`#### Info[ ${t}`)));
        return t;
    }

    error(t?): any {
        console.log(colors.error(this.complenteStr(`#### Error[ ${t}`)));
        return t;
    }

    warn(t?): any {
        console.log(colors.warn(this.complenteStr(`#### Warn[ ${t}`)));
        return t;
    }

    log(t?): any {
        console.log(colors.prompt(this.complenteStr(`#### Log[ ${t}`)));
        return t;
    }

    white(t?): any {
        console.log(this.complenteStr(t));
        return t;
    }

    private complenteStr(t?): string {
        let out = t;
        for (var i = 0; i < (lenh - t.length); i++) {
            out += '.';
        }
        return out + ' ]';
    }
}

export default ConsoleUtil;
