#Exporting and Importing

##Setup

Follow [these instructions](./cloneReactSeedInstructions.md)

Once it's up and running go to http://localhost:3000/importExportTasks.

`import` and test your answers in `src/components/importExportTasks/index.js`

All your answers should go in the `src/components/importExportTasks` 

1. 

`export default` a string: "Banana!" in a file `banana.js`

import it and `console.log` it in `src/components/importExportTasks/index.js`


2.

In addition to a) `export` a `const` called `apple` which contains a string: "Apple!" in a file `apple.js`

import it and `console.log` it in `src/components/importExportTasks/index.js`


3.

`export default` a function in a file `myFunctions.js`

The function should take two numbers and return the result of adding them together.

import it and `console.log` the output in `src/components/importExportTasks/index.js`.

4.

Create a file `fruits.js`

Add an export default of a string `'Get your fruits here'`

Add two exported consts `apple` and `banana`

Import all three and `console.log` the output in `src/components/importExportTasks/index.js`.

5.

Create a folder `pies`

Then in `src/components/importExportTasks/index.js`, make this work:
```
import pieMenu, {applePie, blueberryPie} from './pies'

console.log(pieMenu)
// prints "Apple Pie, Blueberry Pie"
console.log(applePie)
// prints "Apple Pie"
console.log(blueberryPie)
// prints "Blueberry Pie"
```

6.

Use the excellently useful npm module 'cat-names' to generate a name for you cat: https://www.npmjs.com/package/cat-names

In our projects you can install a module using Yarn (Yarn is like a better version of npm) like this: `yarn add <module_name>`.

You will see the `package.json` and `yarn.lock` files have changed (you'll want to commit those changes too!).

Once you have installed it you can use `import` to import `'cat-names'` module and use it in your code. (We don't use `require` except in special circumstances).

