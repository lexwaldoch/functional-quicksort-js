const { List } = require("immutable");

/**
 * Performs a left fold (reduce) over an Immutable.js List.
 *
 * @param {Function} reducer Function that combines the accumulator and current element.
 * @param {*} initial Initial accumulator value.
 * @param {List} list Immutable list to process.
 * @returns {*} Final accumulated value.
 */
function foldLeft(reducer, initial, list) {
    if (list.size === 0) {
        return initial;
    }

    const accumulator = reducer(initial, list.first());

    return foldLeft(reducer, accumulator, list.shift());
}

/**
 * Applies a function to every element of a list.
 *
 * @param {Function} fn Mapping function.
 * @param {List} list Immutable list.
 * @returns {List}
 */
function map(fn, list) {
    return foldLeft(
        (acc, value) => acc.push(fn(value)),
        List(),
        list
    );
}

/**
 * Returns only the elements that satisfy the predicate.
 *
 * @param {Function} predicate
 * @param {List} list
 * @returns {List}
 */
function filter(predicate, list) {
    return foldLeft(
        (acc, value) =>
            predicate(value)
                ? acc.push(value)
                : acc,
        List(),
        list
    );
}

/**
 * Splits a list into two partitions.
 *
 * The first partition contains elements satisfying the predicate.
 * The second contains all remaining elements.
 *
 * @param {Function} predicate
 * @param {List} list
 * @returns {List}
 */
function partition(predicate, list) {
    return List([
        filter(predicate, list),
        filter(value => !predicate(value), list)
    ]);
}

/**
 * Recursively sorts a list using the Quicksort algorithm.
 *
 * @param {List<number>} list
 * @returns {List<number>}
 */
function quicksort(list) {
    if (list.size <= 1) {
        return list;
    }

    const pivot = list.first();
    const remainder = list.shift();

    const parts = partition(
        value => value <= pivot,
        remainder
    );

    const left = quicksort(parts.get(0));
    const right = quicksort(parts.get(1));

    return left
        .push(pivot)
        .concat(right);
}

module.exports = {
    foldLeft,
    map,
    filter,
    partition,
    quicksort
};
