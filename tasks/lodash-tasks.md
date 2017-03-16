#Lodash tasks

These tasks should be completed mostly by using lodash. Search the lodash docs to find functions which might help you complete the tasks in the simplest way.

Answers should all start from just the `gillFamily` variable and shouldn't use vars from other answers. (Using the same code twice is obviously ok if that's what's required).

##People

```
var gillFamily = [{name: 'john', age: 20}, {name: 'richard', age: 27}, {name: 'debbie', age: 55}, {name: 'dan', age 25}, {name: 'robin', age 60}]
```


Starting point is always `gillFamily`.

###1

Write the code to produce an array of the names of the gill family. e.g `['john', 'daniel' ... etc.]`

###2
Write the code to produce an array of the names of the gill family including surnames. E.g. `['john gill', 'daniel gill'...etc.]`

###3
Write the code to sum the ages of the Gill family

###4
Write the code to calculate mean age of Gill family

###5
Write the code to get the members of the gill family under the age of 50.

###6
Write the code to calculate the number of members in the gill family.

###7
Write the code to calculate how many members of the gill family are under 50?

###8
Write the code to produce a comma seperated string of the Gill family members who are under 50's names with surnames. e.g. `'richard gill, john gill, daniel gill'`

###9
Generate the html for a table of Gill family members with name and age headings and each members name and age. Print the string with the HTML in to the console.

e.g.
```
<table>
  <thead>
...
```
###10
Some gill family members are sensitive about their age. If the family member is over 26. Drop their age.

e.g.

`[{name: 'john', age: 20}, {name: 'richard'}]`

###11
Sort the gill family members by age.

###12
Find the Gill family members who's name starts with a 'D'


###13
Group the Gill family members who's names start with different letters.

result should look like (ordering doesn't matter):
```
{
  d: [{name: 'daniel', age: 25}, {name: 'debbie', age: 55}],
  j: [{name: 'john', age: 20}],
  r: [{name: 'robin', age: 60}, {name: 'richard', age: 27}],
}
```

###14
Return the youngest member of the Gill family.

###15
Return the members of the Gill family who have an 'a' in their name.

###16
Return the members of the Gill family but with the first letter of their name capitalized.

###17
Find the youngest member of the Gill family with an 'a' in their name.
