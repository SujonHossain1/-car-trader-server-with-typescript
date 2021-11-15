import { getAllCarItems, getCarItemById } from 'controllers/Car';
import { IRoutes } from 'routes';

const routes: IRoutes[] = [
    {
        path: '/car',
        http: 'get',
        handler: getAllCarItems,
    },
    {
        path: '/car/:id',
        http: 'get',
        handler: getCarItemById,
    },
];
export default routes;
