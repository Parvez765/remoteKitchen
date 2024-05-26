Step 1- First of All for naming my github brach i will run below command
hotfix/bug-fix

Step 2 - Then i will go to the production branch using this command
git checkout production

Step 3 - Then pull the production branch using this command
git pull origin production

Step 4 - Then i will create and checkout at the hotfix branch
git checkout -b hotfix/bug-fix

Then i will change what it needs to be in this brach

Step 5- Then i will add and commit and push the brach with the production branch
git add .
git commit - m "Fixed the bug in this branch"
git push origin hotfix/bug-fix

Then in github by clicking "Pull Request " button i will create a new pull request and will wait for code review. And After finishing code review hotfix branch will merge with the production branch.

And then finally we will again pull the production branch using this command
git pull origin production

This is how we can do this work
