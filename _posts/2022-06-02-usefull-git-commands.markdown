Throwing away your git changes:

```
git fetch origin
git reset --hard origin/master
```

Dont care about your changes, just update looking at master

```
git fetch origin
git pull -X theirs
```

