import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import service from "../../service";
import path from "path";
import util from "util";
import fs from "fs";

const { loginJWTService } = service.account;
const readFile = util.promisify(fs.readFile);

export default async function jwt() {
    const privateKey = await readFile(path.resolve('./') + '\\config\\key\\jwtRS256.key');
    passport.use(new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: privateKey,
        algorithms: ['RS256']
    }, async (payload, done) => {
        try {
            const account = await loginJWTService(payload);
            return done(null, account);
        } catch (error) {
            return done(error);
        }
    }))
}