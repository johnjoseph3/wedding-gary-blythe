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
      const newValues = { $set: { "confirmed" : guest.confirmed, "number_of_seats_confirmed": guest.number_of_seats_confirmed }};
      db.collection("guests").updateOne( query, newValues, (err,guest) => {
        if (err) throw err;
        res.send({message: 'Guest updated'});
      })

    })
    
    // app.post('/api/goals', (req, res) => {
    //     try {
    //         db.collection('goals').insert(req.body)
    //     } catch (e) {
    //         throw new Error('Failed to add goal');
    //     }
    //     res.send({"Status:": "Successfully added goal"})
    // })
    
    // app.delete('/api/goals/:id', (req, res) => {
    //     try {
    //         db.collection('goals').remove({_id:  new ObjectId(req.params.id)})
    //     } catch (e) {
    //         throw new Error('Failed to remove goal');
    //     }
    //     res.send({"Status:": "Successfully removed goal"})
    // })
}