#Types

There are different 'types' in Javascript you'll already be familar with a few. 

## Strings

```
"Hello"  // A String
'hello'  // Also a string
`hello`  // Also a string

```

## Integers
Whole numbers
```
1
2
3
4
999999999
```

## Floats

numbers with a point in.

```
1.2
3.4
777777.123
1.0 // Is a float because it has a point in. Integer version of 1 doesn't have a point in it.
```

## Arrays

Arrays are a type of *collection*. They can be used to store other types inside them. 

```
[]
[1] // Array of integer
[1.2] // Array of floats
[{}] // Array of objects
[[1,2,3], [5,6]] // Array of Arrays with integers in.
```


## Objects

Objects are also a type of collection. They have keys and values. Keys are usually strings and values can be any other type.


```
{hello: 1} // Object with integer inside
{hello: {world: 1}} // Object with object with integer inside
{hello: [1,2,3]} // Object with array of integers
```

## Don't mix types inside collections
It works. But it's confusing. Probably best not to.
```
[1,"Oh no!", [1,2,3]] 
{hello: "buddy", goodbye: 11}
```

## Functions expect particular types as parameter

When you call a function that function's parameters are expected to be a particular type.

```
Maths.abs(-7)
// => 7

Maths.abs(-7.7)
// => 7.7
``` 

`Maths.abs` expects an integer or a float. But if you pass something else that just doesn't make sense.

e.g. `Maths.abs("Spaghetti")` doesn't really make sense

## Functions return particular types

Return types are the same `Maths.abs` returns a float if you give it a float, and an integer if you give it an integer.

In Javascript there is no easy way to tell what the parameter types and return types are. You must look at other examples and read documentation of libraries to figure it out.
