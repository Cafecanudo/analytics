"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RouterDefault_1 = require("../RouterDefault");
var Routes = /** @class */ (function (_super) {
    __extends(Routes, _super);
    function Routes(app) {
        return _super.call(this, app) || this;
    }
    Routes.prototype.registerRoutes = function () {
        _super.prototype.registerRoutes.call(this);
    };
    Routes.prototype.profile = function (req, res) {
        res.send('hahah');
    };
    Routes.prototype.getRoutes = function () {
        return [
            {
                path: '/api/profile',
                handler: this.profile
            }
        ];
    };
    Routes.ROUTE = {
        PROFILE: '/api/profile'
    };
    return Routes;
}(RouterDefault_1.default));
exports.default = Routes;
