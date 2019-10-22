if [ "$1" == "" ]
then COMMENT="update"
else COMMENT=$1
fi

git add .
git status
git commit -m "$COMMENT"
git push origin dev