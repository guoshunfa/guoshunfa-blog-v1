# 清空git库内容
rm -rf docs/.vuepress/dist
git clone https://github.com/guoshunfa/guoshunfa-blog-old.git docs/.vuepress/dist
# cd docs/.vuepress/dist
# git rm * -r
# git commit -m "deleted all files"
# git push
# # 将新内容提交
# cd ../../../
# npm run docs:build
# cd docs/.vuepress/dist
echo o.guoshunfa.com > CNAME
git add .
git commit -m "deploy commit"
git push

rm -rf docs/.vuepress/dist