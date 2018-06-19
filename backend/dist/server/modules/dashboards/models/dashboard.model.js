"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DashboardModel extends Document {
}
exports.DashboardModel = DashboardModel;
exports.dashboardSchema = {
    principal: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true
    },
    hint: String,
    icone: {
        type: String,
        default: 'fa fa-line-chart'
    }
};
//# sourceMappingURL=dashboard.model.js.map