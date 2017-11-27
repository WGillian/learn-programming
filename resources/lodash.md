## Filter

`_.filter(array, function)` 

* `array` is an array
* `function` is a function which takes a parameter and returns a boolean
* it returns an array.

It calls the function once for each element in the array. Each call passes the current element in as a parameter to the function.

If the function returns true the element is kept in the output array, otherwise it's discarded.

The output of the function is the original array with 0 or more elements missing.

### Examples

```
_.filter([1,2,3], x => x < 2)

# returns [1]

```


```
_.filter([1,2,3], (x, i) => i < 2)

# returns [1, 2]

# the second parameter is the current index of the element `x`
```
