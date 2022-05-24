import { NextFunction, Request, Response } from "express";
import NotFoundError from "../../errors/NotFoundError";
import { AuthRequest } from "../../middleware/auth/auth.types";
import AdminService from "./Admin.service";
import { AdminBody } from "./Admin.types";

export default class AdminController {
    private adminService: AdminService;

    constructor() {
        this.adminService = new AdminService();
    }

    all = async (req: AuthRequest, res: Response, next: NextFunction) => {
        // don't show password
        const users = await this.adminService.all();
        return res.json(users);
    };

    find = async (
        req: AuthRequest<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const user = await this.adminService.findOneBy({ id: req.params.id });
        if (!user) {
            next(new NotFoundError());
        }
        return res.json(user);
    };

    create = async (req: AuthRequest<{}, {}, AdminBody>, res: Response, next: NextFunction) => {
        const user = await this.adminService.create(req.body);
        return res.json(user);
    };

    update = async (
        req: AuthRequest<{ id: string }, {} , AdminBody>,
        res: Response,
        next: NextFunction
    ) => {
        const user = await this.adminService.update(
            parseInt(req.params.id),
            req.body
        );
        if (!user) {
            next(new NotFoundError());
        }
        return res.json(user);
    };

    delete = async (
        req: AuthRequest<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const user = await this.adminService.delete(parseInt(req.params.id));
        if (!user) {
            next(new NotFoundError());
        }
        return res.json({});
    };
}