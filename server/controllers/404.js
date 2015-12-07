
var render = require('../views');

module.exports.registerApp = function(app)
{
    app.use(function *pageNotFound(next){
        yield next;

        if (this.status !== 404)
            return;

        this.status = 404;

        switch (this.accepts('html', 'json'))
        {
            case 'html':
                this.type = 'html';
                this.body = yield render('404');
                break;
            case 'json':
                this.body = {
                    message: 'Page Not Found'
                };
                break;
            default:
                this.type = 'text';
                this.body = 'Page Not Found';
        }
    });
};