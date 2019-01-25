function usersRoute(app,db) {
    app.post("/addUsers", (req, res) => {
        let newUsers = req.body;
        db.collection("users").insertOne(newUsers, (err, data) => {
            if (err) res.send("can not add new user");
            else res.send("new user added");
        });
    });
    app.get('/users/:mail/:pwd', (req, res) => {
        let mail = req.params.mail
        let pwd=req.params.pwd
        db.collection("users")
            .find({ email: mail,password:pwd })
            .toArray((err, data) => {
                if (err) res.send("can not get user");
                else res.send(data);
            });
    })
    app.get("/users", (req, res) => {
        db.collection("users")
            .find()
            .toArray((err, data) => {
                if (err) res.send("can not get users list");
                else res.send(data);
            });
    });
}
module.exports =  usersRoute;