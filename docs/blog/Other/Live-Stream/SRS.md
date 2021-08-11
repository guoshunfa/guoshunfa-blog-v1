**流媒体服务器SRS**

## **安装**

**案例一（优先）：开源流媒体服务器SRS学习笔记(1) - 安装、推流、拉流：**[https://cloud.tencent.com/developer/article/1505068](https://cloud.tencent.com/developer/article/1505068)

**案例二：Centos7搭建SRS流媒体服务器搭建+推流+VLC取流：**[https://blog.csdn.net/SASIK/article/details/80522842](https://blog.csdn.net/SASIK/article/details/80522842)

## **主要思想**

主要分为三块：**srs流媒体服务器、推流、拉流。**

· 搭建一个服务来提供srs。

· 创建推流端，如FFmpeg命令、OBS客户端。

· 创建拉流端，如VLC客户端、浏览器。

## **常见语法**

**srs启动：**sudo /etc/init.d/srs start

**srs停止：**sudo /etc/init.d/srs stop

（类似的，除了start/stop，还有其它选项，比如：reload|status）

**FFmpeg推流：**

./ffmpeg -re -i source.200kbps.768x320.flv -vcodec copy -acodec copy -f flv -y rtmp://srs\_server\_ip:1935/live/livestream

source.200kbps.768x320.flv：视频地址

srs\_server\_ip：srs服务ip

## **常见问题**

· **FFmpeg编译和解决nasm/yasm not found or too old错误**

[https://www.cnblogs.com/brady-wang/p/11770512.html](https://www.cnblogs.com/brady-wang/p/11770512.html)

· **OBS连接不到服务**

**srs服务器存在防火墙，关闭防火墙即可。**