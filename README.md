# Mama
> 妈妈再也不用担心我的 macbook 发烫之超级偷懒计划

为什么是超级偷懒，因为比起朱一大神的妈妈计划，这只是两段偷懒的小脚本，要感谢 `you-get` 把脏活累活都干了

## 需要安装
- you-get
- mpv
- Node.js
- Tampermonkey

## 使用说明
1. `git clone git@github.com:coolzilj/mama.git`
2. `cd mama`
3. `node server.js`
4. 添加 `mama.js`（这个脚本纯属偷懒）到 Tampermonkey, 在视频播放页面点击绿色按钮『PLAY』就可以播放视频啦
5. `mpv.conf` 基于官方 example 做了一些修改，主要解决播放分段视频出现卡顿的问题
6. 如果你的 you-get 和 mpv 不是在 `/usr/local/bin/you-get` `/usr/local/bin/mpv` 请自行修改
