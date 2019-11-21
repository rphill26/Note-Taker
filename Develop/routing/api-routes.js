var journalData = require('../data/journal-data.js');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(journalData);
    })
}