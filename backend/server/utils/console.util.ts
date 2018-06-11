const colors = require('colors/safe');

const lenh = 100;

class ConsoleUtil {

    private showStructure: boolean = true;

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

    /**
     * Imprime literalmente no console com a cor especifica
     * @returns {this}
     */
    static literal(): any {
        const _c = new ConsoleUtil();
        _c.showStructure = false;
        return _c;
    }

    data(t?): any {
        console.log(colors.data(this.complenteStr(`${this.showStructure ? '#### Data' : '' }[ ${t}`)));
        return t;
    }

    help(t?): any {
        console.log(colors.help(this.complenteStr(`${this.showStructure ? '#### Help' : '' }[ ${t}`)));
        return t;
    }

    info(t?): any {
        console.log(colors.info(this.complenteStr(`${this.showStructure ? '#### Info' : '' }[ ${t}`)));
        return t;
    }

    error(t?): any {
        console.log(colors.error(this.showStructure ? this.complenteStr(`#### Error[ ${t}`) : t));
        return t;
    }

    warn(t?): any {
        console.log(colors.warn(this.complenteStr(`${this.showStructure ? '#### Warn' : '' }[ ${t}`)));
        return t;
    }

    log(t?): any {
        console.log(colors.prompt(this.complenteStr(`${this.showStructure ? '#### Log' : '' }[ ${t}`)));
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
