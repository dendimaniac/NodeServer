'use strict';

module.exports = (app) => {
    app.enable('trust proxy');

    app.use((req, res, next) => {
        if (req.secure) {
            console.log('secure? nothing todo then next');
            next();
        } else {
            console.log('not secure? redirect');
            res.redirect(301, `https://${req.headers.host}/app${req.url}`);
        }
    });
};