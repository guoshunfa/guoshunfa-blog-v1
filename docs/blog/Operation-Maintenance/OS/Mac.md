# Mac常见命令

## **Mac查看端口使用情况及停止端口使用**

sudo lsof -i:端口 

sudo kill -9 PID（PID：根据lsof查询出来当前端口的PID）

## Homebrew

### 安装

[Homebrew安装](https://brew.sh/index_zh-cn.html)

### 使用国内镜像源

`/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"`

> 20210809，这次选的是1，速度很快。