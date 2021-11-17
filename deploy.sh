#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# set -e

# 生成静态文件
# yarn build

# 进入生成的文件夹
# cd ./docs/.vuepress/dist

# echo doc.pandacode.cn > CNAME

# # git
# git init
# git add -A
# git commit -m 'deploy'
# git push -f https://guoshunfa:guoshunfa990709@gitee.com/guoshunfa/panda-doc.git master:home

# 直接copy到服务器上
#!/usr/local/bin/expect -f
# scp -r ./docs/.vuepress/dist/* root@49.232.167.211:/www/wwwroot/doc.pandacode.cn
spawn scp -r ./docs/.vuepress/dist/* root@49.232.167.211:/www/wwwroot/doc.pandacode.cn
expect Guoshunfa990709
# cd -
