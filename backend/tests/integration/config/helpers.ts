import * as mocha from 'mocha';
import * as chai from 'chai';
import * as td from 'testdouble';

const superTest = require('supertest');
import app from '../../../server/api/api';

const request = superTest;
const expect = chai.expect;
const testDouble = td;

export { app, request, expect, testDouble };
