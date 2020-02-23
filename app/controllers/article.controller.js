const articleModel = require('../models/article.model')

module.exports.index = (req, res, site) => {
    var articles = articleModel.list()
    res.render('index', {site: site, articles: articles})
}

module.exports.show = (req, res, site) => {
    var article = articleModel.find(req.params.id)
    if(article) {
        res.render('article', {article: article, site: site})
    } else {
        res.render('notfound', {attempted_id: req.params.id, site: site})
    }
}