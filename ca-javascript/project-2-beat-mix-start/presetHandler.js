// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (req, index, newPresetArray) => {
    if (index > 15) {
        return ['404', "Not Found"];
    } else if (res === "GET") {
        return `['200', ${}]`
    } else if () {

    } else {
        return [400, "Bad Request"]
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
