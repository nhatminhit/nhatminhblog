const res = require("express/lib/response");

class NewController{
    
    // get/news
    index(req,res)
    {
        res.render('news');
    }

    show(req,res)
    {
        res.send("New Details!!!");
    }
}

module.exports = new NewController;