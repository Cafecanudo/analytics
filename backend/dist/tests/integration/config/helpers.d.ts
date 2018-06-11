import * as td from 'testdouble';
import app from '../../../server/api/api';
declare const request: any;
declare const expect: Chai.ExpectStatic;
declare const testDouble: typeof td;
export { app, request, expect, testDouble };
