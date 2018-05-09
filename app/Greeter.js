var messages = require('./messages.json');

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = messages.greetingText;
    return greet;
};
