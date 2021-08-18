class SiteController {
    // [GET]/
    index(req, res) {
        res.render("index");
    }

    // [GET]/about
    about(req, res) {
        res.render("about");
    }
}

module.exports = new SiteController();
