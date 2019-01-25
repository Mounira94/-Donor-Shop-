//Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
function articlesRoute(app,db) {
    app.post("/addArticles", (req, res) => {
        let newArticles = req.body;
        db.collection("articles").insertOne(newArticles, (err, data) => {
            if (err) res.send("can not add new article");
            else res.send("new article added");
        });
    });
    app.get('/articles/:category', (req, res) => {
        let category = req.params.category
        db.collection("articles")
            .find({ categorie: category })
            .toArray((err, data) => {
                if (err) res.send("can not get articles list");
                else res.send(data);
            });
    })
    app.get("/articles", (req, res) => {
        db.collection("articles")
            .find({ref:{$in:["0001","0003","0005","0006","0008","0010","0012","0020"]}})
            .toArray((err, data) => {
                if (err) res.send("can not get articles list");
                else res.send(data);
            });
    });
}
module.exports =  articlesRoute;