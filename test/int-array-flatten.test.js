import flatten from '../src/int-array-flatten';

test('[1, [2, 3, [4], [5, 6]], 7]', () => {
    expect(flatten([1, [2, 3, [4], [5, 6]], 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('[1, [2, [3], [4], [5, 6]], 7, [8, 9]]', () => {
    expect(flatten([1, [2, [3], [4], [5, 6]], 7, [8, 9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('[1, [2, 3, [4, [5, [6, [7, [8, [9]]]]]]]]', () => {
    expect(flatten([1, [2, 3, [4, [5, [6, [7, [8, [9]]]]]]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('[]', () => {
    expect(flatten([])).toEqual([]);
});

test('[8]', () => {
    expect(flatten([8])).toEqual([8]);
});

test(8, () => {
    const msg = '8 is not an array.';
    expect(() => flatten(8)).toThrowError(Error(msg));
});

test('string', () => {
    const msg = 'string is not an array.';
    expect(() => flatten('string')).toThrowError(Error(msg));
});

test('null', () => {
    const msg = 'null is not an array.';
    expect(() => flatten(null)).toThrowError(Error(msg));
});

test('undefined', () => {
    const msg = 'undefined is not an array.';
    expect(() => flatten(undefined)).toThrowError(Error(msg));
});

test('[1, "string"]', () => {
    const msg = 'Item string is not an array, neither an integer.';
    expect(() => flatten([1, "string"])).toThrowError(Error(msg));
});

test('[1, {}]', () => {
    const msg = 'Item [object Object] is not an array, neither an integer.';
    expect(() => flatten([1, {}])).toThrowError(Error(msg));
});