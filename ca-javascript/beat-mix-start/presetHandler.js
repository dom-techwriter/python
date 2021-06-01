// Use this presets array inside your presetHandler
const presets = require('./presets');


const getIndex = index => {
    return presets[index] || null
}

const setNewArray = (i, a) => {
    if (!presets[i]) {
        return;
      }
    presets[i] = a;
    return presets[i]
}

// Complete this function:
const presetHandler = (method, index, newPresetArray) => {
    if (method === 'GET') {
      let getMe = getIndex(index);
      if (getMe) {
        return [200, getMe];
      } else {
        return [404];
      }
    } else if (method === 'PUT') {
      let fuckMe = setNewArray(index, newPresetArray);
      if (fuckMe) {
        return [200, fuckMe];
      } else {
        return [404];
      }
    } else {
      return [400];
    }
  };



// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
