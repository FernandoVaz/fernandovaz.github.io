Throwing away your git changes

```
git fetch origin
git reset --hard origin/master
```

Dont care about your changes, just update looking at master

```
git fetch origin
git pull -X theirs
```


Dont care about master, just update looking your changes

```
git fetch origin
git pull -X ours
```

Cherry pick:

https://www.atlassian.com/git/tutorials/cherry-pick


```
git checkout branch_you_want_the_commit_on
git cherry-pick commitSha
```

Git squashing commits:

```
TODO: Example with Squash commit
git checkout branch_you_want_the_commit_on
git cherry-pick commitSha
```


How git reset works in plain english:
https://stackoverflow.com/questions/2530060/in-plain-english-what-does-git-reset-do
