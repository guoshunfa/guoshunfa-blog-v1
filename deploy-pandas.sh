#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd ./docs/.vuepress/dist

echo pandas.cool > CNAME

# git
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:guoshunfa/pandascool master:home

cd -
