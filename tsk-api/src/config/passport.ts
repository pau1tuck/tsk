import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import argon from "argon2";
import { User } from "@/models/User"; // Assuming you have a User model in models folder
import dotenv from "dotenv";
import { IUser } from "@/types/user.types";

dotenv.config();
const { JWT_SECRET } = process.env;

// Passport Local Strategy
passport.use(
    new LocalStrategy(
        { usernameField: "email" },
        async (email, password, done) => {
            try {
                const user = await User.findByEmail(email);
                if (!user) {
                    return done(null, false, {
                        message: "Incorrect email.",
                    });
                }

                const isMatch = await bcrypt.compare(
                    password,
                    user.password,
                );
                if (!isMatch) {
                    return done(null, false, {
                        message: "Incorrect password.",
                    });
                }

                return done(null, user);
            } catch (err) {
                return done(err);
            }
        },
    ),
);

// JWT Strategy
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
};

passport.use(
    new JwtStrategy(jwtOpts, async (jwtPayload, done) => {
        try {
            const user = await User.findById(jwtPayload.id);
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        } catch (err) {
            return done(err, false);
        }
    }),
);

// Serialization and Deserialization for sessions
passport.serializeUser((user: IUser, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id: IUser, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
