module.exports = function (app) {

/*    // home page
    app.get('/', function (req, res) {
        res.render('index', { title: 'Home Page.  ' })
    });
    
    // walmart
        app.get('/walmart', function (req, res) {
        res.render('walmart', { title: 'Walmart Page' })
    });*/

    // chat area
    app.get('/chat', function (req, res) {
        res.render('chat', { title: 'Chat with Me!  ' })
    });

    // about page
    app.get('/about', function (req, res) {
        res.render('about', { title: 'About Me.  ' })
    });
}