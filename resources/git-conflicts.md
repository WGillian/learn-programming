# Git Conflicts

If you use git (especially with other people) you're going to run into these.


## The commit history
Each branch in git has a commit history. Each commit has a SHA which might look like this: `0c8160b`

You can view SHAs by doing `git log` or looking at the commit history on github.

## To keep git happy

If two branches share a common history of SHAs. Then git is happy.
```
e.g. 
branch-1: A, B, C, D, E
branch-2: A, B, C, D, E, F
```

If you PR branch-2 -> branch-1, git will release that A, B, C, D, E are in common to both and just show the diff of F.

The important thing is that the two branches share a common history. 

You should do everything you can to keep git happy in this way. 

### Things you can do to keep it happy.

Before you start working on a new feature: 
* `git checkout master` 
* `git pull origin master` <- or the place you'll want to do a PR to in a bit. 
* `git checkout -b my-new-branch`

That way you've got all the latest commits before you start working on something new. 

## How to resolve a conflict.

Sometimes conflicts are unavoidable.

To solve them for the branch you're working on. 

* Make sure everything is commited (`git status` is clean)
* `git pull origin master` <- or the place you'll want to PR to.

### Easy resolve

Sometimes it all just works. It will prompt you for a commit message.

Then `git push origin your-branch-you` so that github knows that you've merged

### Resolving a conflict

Sometimes you'll get conflicts (git will tell you). Bad luck.

`git status` to see which files conflicted, open each of them in your editor. 

You'll see funny stuff like this:

```
<<<<< HEAD 
code code code       <- a)
========
other code code code <- b)
>>>>>>
```

You need to pick either a) or b) or some custom made combination until the code looks right to you. (Usually it's either a) or b)). 

There should be no more `<<<<` or `>>>>` or `=====` in your files. Just code which looks good to you.

Then 
* `git add .` 
* `git commit -m "merged"`
* `git push origin your-branch-you` so that github knows that you've merged



