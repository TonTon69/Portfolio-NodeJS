class SiteController {
    // [GET]/
    index(req, res) {
        res.render("index");
    }
}

module.exports = new SiteController();
