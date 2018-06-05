export interface IRouteType {
    path: string;
    type?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    handler: (req, rep) => void;
}
