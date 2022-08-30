# git 配置ssh
    Git是分布式的代码管理工具，远程的代码管理是基于SSH的，所以要使用远程的Git则需要SSH的配置
    温馨提示：
    1.查看是否已经有了ssh公钥：cd ~/.ssh
    如果没有则不会有此文件夹，有则删除
## 一、git 配置
    （1）打开 git 命令窗口
    （2）配置用户名（填自己的姓名）
    git config --global user.name “linjiaxiaozhu”
    （3）配置用户邮箱（填自己的邮箱）
    git config --global user.email “linjiaxiaozhu@qq.com.cn”
    （4）生成公钥、秘钥（填自己的邮箱，执行后需要按几次 enter 直到结束）
    ssh-keygen -t rsa -C “linjiaxiaozhu@qq.com.cn”
    （5）配置 ssh 变量
    git config --global ssh.variant ssh

## 二、gitlab 或github 配置公钥

    （1）打开生成公钥的文件夹
    windows:
    C:\Users%username%.ssh
    比如我的文件地址是 C:\Users\admin.ssh
    （2）复制公钥文件内容，公钥文件名
    id_rsa.pub
    （3）登录GitLab或github，将第(2)生成的公钥添加ssh
