"use strict";


const copyIndexOf = (arrayWork,searchElement,fromIndex = 0) => {
    if (fromIndex >= arrayWork.length) return -1;
    if (fromIndex < 0) {
        const rotateIndex = fromIndex * -1;
        if (rotateIndex < arrayWork.length) return -1;
        for (let i = rotateIndex; i < arrayWork.length; i += 1) {
            if (arrayWork[i] === searchElement) return i;
        }
    }
    for (let i = fromIndex; i < arrayWork.length; i += 1) {
        if (arrayWork[i] === searchElement) return i;
    }
    return -1;
}



const copyLastIndexOf = (string,value,fromIndex) => {

    let from = string.length;
    let userFromIndex = undefined;
    let index = -1;

    if (fromIndex <= 0) return -1;
    if (fromIndex < string.length) userFromIndex = fromIndex;

    for (let i = 0; i < userFromIndex; i += 1) {
        if (string[i] === value) {
            return i;
        }
    }

    for (let i = 0; i < string.length; i += 1) {
        if (string[i] === value) {
            index = i;
        }
    }
    return index;
}

