const express = require("express");
const passport = require("passport");
import hosts, {auth_server} from "../config/.host.config.js";

const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["openid", "profile", "email"]
    })
);

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login"
    }),
    (req, res) => {
        res.redirect(`${hosts.auth_server}:3000`);
    }
);

module.exports = router;