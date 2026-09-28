# team_manager_be

## Git Commands

### git add
use this to add changes you made to your staging envirnoment. either mention a file/folder directly, or just do . for all files

### git status
check which files are currently staged. ALWAYS ALWAYS do before commiting, it will save you a lot of headaches

### git commit -m "`name here`"
this command submits a commit to your current branch allowing you to continue working, while having what you have done ready to be pushed off

### git push
this pushes all your stored commits to the corrisponding remote origin

### git push -u origin main `branch-name`
this creates a new remote branch with the name of your current branch.

### git switch -c `branch-name`
this switches to a new branch named whatever you named it, taking your non-commited changes with you

### git reset --soft HEAD~1
this undoes your latest commit and moves all changes that were commited back into your staged files

## Naming

### Backend routes
all backend trafick destined for the API layer must start with the prefix `/api/` this allows for our reverse proxy to properly filter content, and more efficiently serve up our static pages

### Frontend routes
All frontend routes must be made with the prefix `/` as to avoid mixing with the backend routes