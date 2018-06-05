"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RouterDefault = /** @class */ (function () {
    function RouterDefault(app) {
        this.app = app;
    }
    RouterDefault.prototype.registerRoutes = function () {
        var _this = this;
        this.getRoutes().forEach(function (_r) {
            _this.createRoute(_r);
        });
    };
    RouterDefault.prototype.createRoute = function (_r) {
        var r = this.app.route(_r.path);
        switch (_r.type || 'GET') {
            case 'POST': {
                r.post(_r.handler);
                break;
            }
            case 'PUT': {
                r.post(_r.handler);
                break;
            }
            case 'DELETE': {
                r.delete(_r.handler);
                break;
            }
            case 'PATCH': {
                r.patch(_r.handler);
                break;
            }
            default: {
                r.get(_r.handler);
            }
        }
    };
    return RouterDefault;
}());
exports.default = RouterDefault;
