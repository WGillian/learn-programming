# Classes Quickly

Classes are part of object oriented programming. They're a little tricky to learn. 

The aim of this is just to allow you to use them in a basic way.

## A basic class

```
class Apple {

}
```

You can then talk about `Apple` by saying: `Apple`. It's as if `const` has been defined.

## Adding a function (method)

Functions inside classes are called **methods**.
```
class Apple {

   color() {  // <- Just a normal function
     return 'red' 
   }

}
```

## this

When you're inside a class there is a special invisible variable that's always there. It's called `this`. 

`this` is only a thing inside a class. You can't use it outside a class. 

## Calling a method from a method

You do it using `this.methodName()`

```
class Apple {

   color() {  // <- Just a normal function
     return 'red' 
   }

   printColor() {
     console.log(this.color())
   }

}
```

## Special constructor method

The constructor method is special. It always gets called whenever you 'use' a class.
```
class Apple {

   constructor() {
     super() // <- Must be here. Must go first
     console.log('This code gets called before anything else in the class')
   }

}
```
## Where does the code go?

In methods. Nowhere else. 

```
class Apple {
  console.log('THIS IS AN ERROR') // <- NOT ALLOWED

  color(shade) {
    console.log(shade) // <- This is fine
  }

}
