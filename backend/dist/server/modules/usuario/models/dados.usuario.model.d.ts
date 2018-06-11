export interface IDadosUsuarioModel {
    nome: string;
    email: string;
}
export declare const dadosUsuarioSchema: {
    nome: {
        type: StringConstructor;
        required: boolean;
    };
    email: {
        type: StringConstructor;
        required: boolean;
    };
};
