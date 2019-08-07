au build --env prod && ^
git add . && ^
git commit -m "GitHub pages update" && ^
git push && ^
git checkout master && ^
git checkout website dist && ^
move dist\* . && ^
rmdir dist && ^
git add . && ^
git commit -m "GitHub pages update" && ^
git push && ^
git checkout website
