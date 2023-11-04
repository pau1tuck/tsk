import express, { Express, Request, Response } from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
// import pm2 from "pm2";

dotenv.config();

const { SERVER, PORT, SESSION_SECRET } = process.env;

// Initialize your application
const app: Express = express();
app.use(express.json());

// Use session middleware
app.use(/*... session setup ...*/);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Use routes
app.use("api/auth", authRoutes);
//... other routes

app.listen(Number(PORT) || 5000, () => {
    console.log(
        `Server running on ${SERVER}:${Number(PORT) || 5000}`,
    );
});
