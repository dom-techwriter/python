// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toggleDrum = (arr, index) => {
    if (arr[index] === false) {
        arr[index] = true;
    } else {
        arr[index] = false;
    }
}

const clear = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        arr[index] = false;
    }
}

const invert = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === false) {
            arr[index] = true;
        } else {
            arr[index] = false;
        }
    }
}
