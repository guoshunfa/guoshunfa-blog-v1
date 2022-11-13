#!/bin/bash

set -e

remote_user="root"
remote_host="8.141.66.12"
remote_pwd="pandacodeGuoshunfa990709"
remote_file_url="/mnt/docker"

echo "---开始执行---"
dirname=`dirname $0`
echo "---当前脚本文件地址：${dirname}---"
cd ${dirname}
echo "---项目构建、打包---"
cd ../
# npm install
npm run build

echo "---将打包文件copy到docker目录下---"
cp -rf ./docs/.vuepress/dist ./docker

docker build -f ./docker/dockerfile -t "pandacode-test" . --no-cache
# scp -r ./docker root@8.141.66.12:/mnt/docker

echo "---开始copy到远端服务器上---"
/usr/bin/expect <<-EOF
spawn scp rf docker ${remote_user}@${remote_host}:${remote_file_url}
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
expect "]#" { send "docker build -f ./dockerfile -t "pandacode-nginx" . --no-cache\r" }
expect "]#" { send "docker run -d --name pandacode-nginx-vuepress -p 80:80 --restart=always pandacode-nginx/\r" }
expect "]#" { send "exit\r" }
expect eof
EOF

echo "---部署成功---"