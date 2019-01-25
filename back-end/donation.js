function donationRoute(app,db) {
    app.post("/addDonation", (req, res) => {
        let newDonation = req.body;
        db.collection("donations").insertOne(newDonation, (err, data) => {
            if (err) res.send("can not add new donation");
            else res.send("new donation added");
        });
    });
    app.get("/donations", (req, res) => {
        db.collection("donations")
            .find()
            .toArray((err, data) => {
                if (err) res.send("can not get donations list");
                else res.send(data);
            });
    });
}
module.exports =  donationRoute;