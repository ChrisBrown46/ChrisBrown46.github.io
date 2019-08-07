au build --env prod
git add .
git commit -m "GitHub pages update"
git push
git checkout master
git checkout website dist
mv dist/* .
rmdir dist
git add .
git commit -m "GitHub pages update"
git push
git checkout website

