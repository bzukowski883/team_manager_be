passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Look for an existing user using their Google ID
                let user = await User.findOne({
                    googleId: profile.id
                });

                // If the user doesn't exist, create them
                if (!user) {
                    user = await User.create({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        profilePicture: profile.photos?.[0]?.value
                    });
                }

                // Tell Passport that authentication succeeded
                return done(null, user);

            } catch (error) {
                // Tell Passport that something went wrong
                return done(error, null);
            }
        }
    )
);