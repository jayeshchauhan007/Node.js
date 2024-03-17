const path = require("path");

function getMessages(req, res) {
    //res.send('<h1>Messages</h1>');
    res.render('messages', {
        messages: 'Messages'
    })
}

function getFile(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images','jayesh.jpeg'));
}
function postMessages(req, res) {
    console.log('Updating Messages...');
}

module.exports = {
    getMessages,
    postMessages,
    getFile
};