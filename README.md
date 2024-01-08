# choices

to publish new styling to jsdelivr:

```bash
# 1. update version in package.json

# 2. build
pnpm run build

# 3. push to github
git add .
git commit -m "new version"
git push

# 4. create tag
# git tag v0.0.{version} e.g.
git tag v0.0.2
git push --tags
```
