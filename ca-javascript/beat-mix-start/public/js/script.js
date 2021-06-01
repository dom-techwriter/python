// Drum Arrays
const createEmptyDrumArray = () => new Array(16).fill(false);


let kicks = createEmptyDrumArray();
let snares = createEmptyDrumArray();
let hiHats = createEmptyDrumArray();
let rideCymbals = createEmptyDrumArray(); 

const drumArray = (name) => {
    switch (name) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return "Screw this, I'm getting a beer"
    }
}

const toggleDrum = (arr, index) => {
    const drums = drumArray(arr);
    if (!drums || index > 15 || index < 0) {
        return;
    }
    drums[index] = !drums[index]
}

const clear = (arr) => {
    const drums = drumArray(arr);
    if (drums) {
      drums.fill(false)
    }
  };

const invert = (arr) => {
    const drums = drumArray(arr);
    if (drums) {
        for (let index = 0; index < drums.length; index++) {
            drums[index] = !drums[index]
        }
    }
}
