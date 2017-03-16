#Javascript execution order
## Outcome

You'll:

* Understand the order javascript code executes in.

## Advice

When debugging a problem it's useful to understand the order Javascript statements execute in.

A bit like in maths there are rules for which order things execute in.

e.g.

```
console.log((3 * 2) + 4)
```
will do: 
```
3 
// => 3 
2 
// => 2 
3 * 2
// => 6
(6) + 4
// => 10
console.log(10)
// prints "10"
```

The order of execution is defined [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).

A practical list is:

* Brackets
* `.`'s e.g `myArray.length`
* function calls
* Assignments e.g. `var x = 1`

## Tasks

* [Tasks](../../tasks/javascript-execution-order.md)



