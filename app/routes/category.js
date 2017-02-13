'use strict';

module.exports = function(app) {
    const router = require('express').Router();
    const category   = app.controllers.category;

    router.route('/categories')
        .get(category.list);
    
    app.use('/api', router);
}
