```
<div id=1 onClick=(e) => {
  console.log(1)
}>
  <div id=2 onClick=(e) => {
    console.log(2)
  }>
   2
  </div>
  1
</div>
```


If you click on div 2. 

prints: 
```
2
1
```

```
<div id=1 onClick=(e) => {
  console.log(1)
}>
  <div id=2 onClick=(e) => {
    console.log(2)
    e.preventDefault()
  }>
   2
  </div>
  1
</div>
```
If you click on div 2. 

prints:
```
2
```
