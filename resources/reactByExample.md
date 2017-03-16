# React

### JSX

Think of JSX as a new type in Javascript (It will only work whilst using webpack).

```
const banana = "banana"
const appleCount = 1 
const myArray = []
const myObject = {hello: 1}
const someHtml = <p>Hello!</p> // <- JSX
```

Notice there are no quotes around it - it's not a string. It's a whole new type.


### Differences from normal HTML

#### Attribute names are different

* They're [camel cased](https://en.wikipedia.org/wiki/Camel_case)
* Sometimes they're a tiny bit different from normal HTML [Read more](https://facebook.github.io/react/docs/tags-and-attributes.html)

A good example is `class="my-css-class"`

e.g.

```
HTML                                               JSX
<button class="my-css-class">Click Me</button> -> <button className="my-css-class">Click Me</button>
```

#### You can write Javascript inside your JSX.

JSX works just like normal HTML unless you do one thing. If you put `{}` then inside the brackets you go back to javascript.

```
var x = 1
var someHtml = <div>{x + 1}</div>
// => <div>2</div>
```

```
var buttonClass = 'my-css-class'
var button  = <button className={buttonClass}>Click Me</button>
//=> <button className="my-css-class">Click Me</button>
```

An *Exception* to this rule
```
var elementType = 'div'
var someHtml = <elementType></elementType>
// => <div></div>
```
#### JSX in JSX

Since JSX is just javascript (it's a new type remember!)

You can also put that inside `{}`

```
const apple = <p>Apple!</p>
<div>{apple}</div>
// => <div><p>Apple!</p></div>
```

#### Arrays in JSX

If you use `{}` with an array. JSX will put each thing in the array one after another.

```
const fruits = [
  <p>Apple</p>,
  <p>Banana</p>,
  <p>Pear</p>
]
<div>{fruits}</div>
// => <div><p>Apple</p> <p>Banana</p> <p>Pear</p></div>
```

This makes `map` **really** useful:

```
const numbers = [1, 2, 3]
const numbersJSX = _.map(numbers, (number) => <p>{number}</p>) 
// => [<p>1</p>, <p>2</p>, <p>3</p>] 
<div>{numbersJSX}</div>
// =>  <div><p>1</p> <p>2</p> <p>3</p></div>
```


## React

React takes functions which return JSX, evalutes them, and puts that JSX/HTML inside your web browser (on the screen). 

### Stateless Functional Components (Not covered in code school).

```
const Banana = () => <p>Banana</p> // Just a lambda that returns some JSX
```

We call `Banana` a **component**. Components start with capital letters.

You can use this inside another component like this:

```
const FruitBowl = () => <Banana /> 
// Renders <p>Hello</p> on the screen
```

`<Banana />` is a special syntax for calling the function we defined above. 

`<Banana />` is like saying: `Banana()`

#### With Props

Props is an object which contains all the arguments to our component.

```
const Cat = (props) => <p>Meow my name is: {props.name}</p> 
```
`props` comes in as a parameter in your lambda. 

```
const Geoff = () => <Cat name={'Geoff'} /> 
// Renders <p>Meow my name is: Geoff</p> on the screen
```

In this case we're calling our `Cat` function with a single prop: `name` with a value of `'Geoff'`.

`<Cat name={'Geoff'} />` is like saying: `Cat({name: 'Geoff'})`
Both would return `<p>Meow my name is: Geoff</p>`

### Components using class

React also allows you to make components using the class syntax

```
class Cat extends Component {
  render() {
    return <p>{this.props.name}</p> //<- This bit is the same
  }
}
```

The props are now in `this.props` rather than just `props`.

This can still be used by saying: `<Cat name={'Geoff'} />`

Using classes is slightly more complicated.

The advantages are:

* You can use `this.state` and `this.setState`
* You can use the lifecycle methods which fire at different points when your components get rendered.

## Rerendering

React components can be rendered on the screen for some time. React will make sure that your components stay up to date
on the screen as changes happen.

### What if props change

If the props change react will rerun your function and the result will be immediately displayed on the screen.

For example:

`() => <Cat name={'Geoff'} />` -> `() => <Cat name={'Dave'} />` 

You'll initially see `<p>Geoff</p>` then you'll see `<p>Dave</p>`

React takes care of this for you automatically.

### Making a change with state

You can't make props change without using state.

* State is very similar to props. 
* State changes can happen over the lifetime of a component. 
* State is accessed by using `this.state` - similarly to props
* State is changed by calling `this.setState({newStateGoes: 'here'})`

```
class Cat extends Component {
  constructor() {
    super() // <- This is just always needed
    this.state = {name: 'Geoff'} // Set the initial state
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({name: 'Dave'})}>Press Me</button>
        <p>{this.state.name}</p> //<- We're accessing state here.
      </div>
    )
  }
}
```

This component can be used like: `<Cat />`

It will render:

```
  <div>
    <button onClick={() => this.setState({name: 'Dave'})}>Press Me</button>
    <p>Geoff</p>
  </div>
```

When you press the button `this.setState({name: 'Dave'})` gets called.  State will be updated to be `{name: 'dave'}`. React will automatically rerender your component as:
```
  <div>
    <button onClick={() => this.setState({name: 'Dave'})}>Press Me</button>
    <p>Dave</p>
  </div>
```

### Using state to change props

You can use this same technique to change props.

```
const Cat = (props) => <p>Meow my name is: {props.name}</p> 

class CatPicker extends Component {
  constructor() {
    super() // <- This is just always needed
    this.state = {name: 'Geoff'} // Set the initial state
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({name: 'Dave'})}>Press Me</button>
        <Cat name={this.state.name} /> //<- We're passing some state as a prop.
      </div>
    )
  }
}
```

`<CatPicker />` initially renders:

```
  <div>
    <button onClick={() => this.setState({name: 'Dave'})}>Press Me</button>
    <p>Meow my name is: Geoff</p>
  </div>
```

Pressing the button will cause the `name=` prop to change. React automatically rerenders the whole thing:

```
  <div>
    <button onClick={() => this.setState({name: 'Dave'})}>Press Me</button>
    <p>Meow my name is: Dave</p>
  </div>
```
