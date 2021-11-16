import passport from "passport";
import { BasicStrategy } from "passport-http";
import service from "../../service";

const { LoginBasicService } = service.account;

export default function basic() {
  passport.use(
    new BasicStrategy(async (username, password, done) => {
      try {
        const user = await LoginBasicService(username, password);
        if (user.error) {
          return done(null, user);
        } else {
          return done(null, user);
        }
      } catch (error) {
        done(error);
      }
    })
  );
}
