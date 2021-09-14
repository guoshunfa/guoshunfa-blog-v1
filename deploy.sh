#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd ./docs/.vuepress/dist

echo doc.pandacode.cn > CNAME

# git
git init
git add -A
git commit -m 'deploy'
# gitee
# git push -f git@gitee.com:guoshunfa/panda-blog.git master:blog-dist
# github
git push -f git@github.com:guoshunfa/guoshunfa.github.io.git master:blog-dist

# 服务器 49.232.167.211 txyun.pandacode.cn
# sshpass -p Guoshunfa990709 ssh root@49.232.167.211 rm -rf /www/wwwroot/www.pandacode.cn
# sshpass -p Guoshunfa990709 ssh root@49.232.167.211 mkdir /www/wwwroot/www.pandacode.cn
# sshpass -p Guoshunfa990709 scp -r ./docs/.vuepress/dist/* root@49.232.167.211:/www/wwwroot/www.pandacode.cn

cd -
