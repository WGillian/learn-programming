# Promises

Promises are an ES6 feature for helping with Async code.

## Callbacks (before promises)

Callbacks are the old way of executing async code (code which happens at some point in the future, but you're not quite sure when).

Callbacks are very simple. You provide a lambda, and at some point later your lambda gets called (sometimes with parameters).
Example:

```
_.delay(() => console.log('This happens later'), 1000)
```

or 

```
request.get('http://my.api.com/cats')
  .end((response, error) => {
    console.log(response) // <- The http response
    console.log(error) // <- The error
  })
```

## Promises

Promises are a new _type_ in Javascript. They're built in to es6. 

### Basic usage

```
request.get('http://my.api.com/cats')
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
```

The two main things you'll notice about a promise is that you can call `.then` and `.catch` on it. 

`.then` is for when things go well. `.catch` is when something unexpected / error happens.

### How to get a promise

Most libraries will offer a promise API along side a traditional callback API. Firebase, and Superagent do.

You can also wrap callback based libraries in a promise, we'll cover how to do this later.

### Advanced usage

You can return a value. And `.then` to get it later.
```
request.get('http://my.api.com/cats')
  .then((response) => "Kitty")
  .then((x) => console.log(x)) // <= Logs "kitty" because it was returned from the last `.then`
  .catch((error) => console.log(error))
```

You can also return another promise, and it will get evaluated and the result returned in the `.then`

```
request.get('http://my.api.com/cats')
  .then((catsResponse) => request.get('http://my.api.com/dogs'))
  .then((dogsResponse) => console.log(dogsResponse))
```

Promises don't actually get executed until you call `.then` on them. So you can pass them around or return them from a function:

```
const fetchDogs = () => { return request.get('http://my.api.com/cats') }

fetchDogs().then((dogsResponse) => console.log(dogsResponse))
```

### Writing your own promises

```
const delayPromise = (milliseconds) => {
  return new Promise((resolve, error) => {
    try {
      _.delay(() => resolve(), milliseconds)
    } catch (e) {
      error(e)
    }
  })
}

// you can then

delayPromise(1000)
   .then(() => console.log('Happens later')
```
