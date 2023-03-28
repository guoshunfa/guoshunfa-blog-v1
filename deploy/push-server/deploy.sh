#!/bin/bash

set -e

remote_user="root"
remote_host="8.141.66.12"
remote_pwd="pandacodeGuoshunfa990709"
remote_file_url="/www/wwwroot/pandacode.cn"

echo "---开始执行---"
dirname=`dirname $0`
echo "---当前脚本文件地址：${dirname}---"
# cd ${dirname}
echo "---项目构建、打包---"
# cd ../../
# npm install
npm run docs:build
cd ./docs/.vuepress
tar -zcf dist.tar.gz dist

echo "---开始copy到远端服务器上---"
/usr/bin/expect <<-EOF
spawn scp dist.tar.gz ${remote_user}@${remote_host}:${remote_file_url}
expect {
    "password" {send "${remote_pwd}\r";}
    "yes/no" {send "yes\r";exp_continue}
}
expect eof

spawn ssh ${remote_user}@${remote_host}
expect {
    "password" {send "${remote_pwd}\r";}
    "yes/no" {send "yes\r";exp_continue}
}

expect "]#" { send "cd ${remote_file_url}\r" }
expect "]#" { send "rm -rf dist\r" }
expect "]#" { send "tar zxf dist.tar.gz -C ./\r" }
expect "]#" { send "rm -f dist.tar.gz\r" }
expect "]#" { send "exit\r" }
expect eof
EOF

echo "---部署成功---"