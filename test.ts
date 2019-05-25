import Assert from './assert';
const test = new Assert();

function frequencyChecker(a, b) {

    if (Object.is(a, b) || getKeys(a).length !== getKeys(b).length) {
        return false;
    }

    let aValues = convertToArray(a);
    let bValues = convertToArray(b);

    return aValues.every(aValue => bValues.find(bvalue => (aValue * 2) === bvalue));
  }

function getKeys(obj) {
    return Object.keys(obj);
}

function convertToArray(obj) {
    return Object['values'](obj);
}

const a = {
    0: 1,
    1: 2,
    2: 3,
    3: 10
};

const b = {
    0: 5,
    1: 1,
    2: 7,
    3: 20
};

const c = {
    0: 5,
    1: 5,
    2: 50,
    3: 50
};

const d = {
    0: 10,
    1: 100,
    2: 100,
    3: 10
};

// case 1 different objects
test.assert(frequencyChecker(a, b), true) //?

// case 2 same objects
test.assert(frequencyChecker(a, a), false) //?

// case 3 same objects
test.assert(frequencyChecker(c, d), true) //?