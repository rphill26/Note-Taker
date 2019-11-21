var journalData = require('../data/journal-data.js');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(journalData);
    });

    app.post('api/notes', (req, res) => {
        journalData.push(req.body);
    })
}