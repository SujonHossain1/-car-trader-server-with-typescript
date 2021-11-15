import { createFaq, getAllFaqs } from 'controllers/faq';
import { IRoutes } from 'routes';

const routes: IRoutes[] = [
    {
        path: '/faq',
        http: 'post',
        handler: createFaq,
    },
    {
        path: '/faq',
        http: 'get',
        handler: getAllFaqs,
    },
];
export default routes;
