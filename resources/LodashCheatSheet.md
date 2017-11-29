When deciding which lodash function to use you must first consider what _type_ of data you have - whether it is an array, an object, an integer, a string (have a look at javascriptTypes.md if you're unsure) - then consider what it is you want to _do_ with that data - do you want to loop through the data; join an array into a 'string'; remove certain values from a data list; work out the mean of a collection of integers; remove properties from an object, etc. - and then consider what you want the function to _return_: an array, an object, a boolean, an integer etc. Once you have figured these things out, it is much easier to choose the appropriate function from the lodash docs as many of them 'do what they say on the tin'. 

Bear in mind that you may want to use one lodash function inside another - you may need one function to loop through a collection (eg. `_.map`) and another to make the desired action (eg. `_.omit`).

## Filter

`_.filter(collection, function)` 

* `collection` is a collection which could be an array, an object, or an array of objects.
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

`_.map(collection, function);`

Like `_.filter`, `_.map` also takes in an array or object, and calls the function once for each element in the array. You can think of it as containing the mechanics of a `for()` loop, but that it calls the function for each element. 

* `collection` is a collection which could be an array, an object, or an array of objects.
* `function` is a function which takes a parameter, and is applied to each element in the array.
* it returns an array, regardless of the type the collection began as.

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


## Includes

`_.includes(collection, value, [fromIndex=0])`

`_.includes` checks whether a given value is included in a collection. The collection can be a string. You can dictate from which index position you would like to search from. If fromIndex is negative, it's used as the offset from the end of collection.

* `collection` can be an array, an object or a string.
* `value` can be any type of value: a string, an integer, a boolean.
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


## Some

`_.some(collection, predicate);`

`_.some` checks the collection to see if *any* element of the collection returns truthy for the predicate and will stop the iteration. 

* `collection` can be an array or an object.
* `predicate` can be a function invoked per iteration. It can also be a type.
* Returns a boolean: True if any element of the collection passes the predicate check, False if not. 

**Note `_.includes` compares a _value_ with the collection, while `_.some` checks to see if an element in a collection returns true for a _function_.

### Examples

```
_.some([null, 0, 'yes', false], Boolean);

# returns true


_.some([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(num) {
  return num % 2 === 0; });

# returns true

var happinessIndex = [
  { name: 'barney', happy: true, sad: false },
  { name: 'fred',   happy: false, sad: true }
];

_.some(happinessIndex, ['sad', false]);

# returns true
```

## Every

`_.every(collection, predicate);`

Checks if predicate returns truthy for _all_ elements of collection. Iteration is stopped once predicate returns falsey. 
**Note: This method returns true for empty collections because they are truthy, and have nothing in them to return falsy for the predicate.

* `collection` can be an array or an object.
* `predicate` can be a function invoked per iteration. It can also be a type, a property or a value.
* Returns a boolean: True if _all_ elements of the collection passes the predicate check, False if not.

### Examples

```
_.every([null, 0, 'yes', false], Boolean);

# returns false


_.every([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(num) {
  return num % 2 === 0; });

# returns false

var happinessIndex = [
  { name: 'barney', happy: true, sad: false },
  { name: 'fred',   happy: true, sad: false }
];

_.every(happinessIndex, ['sad', false]);

# returns true
```

## Find

`_.find(collection, predicate, [fromIndex]);`

`_.find` will iterate over a collection and return the first element the predicate returns as true. 

* `collection` can be an array or an object.
* `predicate` a way to identify the right element: can be a function invoked per iteration, or a property, or a value.
* [fromIndex] is where `_.find` will search from.
*it returns the matched element, without changing the type.

### Examples

```
var happinessIndex = [
  { name: 'barney', happy: true, sad: false },
  { name: 'fred',   happy: false, sad: true },
  { name: 'alice',  happy: true, sad: false }
];

_.find(happinessIndex, ['happy', true]);

# returns { name: 'barney', happy: true, sad: false}


_.find(happinessIndex, 'happy');

# returns { name: 'barney', happy: true, sad: false}


_.find(happinessIndex, 'happy', [1]);

# returns { name: 'alice',  happy: true, sad: false }

```

## FindIndex

`_.findIndex(array, perdicate, [fromIndex]);`

This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

* `array` is an array to be inspected.
* `predicate` a way to identify the right element: can be a function invoked per iteration, or a property, or a value.
* [fromIndex] is where `_.findIndex` will search from.
*it returns the index of the matched element.

```
var happinessIndex = [
  { name: 'barney', happy: true, sad: false },
  { name: 'fred',   happy: false, sad: true },
  { name: 'alice',  happy: true, sad: false }
];

_.findIndex(happinessIndex, ['happy', true]);

# returns 0


_.findIndex(happinessIndex, 'happy');

# returns 0


_.findIndex(happinessIndex, 'happy', [1]);

# returns 2

```


## Get

`_.get(object, path, [defaultValue]);`

`_.get` retrieves a value at the given path of an object. If the value in this location is undefined, the 'defaultValue' is returned in its place.

* `object` is the object you are inspecting in which you expect to find the value.
* `path` is the route you are dictating to find the value. eg. 'object.property' or object[property].
* it returns the value found in the specified path location. Else:
* `defaultValue` is returned if value at path location is undefined.

### Examples

```
var dogKennel = {'# of dogs': 2, dogs: [{name: 'Peanut', breed: 'corgi'}, {name: 'Bruce', breed: 'Great Dane'}]};

_.get(dogKennel, 'dogs[0]', 'default');

# returns {name: 'Peanut', breed: 'corgi'}

_.get(dogKennel, 'dogs.1.name', 'default');

# returns 'Bruce'

_.get(dogKennel, 'dogs.2', 'default');

# returns 'default'
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

* `object` accepts an object with properties of any type.
* `property` is the property of the object you wish to omit. Should be given as a 'string', or a ['string'].
* it returns a new object with the specified property omitted.

### Examples

```
var object = {type: 'house', 'door #': 17, 'pets allowed': false, ratings: [4, 5, 3, 7, 6]};

_.omit(object, 'door #', 'type');

# returns {'pets allowed': false, ratings: [4, 5, 3, 7, 6]}; 
```


## Reject

`_.reject(collection, function);`

The opposite of `_.filter`; this method returns the elements of collection that function does not return truthy for. `_.reject` accepts an array or an object and a function as parameters. It loops through each element appling the function and returning a boolean value. If this value is true it is rejected from the output. `_.reject` only allows elements for which the function returns false to be included in its returning output. This output does not change the type, it will return an array, an object, an array of objects etc.

* `collection` is a collection which could be an array, an object, or an array of objects.
* `function` is a function which takes a parameter and returns a boolean
* it returns an array, an object, an array of objects.

### Examples

```
_.reject([1,2,3], x => x < 2)

# returns [2,3]

```


```
_.reject([1,2,3], (x, i) => i < 2)

# returns [3]

# the second parameter is the current index of the element `x`
```
```
var arrayOfObjects = [{a: 1, b: 'green'}, {a: 5, b: 'red'}, {a: 3, b: 'blue'}];

_.reject(arrayOfObjects, function(object){ return object.a > 2 });

# returns [{a: 1, b: 'green'}]
```


## GroupBy

`_.groupBy(collection, function)`

'_.groupBy' accepts a collection then iterates the function over the elements, then creates a new aggregate object with keys that fit the function and values.

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
* it always returns a new ascending-order sorted array, or an array of objects.

### Examples

```
var people = [{name: 'Jess', age: 31}, {name: 'Tom', age: 29}, {name: 'Rosa', age: 29}, {name: 'Louie', age: 31}];

_.sortBy(people, function(o){ return o.name; });

# return [{name: 'Jess', age: 31}, {name: 'Louie', age: 31}, {name: 'Rosa', age: 29}, {name: 'Tom', age: 29}];

# return is in alphabetical order.


_.sortBy(people, 'age');

# return [{name: 'Tom', age: 29}, {name: 'Rosa', age: 29}, {name: 'Jess', age: 31}, {name: 'Louie', age: 31}];
```


## SumBy

`_.sumBy(array, function);`

`_.sumBy` takes an array and iterates the given function or identifier (eg. property) and gives the sum of the values indicated by the function/identifier.

* `array` is the array to be iterated over.
* `function` is iterated over the keys to check which values will be added together.
* it returns a number: the sum of the values at the indicated keys.

### Examples

```
var objects = [{ age: 4 }, { age: 2 }, { age: 8 }, { age: 6 }];
 
_.sumBy(objects, function(o) { return o.age; });
# returns 20
 

_.sumBy(objects, 'age');
# returns 20
```


## MeanBy

`_.meanBy(array, function);`

`_.meanBy` takes an array and iterates the given function or identifier (eg. property) and gives the sum of the values indicated by the function/identifier, divided by the number of values, thereby producing the mean.

* `array` is the array to be iterated over.
* `function` is iterated over the keys to check which values will be used to calculate the mean.
* it returns a number: the mean of the values at the indicated keys.

### Examples

```
var objects = [{ age: 4 }, { age: 2 }, { age: 8 }, { age: 6 }];
 
_.sumBy(objects, function(o) { return o.age; });
# returns 5
 

_.sumBy(objects, 'age');
# returns 5
```

## IsEqual

`_.isEqual(value, otherValue);`

`_.isEqual` takes two values and performs a deep comparison to determine whether they are equal.

* `value` is the value to compare.
* `otherValue` is the other value to compare.
* it returns a boolean: True if the values are equal, False if not.

### Examples

```
var object = { 'a': 1 };
var otherObject = { 'a': 1 };
 
_.isEqual(object, other);

# returns true
 

object === other;

# returns false
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

## Flatten

`_.flatten(array)`

Flattens an array a single level deep.

*`array` only accepts an array
* it returns the flattened array

### Examples

```
_.flatten([1, [2, [3, 4], 5], 6, {name: 'jess', age: 24}]);

# returns [1, 2, [3, 4], 5, 6, {name: 'jess', age: 24}]
```




compact, debounce, throttle






