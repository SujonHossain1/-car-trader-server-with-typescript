import { NextFunction, Request, Response, Router } from 'express';
/** routes */
import carRoutes from './car';
import faqRoutes from './faq';
const router = Router();

export interface IRoutes {
    path: string;
    http: string;
    handler: (req: Request, res: Response, next: NextFunction) => void;
}

/*** Application Routes */
const routes: IRoutes[] = [...carRoutes, ...faqRoutes];

routes.forEach((route) => {
    (router as any)[route.http](route.path, route.handler);
});

export default router;
