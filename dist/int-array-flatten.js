'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function flatten(intArray) {
    validate(intArray);

    var result = [];

    intArray.forEach(function (item) {
        var flattenedItems = flattenItems(item);

        flattenedItems.forEach(function (flattenItem) {
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
        var msg = intArray + ' is not an array.';
        throw new Error(msg);
    }
    intArray.forEach(function (item) {
        validateItem(item);
    });
}

function validateItem(item) {
    if (Number.isInteger(item)) {
        return true;
    } else if (Array.isArray(item)) {
        item.forEach(function (nestedItem) {
            validateItem(nestedItem);
        });
    } else {
        var msg = 'Item ' + item + ' is not an array, neither an integer.';
        throw new Error(msg);
    }
}

function flattenItems(item) {
    var recursive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (Number.isInteger(item)) {
        return recursive ? item : [item];
    }

    return item.map(function (nestedItem) {
        if (Number.isInteger(nestedItem)) {
            return nestedItem;
        }

        return flattenItems(nestedItem, true);
    });
}

function isComplete(intArray) {
    var complete = true;
    intArray.forEach(function (item) {
        if (!Number.isInteger(item)) {
            complete = false;
        }
    });

    return complete;
}

exports.default = flatten;