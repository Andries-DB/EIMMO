import { NextFunction, Request, Response, Router } from "express";
import NotFoundError from "../errors/NotFoundError";
import { authJwt, authLocal } from "../middleware/auth";
import ImmoController from "../modules/Immo/Immo.controller";
import AuthController from "../modules/Admin/Auth.controller";
import AdminController from "../modules/Admin/Admin.controller";

const registerAuthenticatedRoutes = (router: Router) => {
    const authRouter = Router();

    const adminController = new AdminController();
    authRouter.get('/admin' , adminController.all);
    authRouter.get('/admin/:id' , adminController.find);
    authRouter.post('/admin', adminController.create);
    authRouter.patch('/admin/:id' , adminController.update);
    authRouter.delete('/admin/:id', adminController.delete);

    const immoController = new ImmoController();
    authRouter.post("/immo", immoController.create);
    authRouter.patch("/immo/:id", immoController.update);
    authRouter.delete("/immo/:id", immoController.delete);
    // authenticated routes use authJWT
    router.use(authJwt, authRouter);
};

const registerNormalRoutes = (router: Router) => {

    const authController = new AuthController();
    router.post("/login", authLocal, authController.login);
    
    const immoController = new ImmoController();
    router.get("/immo", immoController.all);
    router.get("/immo/:id", immoController.find);
} 

const registerRoutes = (app: Router) => {
    // onboarding routes (login, ...)
    registerNormalRoutes(app);
    // authenticated routes (authentication required)
    registerAuthenticatedRoutes(app);


    // fallback route, return our own 404 instead of default
    app.use((req: Request, res: Response, next: NextFunction) => {
        next(new NotFoundError());
    });
};

export { registerRoutes };