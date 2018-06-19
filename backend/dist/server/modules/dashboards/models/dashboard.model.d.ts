export declare class DashboardModel extends Document {
    principal: false;
    name: string;
    descricao: string;
    hint: string;
    icone: string;
}
export declare const dashboardSchema: {
    principal: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        required: boolean;
        unique: boolean;
    };
    descricao: {
        type: StringConstructor;
        required: boolean;
    };
    hint: StringConstructor;
    icone: {
        type: StringConstructor;
        default: string;
    };
};
