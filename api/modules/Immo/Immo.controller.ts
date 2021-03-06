/* eslint-disable @typescript-eslint/ban-types */
import { NextFunction, Request, Response } from "express";
import NotFoundError from "../../errors/NotFoundError";
import ImmoService from "./Immo.service";
import { ImmoBody } from "./Immo.types";
import { UploadedFile } from "express-fileupload";
import { UPLOAD_FOLDER } from "../../constants";

const getAvatar = (req: Request) => {
    if (req.files.avatar) {
        const avatar: UploadedFile = Array.isArray(req.files.avatar)
            ? req.files.avatar[0]
            : req.files.avatar;
        const path = `${UPLOAD_FOLDER}/${new Date().getTime()}_${avatar.name}`;
        avatar.mv(path);
        return path;
    }
    return null;
};

export default class ImmoController {
    private immoService: ImmoService;

    constructor() {
        this.immoService = new ImmoService();
    }

    all = async (req: Request, res: Response, next: NextFunction) => {
        const immos = await this.immoService.all();
        return res.json(immos);
    };

    find = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const immo = await this.immoService.findOne(
            parseInt(req.params.id)
        );
        if (!immo) {
            next(new NotFoundError());
            return;
        }
        return res.json(immo);
    };

    create = async (
        req: Request<{}, {}, ImmoBody>,
        res: Response,
        next: NextFunction
    ) => {
        const avatar = getAvatar(req);
        if (avatar) {
            req.body.avatar = avatar;
        }
        const immo = await this.immoService.create(req.body);
        return res.json(immo);
    };

    update = async (
        req: Request<{ id: string }, {}, ImmoBody>,
        res: Response,
        next: NextFunction
    ) => {
        const avatar = getAvatar(req);
        if (avatar) {
            req.body.avatar = avatar;
        }
        const immo = await this.immoService.update(
            parseInt(req.params.id),
            req.body
        );
        if (!immo) {
            next(new NotFoundError());
            return;
        }

        return res.json(immo);
    };

    delete = async (
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const immo = await this.immoService.delete(parseInt(req.params.id));
        if (!immo) {
            next(new NotFoundError());
            return;
        }
        return res.json({});
    };
}
