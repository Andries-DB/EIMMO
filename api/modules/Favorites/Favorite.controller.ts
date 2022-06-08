/* eslint-disable @typescript-eslint/ban-types */
import { NextFunction, Request, Response } from "express";
import NotFoundError from "../../errors/NotFoundError";
import FavoriteService from "./Favorite.service";
import { FavoriteBody } from "./Favorite.types";

export default class FavoriteController {
    private favoriteService: FavoriteService;

    constructor() {
        this.favoriteService = new FavoriteService();
    }

    all = async (req: Request <{ user_id:string}>, res: Response, next: NextFunction) => {
        const immos = await this.favoriteService.all(parseInt(req.params.user_id));
        return res.json(immos);
    };

    find = async (
        req: Request<{ user_id: string , immo_id: string}>,
        res: Response,
        next: NextFunction
    ) => {
        const immo = await this.favoriteService.findOne(
            parseInt(req.params.user_id), parseInt(req.params.immo_id));
        if (!immo) {
            next(new NotFoundError());
            return;
        }
        return res.json(immo);
    };

    create = async (
        req: Request<{}, {}, FavoriteBody>,
        res: Response,
        next: NextFunction
    ) => {
        const immo = await this.favoriteService.create(req.body);
        return res.json(immo);
    };

    delete = async (
        req: Request<{user_id: string , immo_id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const immo = await this.favoriteService.delete(parseInt(req.params.user_id), parseInt(req.params.immo_id));
        if (!immo) {
            next(new NotFoundError());
            return;
        }
        return res.json({});
    };
}
