function flatten(intArray) {
    validate(intArray);

    let result = [];

    intArray.forEach(item => {
        const flattenedItems = flattenItems(item);

        flattenedItems.forEach(flattenItem => {
            result.push(flattenItem);
        });
    });
    while (!isComplete(result)) {
        result = flatten(result);
    }

    return result;
}

function validate(intArray) {
    if (!Array.isArray(intArray)) {
        const msg = intArray + ' is not an array.';
        throw new Error(msg);
    }
    intArray.forEach(item => {
        validateItem(item)
    });
}

function validateItem(item) {
    if (Number.isInteger(item)) {
        return true;

    } else if (Array.isArray(item)) {
        item.forEach(nestedItem => {
            validateItem(nestedItem);
        });

    } else {
        const msg = 'Item ' + item + ' is not an array, neither an integer.';
        throw new Error(msg);
    }
}

function flattenItems(item, recursive = false) {
    if (Number.isInteger(item)) {
        return recursive ? item : [item];
    }

    return item.map(nestedItem => {
        if (Number.isInteger(nestedItem)) {
            return nestedItem;
        }

        return flattenItems(nestedItem, true);
    });
}

function isComplete(intArray) {
    let complete = true;
    intArray.forEach(item => {
        if (!Number.isInteger(item)) {
            complete = false;
        }
    });

    return complete;
}

export default flatten;
