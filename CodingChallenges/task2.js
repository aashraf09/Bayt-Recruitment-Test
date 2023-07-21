var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

const contains = (object, desiredValue) => {
    for (const key in object) {
        if (object[key] === desiredValue) {
            console.log('true');
            return true;
        }
        if (typeof object[key] === 'object' && object[key] !== null) {
            if (contains(object[key], desiredValue)) {
                console.log('I reached here')
                return true;
            }
        }
    }
    return false;
}

console.log(contains(nestedObject, 'foo2'));

