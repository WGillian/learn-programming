# React
## Outcome

You'll:

* Understand what react is and be able to make interactive web apps with it.

## Advice

We don't use much state in our applications. (We use a library called Redux instead in a lot of cases).

Don't use bind like he does. You can use a lambda instead.

`<MyComponent myProp={this.myFunc} />` won't work because `this` will be the wrong `this` (crapness of JS). But this works: 
`<MyComponent myProp={() => this.myFunc()} />`

### Core
* [Classes Quickly](../../resources/classesQuickly.md) 
* [React CodeSchool](http://campus.codeschool.com/courses/powering-up-with-react/)
* [Our homegrown React Primer](../../resources/reactByExample.md)

## Tasks

Do it like throwing Spaghetti at wall. Feel free to jump backwards, re-read, re-watch, play around until you get it.

* Do classes quickly primer.
* Do the Code School course.
* Read our homegrown React Primer.
* Do the [tasks](https://docs.google.com/document/d/1GfyOXSaBuvjIsNMh31gKfED_q7H-_3muY9xuRgStjQY/edit?usp=sharing)
* Build a [Static Site](../../tasks/reactStaticSite.md)
* Build a [React Site With State](../../tasks/reactStateSite.md)
