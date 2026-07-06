const assert = require("assert");
const { List } = require("immutable");

const {
    foldLeft,
    map,
    filter,
    partition,
    quicksort
} = require("../src/algorithms");

assert.strictEqual(
    foldLeft((a, b) => a + b, 0, List([1,2,3,4])),
    10
);

assert(
    map(x => x * 2, List([1,2,3,4]))
        .equals(List([2,4,6,8]))
);

assert(
    filter(x => x <= 2, List([1,2,3,4]))
        .equals(List([1,2]))
);

assert(
    partition(x => x % 2 === 0, List([1,2,3,4]))
        .equals(List([
            List([2,4]),
            List([1,3])
        ]))
);

assert(
    quicksort(List([4,7,3,6,8,7,1,2,2,1,5]))
        .equals(List([1,1,2,2,3,4,5,6,7,7,8]))
);

console.log("All tests passed.");
