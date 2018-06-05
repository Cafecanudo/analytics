"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var td = require("testdouble");
var superTest = require('supertest');
var api_1 = require("../../../server/api/api");
var app = api_1.default;
exports.app = app;
var request = superTest;
exports.request = request;
var expect = chai.expect;
exports.expect = expect;
var testDouble = td;
exports.testDouble = testDouble;
