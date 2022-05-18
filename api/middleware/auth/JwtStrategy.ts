import { ExtractJwt, Strategy } from "passport-jwt";
import AdminService from "../../modules/Admin/Admin.service";

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

export default new Strategy(jwtOptions, async (payload, done) => {
    try {
        const { email, id } = payload;

        // check if user with id and email exists
        const adminService = new AdminService();
        const user = await adminService.findOneBy({ email, id });

        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    } catch (e) {
        return done(e, false);
    }
});
