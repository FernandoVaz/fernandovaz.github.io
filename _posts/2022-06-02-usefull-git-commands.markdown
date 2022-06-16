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

Cherry pick:

https://www.atlassian.com/git/tutorials/cherry-pick


```
git checkout branch_you_want_the_commit_on
git cherry-pick commitSha
```
