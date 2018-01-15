const ObjectId = require('mongodb').ObjectId;

module.exports = (app, db) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
    
    app.get('/api/guests', (req, res) => {
        db.collection('guests').find().toArray((err, guests) => res.send(guests));
    })

    app.put('/api/guests', (req, res) => {
      const guest = req.body;
      const query = {_id: new ObjectId(guest._id)};
      const newValues = { $set: {
        "confirmed": guest.confirmed,
        "number_of_seats_confirmed": guest.number_of_seats_confirmed,
        "declined": guest.declined
      }};
      db.collection("guests").updateOne( query, newValues, (err,guest) => {
        if (err) throw err;
        res.send({message: 'Guest updated'});
      })

    })
    
}