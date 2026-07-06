# Functional Programming Algorithms in JavaScript

A collection of classic functional programming algorithms implemented in JavaScript using recursion and immutable data structures.

This project demonstrates higher-order functions by implementing `foldLeft`, `map`, `filter`, `partition`, and a recursive quicksort without using traditional looping constructs.

---

## Features

- Recursive fold (reduce)
- Functional map implementation
- Functional filter implementation
- List partitioning
- Recursive quicksort
- Immutable.js data structures

---

## Technologies

- JavaScript (Node.js)
- Immutable.js
- Functional programming
- Recursion

---

## Concepts Demonstrated

- Higher-order functions
- Recursive algorithms
- Immutable collections
- Divide-and-conquer algorithms
- Functional composition

---

## Example

```javascript
const numbers = List([4,7,3,6,8,1,5]);

console.log(quicksort(numbers));
// List [1,3,4,5,6,7,8]
```

---

## Running

Install dependencies

```bash
npm install
```

Run the tests

```bash
node test/algorithms.test.js
```

---

## Skills Demonstrated

- Functional programming
- Algorithm implementation
- Recursive problem solving
- Immutable data structures
- JavaScript

---

## Future Improvements

- Add merge sort
- Benchmark against JavaScript's native sort
- Add TypeScript typings
- Add Jest unit tests
