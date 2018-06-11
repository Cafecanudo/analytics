"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const td = require("testdouble");
const superTest = require('supertest');
const api_1 = require("../../../server/api/api");
exports.app = api_1.default;
const request = superTest;
exports.request = request;
const expect = chai.expect;
exports.expect = expect;
const testDouble = td;
exports.testDouble = testDouble;
//# sourceMappingURL=helpers.js.map