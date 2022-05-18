import Admin from "../../modules/Admin/Admin.entity";

import * as LocalStrategy from "passport-local";
import AdminService from "../../modules/Admin/Admin.service";

// local strategy for login with username and password
export default new LocalStrategy(
    {
        usernameField: "email",
    },
    async (email: string, password: string, done: (arg0: unknown, arg1: null) => any) => {
        try {
            // find user with email
            const adminService = new AdminService();
            const user: Admin = await adminService.findByEmailWithPassword(email);
            if (user) {
                // if found, check if password matches
                const check = await user.checkPassword(password);
                if (check) {
                    // correct email and password combination. Pass user to request
                    const user: Admin = await adminService.findOneBy({
                        email: email,
                    });
                    return done(null, user);
                }
            }
            // not allowed! wrong email and password combination
            return done(null, null);
        } catch (e) {
            return done(e, null);
        }
    }
);
