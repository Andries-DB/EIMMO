import { NextFunction, Request, Response, Router } from "express";
import NotFoundError from "../errors/NotFoundError";
import { authJwt, authLocal } from "../middleware/auth";
import ImmoController from "../modules/Immo/Immo.controller";
import AuthController from "../modules/Admin/Auth.controller";
import ClientController from "../modules/Client/Client.controller";

const registerOnboardingRoutes = (router: Router) => {
    const authController = new AuthController();
    router.post("/auth/login", authLocal, authController.login);
};

const registerAuthenticatedRoutes = (router: Router) => {
    const authRouter = Router();

    const clientController = new ClientController();
    authRouter.get("/client/search", clientController.all);
    authRouter.get("/client/search/:id", clientController.find);
    authRouter.post("/client/", clientController.create);
    authRouter.patch("/client/:id", clientController.update);
    authRouter.delete("/client/:id", clientController.delete);

    const immoController = new ImmoController();
    authRouter.get("/immo/search", immoController.all);
    authRouter.get("/immo/search/:id", immoController.find);
    authRouter.post("/immo/", immoController.create);
    authRouter.patch("/immo/:id", immoController.update);
    authRouter.delete("/immo/:id", immoController.delete);

    // authenticated routes use authJWT
    router.use(authJwt, authRouter);
};

const registerRoutes = (app: Router) => {
    // onboarding routes (login, ...)
    registerOnboardingRoutes(app);

    // authenticated routes (authentication required)
    registerAuthenticatedRoutes(app);

    // fallback route, return our own 404 instead of default
    app.use((req: Request, res: Response, next: NextFunction) => {
        next(new NotFoundError());
    });
};

export { registerRoutes };