#Exporting and Importing

You've learned to write Javascript. Congrats!

So far you put code into `.js` files then used `<script src="myfile.js" />` to load them in the HTML.

Webpack is a magical beast. It takes all your `.js` files and 'inlines' (merges) them into one big file (how clever).

It then automatically adds one `<script src"oneMassiveJavascriptFile.js" />` to your HTML for you. 

## Why export and import?

You can write all your code in one giant file. It will work, but it just gets confusing once you have a 3000 line file. In general we like to have files which are less than 2 screens high.

This is only to help human beings understand what the hell is going on. Javascript doesn't care if you break it up, because it's a computer.

## Export Default

### How it works

* You can only `export default` once per file. 
* It exports an expression not a declaration.

You can do:

`export default "Banana"`

`export default 1`

`export default [1,2,3]`

`export default {hello: "world"}`

`export default (a, b) => a + b` <--- functions are good :)

`export default (a, b) => { return a + b }`

`export default const x = 1` <----ERROR can't export a const.

You can then import your `export default`'d expression in another file.

e.g. 

```
import hello from './hello'

console.log(hello) // <--- hello is just var in your program now :)
```

Importing an exported default, you can name the import var whatever you like.

```
import hello123 from './hello'

console.log(hello123) // <--- hello123 is not named like the original.
```

### Examples

1.

`myFolder/banana.js`
```
export default "Banana!"
```


`myFolder/fruitBowl.js`
```
import banana from './banana'

console.log(banana) // => prints "Banana!"
```

2.

`myFolder/banana.js`
```
export default () => "Banana!" // Banana function
```


`myFolder/fruitBowl.js`
```
import banana from './banana'

//banana is a function (lambda)

console.log(banana()) // => prints "Banana!"
```

3.

`myFolder/maths.js`
```
export default (a, b) => a + b // Banana function
```


`myFolder/doSomeMaths.js`
```
import adder from './maths'

//adder is a function (lambda)

console.log(adder(1, 2)) // => prints 3
```
4.

`myFolder/maths.js`
```
export default (a, b) => a + b // Banana function
```


`myFolder/doSomeMaths.js`
```
import anyNameIGoddamPleaseAdder from './maths'

//anyNameIGoddamPleaseAdder is a function (lambda)

console.log(anyNameIGoddamPleaseAdder(1, 2)) // => prints 3
```


## Exporting a const

### How it works
You can also name your exports by doing an `export const`.


* This only works with declarations. It doesn't work with expressions.
* You can have as many `export const`s as you like provided they all have different names.
* Names matter when importing.

You can do:


`export const banana = "Banana"`

`export const aNumber = 1`

`export const myArray = [1,2,3]`

`export const helloWorld = {hello: "world"}`

`export const adder = (a, b) => a + b` <--- functions are good :)

`export const adder1 = (a, b) => { return a + b }`

`export 1` <----ERROR can't export an expression.

### Examples

1.

`myFolder/banana.js`
```
export const banana = "Banana!"
```


`myFolder/fruitBowl.js`
```
import { banana } from './banana'

console.log(banana) // => prints "Banana!"
```

2.

`myFolder/banana.js`
```
export const banana = () => "Banana!" // Banana function
```


`myFolder/fruitBowl.js`
```
import { banana } from './banana'

//banana is a function (lambda)

console.log(banana()) // => prints "Banana!"
```

3.

`myFolder/banana.js`
```
export const banana = () => "Banana!" // Banana function
export default "Bananananana!"
```


`myFolder/fruitBowl.js`
```
import banananana, { banana } from './banana' // You can do both at once!
//banananana is a string
//banana is a function (lambda)

console.log(banananana) // => prints "Bananananana!"
console.log(banana()) // => prints "Banana!"
```

## index.js

Import and Exporting has an extra useful trick. If you name a file `index.js` you can import it by just mentioning the name of the folder.

###Example

`banana/index.js`

```
export default "Banana!"
```

`myFile.js`
```
import banana from './banana' <- just the folder

console.log(banana) <- prints 'Banana!'
```

## Import npm modules

If you have an npm module in your project. You can import it like this `import _ from 'lodash'`. Some libraries also have `const` exports, some don't. Read the documentation (usually the github for the project) to find out how exactly to import it and what you can do with it.
