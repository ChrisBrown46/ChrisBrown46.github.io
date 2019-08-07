au build --env prod & ^
git add . & ^
git commit -m "GitHub pages update" & ^
git push & ^
git checkout master & ^
git checkout website dist & ^
move /Y dist\* . & ^
move /Y dist\css\* css\ & ^
rmdir dist\css & ^
rmdir dist & ^
git add . & ^
git commit -m "GitHub pages update" & ^
git push & ^
git checkout website & ^
echo "Finished publishing site to master branch"
