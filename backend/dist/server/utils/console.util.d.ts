declare class ConsoleUtil {
    private showStructure;
    constructor();
    static clear(): any;
    static ln(): any;
    static data(t?: any): any;
    static white(t?: any): any;
    static help(t?: any): any;
    static info(t?: any): any;
    static error(t?: any): any;
    static warn(t?: any): any;
    static log(t?: any): any;
    static literal(): any;
    data(t?: any): any;
    help(t?: any): any;
    info(t?: any): any;
    error(t?: any): any;
    warn(t?: any): any;
    log(t?: any): any;
    white(t?: any): any;
    private complenteStr;
}
export default ConsoleUtil;
