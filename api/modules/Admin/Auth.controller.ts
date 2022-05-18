import { NextFunction, Response } from "express";
import { createToken } from "../../middleware/auth";
import { AuthRequest } from "../../middleware/auth/auth.types";

export default class AuthController {
    login = async (req: AuthRequest, res: Response, next: NextFunction) => {
        const { client } = req;
        res.json({
            client,
            token: createToken(client),
        });
    };
}