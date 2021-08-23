module.exports = function LocalMiddleware(req, res, next) {
    res.locals = {
        siteTitle: "My Website's Title",
        pageTitle: "The Root Splash Page",
        author: "Minhhoang",
        description:
            "I DESIGN AND DEVELOP EXPERIENCES THAT MAKE PEOPLE'S LIVES SIMPLE.",
    };

    next();
};
