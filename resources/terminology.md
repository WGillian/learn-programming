# Terminology

# Operator

Special built-in keywords you can use in the middle of an expression which do things.

Examples:

```
# Add +
1 + 1
=> 2

# Subtract -
1 - 1
=> 0

# Divide /
9 / 3
=> 3

# Multiply (times) *
3 * 3
=> 9

# Mod (Modulus) %
Tells you the remainder of a division

9 % 3
=> 0

9 % 2
=> 1 (because it goes in 4 times remainder 1)

# And &&
true && false
=> false
false && true
=> false
false && false
=> false
true && true
=> true

# Or ||
true || false
=> true

false || false
=> false

```

# Evaluate (sometimes called: Execute, Calculate)

Javascript calculating the value of something. You can practice this in the console.

The simplest example is the mathematical operators.

e.g.

```
1 + 1
=> 2
```
Javascript has evaluated (or calculated) the result.

There is a particular order it does this which we covered earlier.

# Expression
Something Javascript can evaluate.

Expressions can contain sub expressions. There is an order Javascript will execute the expressions in.

e.g.
`1` <- a very simple expression

`1 + 1` <- an expression which contains other expressions within it.

```
"hello".substring(0, 3).length`
 ^3      ^4       ^1 ^2 ^5    <-- execution order
```
# Inline

Taking lots of small bits of javascript and putting them together.

e.g.

```
const x = "hello"
console.log(x)

// Can be inlined to

console.log("hello")
```

To inline at something you'll have a var declared somewhere and some code which uses it. To inline you take the right hand side of the declaration and 'inline' it directly into the usage.

```
const x = "hello"
          ^^^^^^^   <- Right hand Side
console.log(x)

// Can be inlined to

console.log("hello")
            ^^^^^^^
```


# Statement

Statements contain one or more expressions.
Statements can be ended with either a semi colon or a new line.
A line of code. When you're using the debugger and use the jump to next line of button.

e.g.
`console.log("Hello");` <- 1 Statement containing a few expressions

e.g.

`console.log("Hello"); console.log("Goodbye");` <- 2 Statements on 1 line. That's allowed.


They don't always end on a new line.

```
const x = 1 + 2 + 3 //<- Statement 1
  + 4 + 5  //<- Still statement 1
  + 6 + 7  //<- Still statement 1
```
Is one statement even though it goes over a few lines.

If you use a semi colon or start a new statement the previous statement is finished.

e.g. We can remove just one `+` from the previous example to create two statements.
```
const x = 1 + 2 + 3
  + 4 + 5  //<- Statement 1
6 + 7 // <- Statement 2
```

A common case we'll see alot is:

```
_.map([1,2,3], (number) => {  //<- Statement 1
  return number + 1           //<- Still statement 1 and also a statement inside the lambda: return number + 1
})                            //<- Still statement 1

```
The debugger will jump over these three lines in one go.


# Declaration (sometimes called: definition or defining)

`const x = "x"` is a declaration. We say you're "Declaring x".

Other examples:

```
var x = 1
const myArray = []
const myObject = {hello: "world"}
```

### Component

A reusable thing which is displayed on the screen. It can have parameters which change exactly how it renders.

### Synchronous / A-Synchronous (Sync / Async)

Synchronous calls to functions return immediately.

e.g. `const adder = (x, y) => x + y`
`adder(1, 2)` immediately returns `3`.

We use Synchronous functions 95% of the time.


Asynchronouse calls are made and come back some time in the future. You're often not exactly sure when it will come back.

e.g. `_.delay(() => console.log(adder(1,2)), 2000)`

Usually async things come in the form a lambda which gets called later. Or a lambda in a promise (which we'll learn later).


### Library

### Framework

### API

### Backend

### Frontend

### Fullstack developer

### IO

### Algorithm

### Black Box

A box which is black.
