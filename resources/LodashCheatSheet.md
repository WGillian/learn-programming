When deciding which lodash function to use you must first consider what _type_ of data you have - whether it is an array, an object, an integer, a string - then consider what it is you want to _do_ with that data (have a look at javascriptTypes.md if you're unsure)- do you want to loop through the data; join an array into a 'string'; remove certain values from a data list; work out the mean of a collection of integers; remove properties from an object, etc. - and then consider what you want the function to _return_: an array, an object, a boolean, an integer etc. Once you have figured these things out, it is much easier to choose the appropriate function from the lodash docs as many of them 'do what they say on the tin'. 

Bear in mind that you may want to use one lodash function inside another - you may need one function to loop through a collection (eg. `_.map`) and another to make the desired action (eg. `_.omit`).

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
```
var arrayOfObjects = [{a: 1, b: 'green'}, {a: 5, b: 'red'}, {a: 3, b: 'blue'}];

_.filter(arrayOfObjects, function(object){ return object.a > 2 });

# returns [{a: 5, b: 'red'}, {a: 3, b: 'blue'}]
```

## Map

`_.map(array, function);`

Like `_.filter`, `_.map` also takes in an array or object, and calls the function once for each element in the array. You can think of it as being like a shorthand for a `for()` loop.

* `array` is an array
* `function` is a function which takes a parameter, and is applied to each element in the array.
* it returns an array.

It calls the function once for each element in the array. Each call passes the current element in as a parameter to the function.

It returns all of the data entered in an array of values.

### Examples

```
_.map([5, 9, 6], function(i){ return i + 2 });

# returns [7, 11, 8]
```
```
var arrayOfObjects = [{a: 1, b: 'green'}, {a: 5, b: 'red'}, {a: 3, b: 'blue'}];

_.map(arrayOfObjects, 'b');

# returns ['green', 'red', 'blue']
```

## Join

`_.join(array, separator= ', ');`

`_.join` takes in an array and returns the array joined together in a string with your separator between each value.

* `array` is an array
* `separator` must be a string and will form a concatenation between each value of the array.
* it returns the joined string.

### Examples

```
_.join(['a', 'b', 'c'], '~');

# returns 'a~b~c'
```

## Includes

`_.includes(collection, value, [fromIndex=0])`

`_.includes` checks whether a given value is included in a collection. The collection can be a string. You can dictate from which index position you would like to search from. If fromIndex is negative, it's used as the offset from the end of collection.

* `collection` can be an array, an object or a string.
* `value` can be an type of value: a string, an integer, a boolean.
* `fromIndex` the index to search from.
* Returns a boolean: True if the value is included, False if else. 

### Examples

```
_.includes([1, 2, 3], 1);
# returns true
 
_.includes([1, 2, 3], 1, 2);
# returns false
 
_.includes({ 'a': 1, 'b': 2 }, 1);
# returns true
 
_.includes('abcd', 'bc');
# returns true
```

## Size

`_.size(collection)`

`_.size` takes in a collection to inspect - this can be an array, an object, or a string - and returns the length of an array, string or number of properties of an object. It works in the same way as `.length` in JavaScript.

* `collection` is a collection: an array, object, or string.
* it returns a number: the size of the collection.

```
var array = [1, "hello world", true, {name: 'Eric', age: 22}];

_.size(array);

# returns 4
```
```
_.size({name: 'Eric', age: 22});

# returns 2
```
```
_.size("Underground");

# returns 11
```

## Capitalize

`_.capitailze(string);`

`_.capitalize` takes a string as its argument and returns the string with the first character capitalised and the rest in lowercase.

* `string` can only take a string as an argument.
* it returns the capitalised string.

```
_.capitalize('FRED');

# returns 'Fred'
```


## Omit

`_.omit(object, property)`

`_.omit` only accepts an object and a property to be omitted. Then returns a new object with the specified property omitted.

* `object` is an object with properties of any type.
* `property` is the property of the object you wish to omit. Should be given as a 'string', or a ['string'].
* it returns a new object with the specified property omitted.

### Examples

```
var object = {type: 'house', 'door #': 17, 'pets allowed': false, ratings: [4, 5, 3, 7, 6]};

_.omit(object, 'door #', 'type');

# returns {'pets allowed': false, ratings: [4, 5, 3, 7, 6]}; 
```


## GroupBy

`_.groupBy(collection, function)`

'_.group' accepts a collection then iterates the function over the elements, then creates a new aggregate object with keys that fit the function and values.

* `collection` is a collection - an array or object - to be inspected.
* `function` is iterated over the keys.
* it always returns a newly composed object.

```
_.groupBy(['one', 'two', 'three'], 'length');

# returns { '3': ['one', 'two'], '5': ['three'] }
```
```
var people = [{name: 'Jess', age: 31}, {name: 'Tom', age: 29}, {name: 'Rosa', age: 29}, {name: 'Louie', age: 31}];

_.groupBy(people, 'age');

# returns {31: [{name: 'Jess', age: 31}, {name: 'Louie', age: 31}], 29: [{name: 'Tom', age: 29}, {name: 'Rosa', age: 29}]}
```


## SortBy

`_.sortBy(array, function);`

`_.sortBy` takes an array or object and a function or property and sorts the array in ascending order according to what the funcion dictates, returning an array.

* `collection` is a collection - an array or object - to be inspected.
* `function` is iterated over values.
* it always returns a new ascending-order sorted array, or array of objects.

### Examples

```
var people = [{name: 'Jess', age: 31}, {name: 'Tom', age: 29}, {name: 'Rosa', age: 29}, {name: 'Louie', age: 31}];

_.sortBy(people, function(o){ return o.name; });

# return [{name: 'Jess', age: 31}, {name: 'Louie', age: 31}, {name: 'Rosa', age: 29}, {name: 'Tom', age: 29}];

# return is in alphabetical order.


_.sortBy(people, 'age');

# return [{name: 'Tom', age: 29}, {name: 'Rosa', age: 29}, {name: 'Jess', age: 31}, {name: 'Louie', age: 31}];
```



##SumBy
##MeanBy


sumby, meanby, sortby, find, findindex, reject, flatten, every, some, compact, isequal, get, debounce, throttle






