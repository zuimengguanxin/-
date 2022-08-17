[toc]
# git
## Git简介
### 一、什么是Git

##### 1.Git是一个分布式的版本控制软件。
  
      内网：可以自己搭建一个GitLab服务器**
      外网：可以使用码云、Github**

##### 2.版本控制
  
      类似于毕业论文、写文案、视频剪辑等，需要反复修改和保留原历史数据。
##### 3.分布式
  
      文件夹拷贝
      本地版本控制
      集中式版本控制
      分布式版本控制

##### 4.为什么要做版本控制

    要保留之前所有的版本，以便回滚和修改。

### 二、如何安装git

    详见：<https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git>

### 三、git基础操作

想要让git对一个目录进行版本控制需要以下步骤：

##### 1.进入要管理的文件夹
    cd 文件夹路径
##### 2.执行初始化命令
    git init
##### 3.查看目录下的文件状态
    git status
    注：新增的文件和修改过后的文件都是红色
##### 4.管理指定文件（红变绿）
    git add 文件名
    git add .
##### 5.生成版本
    git commit -m '描述信息'
##### 6.查看版本记录
    git log 
    git reflog  #常用
    git log --greph #图形显示,更直观
    git log --pretty=oneline #漂亮一行显示
    git log --oneline #简洁显示
    说明：HEAD@{移动到当前版本需要多少步}
##### 7.提前设置签名，个人信息配置：用户名、邮箱 【一次即可】
###### 项目(仓库)级别`仅在当前本地库有效`
    git config --local user.name tom  #设置用户名tom
    git config -- local user.email liu@qq.com #设置用户邮箱
###### 系统用户级别`仅在当前登录的操作系统用户有效`
    git config --global user.name tom
    git config --global user.email liu@qq.com
   备注：
    仅仅加了一个 `--global`
    优先级别：`项目级别`  >  `系统级别`
    信息保存位置：` ~/.gitconfig 文件 `  


### 四、进阶操作
#### 1.回滚版本
###### 1.1添加1个提交

    git add 
    git commit -m '短视频'

###### 1.2回滚至之前版本

 （1）基于索引值`推荐`

    git reset --hard 指针位置
    例子：git reset --hard a6ace91 #回到这个状态
 （2）使用 **^** 符号`只能后退`

    git reset --hard HEAD^
    例子：git reset --hard HEAD^^
    注意：几个 ^ 表示后退几步
 （3）使用 **~** 符号`只能后退`

    git reset --hard HEAD~n
    例子：git reset --hard HEAD~3
###### 1.3回滚之之后版本
    git reflog 
    git reset --hard 版本号
#### 2.删除文件并找回
    相当于建立一个快照，虽然删除了，但只要添加到暂存区，就能找回
    git reset --hard 指针位置

#### 3.文件差异比较
    git diff 文件名
    git diff 哈希值 文件名  #和历史中的一个版本比较
    git diff  #不带文件名，则比较多个文件
#### 总结
![image-20190801214513960](assets/image-20190801214513960.png)

###  五、分支管理
`hot_fix` `master` `feature_x` `feature_y`
#### 1.什么是分支
    分支可以给使用者提供多个环境的
    可以把你的工作从开发主线上分离开来，以免影响开发主线
    在版本控制中，使用推进多个任务
#### 2.多个提交和为1个提交
    git rebase -i HEAD~2
    git rebase -i 版本号（哈希值）
#### 3.紧急修复bug方案
    1.创建一个新的分支
       git checkout -b bugfix
    2.把bug修复完毕
    3.提交到新的分支
      git commit -m '修复bug'
    2.把新的分支推送到远程仓库
        git push origin bugfix
    3.把远程仓库的bugfix分支合并到主线上
        git checkout master
        git merge bugfix
        git push origin master
    4.删除远程仓库的bugfix分支
        git push origin :bugfix
    5.删除本地的bugfix分支
        git branch -d bugfix
![image-20190802153621038](assets/image-20190802153621038.png)

#### 4.分支相关命令
##### 4.1查看分支
    git branch
##### 4.2创建分支
    git branch 分支名称
##### 4.3切换分支
    git checkout 分支名称
    git checkout -b 分支名   #创建分支并直接切换到该分支

##### 4.4分支合并（可能产生冲突）`相当于把修改了的文件拉过来`

    git merge 要合并的分支
    
    注意：切换分支再合并
    合并分支的时候要明确谁谁合并
    我在a分支里面修改了。要合并到master，就先切换到master，然后合并a 到master 
    git merge a

##### 4.5删除分支
  git branch -d 分支名称
#### 5.工作流

![image-20190802160404818](assets/image-20190802160404818.png)



### 六.基本流程

![image-20190803103734677](assets/image-20190803103734677.png)

#### 1.向远程仓库推送

    首先，需要注册github账号，并创建远程仓库，然后再执行如下命令，将代码上传到github。

![image-20190803104011845](assets/image-20190803104011845.png)

    1.连接远程仓库
	git remote add origin 远程仓库地址
    2. 向远程推送代码
	git push -u origin 分支 # -u设置一次后，默认推送此分支


#### 2.从远程仓库下载代码并修改后提交

    1. 克隆远程仓库代码
      git clone 远程仓库地址 (内部已实现git remote add origin 远程仓库地址)
    2. 创建并切换分支
      git checkout -b dev
    3. 拉代码
      git pull origin dev
      等价于
      git fetch origin dev
      git merge origin/dev
    4. 继续开发
    5. 提交代码
      git add . 
      git commit -m 'xx'
      git push origin dev 

![image-20190803104819552](assets/image-20190803104819552.png)
#### 3.开发完毕上线
    1. 将dev分支合并到master，进行上线
      git checkout master
      git merge dev 
      git push origin master
    2. 把dev分支也推送到远程
      git checkout dev
      git merge master 
      git push origin dev 


#### 4.解决冲突
##### 4.1忘记push
    1. 拉代码
      git pull origin dev 
    2. 继续开发
    3. 提交代码
      git add . 
      git commit -m 'xx'
    注：忘记push了
##### 4.2继续开发其他功能
    1. 拉代码，发现在别处写的代码忘记提交...
      git pull origin dev 
    2. 继续开发其他功能  
    3. 把dev分支也推送到远程
      git add . 
      git commit -m 'xx'
      git push origin dev 
##### 4.3合并冲突
    1. 拉代码，把之前写的代码拉到本地(有合并、可能产生冲突)
      git pull origin dev 
    2. 如果有冲突，手动解决冲突
    3. 继续开发其他功能
    4. 把dev分支也推送到远程
      git add . 
      git commit -m 'xx'
      git push origin dev `

#### 5.rebase的作用

rebase可以保持提交记录简洁，不分叉。

![image-20190806082256220](assets/image-20190806082256220.png)

    git rebase -i 索引号
    git rebase -i HEAD~3  #合并最近三条记录
    说明：在vim编辑里面改成s

#### 6.快速解决冲突

    1. 安装beyond compare 
    2. 在git中配置
      git config --local merge.tool bc3
      git config --local mergetool.path '/usr/local/bin/bcomp'
      git config --local mergetool.keepBackup false
    只在本项目生效
    1. 应用beyond compare 解决冲突
      git mergetool 

#### 总结
    1.添加远程连接
      git remote add origin 地址
    2.推送代码
      git push origin dev 
    3.下载代码
      git clone 地址
    4.拉取代码
      git pull origin dev 
      等价于
      git fetch origin dev
      git merge origin/dev 
    5.保持代码提交整洁（变基）
      git rebase 分支
    6.记录图形展示
      git log --graph --pretty=format:"%h %s" --abbrev-commit --all

### 七、多人协同开发工作流

![image-20190806091417927](assets/image-20190806091417927.png)

#### 1.创建项目&邀请成员

    协同开发时，需要所有成员都可以对同一个项目进行操作。
    需要邀请成员并赋予权限，否则无法开发。
    github支持两种创建项目的方式（供多人协同开发）。
1. 合作者，将用户添加到仓库合作者中之后，该用户就可以向当前仓库提交代码。
   ![image-20190806093802227](assets/image-20190806093802227.png)

2. 组织，将成员邀请进入组织，组织下可以创建多个仓库，组织成员可以向组织下仓库提交代码。
  ![image-20190806095639748.png](assets/image-20190806095639748.png)
  ![image-20190806100106666.png](assets/image-20190806100106666.png)
  ![image-20190806100156525.png](assets/image-20190806100156525.png)
  ![image-20190806100240453.png](assets/image-20190806100240453.png)

##### 2.扩展：Tag标签管理

为了能清晰的管理版本，在公司不会直接使用commit来做版本，会基于Tag来实现：v1.0 、 v1.2 、v2.0 版本。

    git tag -a v1.0 -m '版本介绍'        创建本地创建Tag信息
    git tag -d v1.0                     删除Tag
    git push origin  --tags             将本地tag信息推送到远程仓库
    git pull origin  --tags             更新本地tag版本信息
    git checkout v.10                   切换tag
    git clone -b v0.1 地址               指定tag下载代码




#### 2.小弟开发
    1.小弟注册Github 或 Gitlab账号
    2.邀请小弟进入组织（默认对组织中的项目具有读权限）
  ![image-20190806121605052](assets/image-20190806121605052.png)

    3.邀请小弟成为某项目的合作者

  ![image-20190806121845153](assets/image-20190806121845153.png)

    4.小弟在自己电脑上下载代码并开发
  流程：

    git clone https://github.com/oldboy-org/dbhot.git
    cd dbhot
    git checkout dev
    git checkout -b dzz 
    写代码...
    
    git add .
    git commit -m '斗地主功能开发完成'
    git push origin ddz


####  3.code review

   1. 配置，代码review之后才能合并到dev分支。
      ![image-20190806122224316](assets/image-20190806122224316.png)
      ![image-20190806122307569](assets/image-20190806122307569.png)
   2. 小弟提交 code review申请
      ![image-20190806122501088](assets/image-20190806122501088.png)
      ![image-20190806123253092](assets/image-20190806123253092.png)
   3. 组长做 code review
      ![image-20190806123350137](assets/image-20190806123350137.png)
      ![image-20190806123428479](assets/image-20190806123428479.png)

####  4.提测上线（预发布）

由专门团队或团队leader执行以下步骤：

      1. 基于dev分值创建release分值
         git checkout dev
         git checkout -b release
      2. 测试等
      3. 合并到master
         使用pull request
         或
         本地将release合并到master分支
      4. 在master分支打tag
         git tag -a v2 -m '第二版 斗地主功能'
         git push origin --tags
      5. 运维人员就可以去下载代码做上线了
         git clone -b v2 地址

### 八、给开源软件贡献代码

      1. fork源代码
         将别人源代码拷贝到我自己的远程仓库。
      2. 在自己仓库进行修改代码
      3. 给源代码的作者提交 修复bug的申请（pull request）



### 九、其他

####  1.配置

      - 项目配置文件：项目/.git/config

        git config --local user.name '武沛齐'
        git config --local user.email 'wupeiqi@xx.com'

      - 全局配置文件:  ~/.gitconfig

        git config --global user.name 'wupeiq'
        git config --global user.name 'wupeiqi@xx.com'

      - 系统配置文件：/etc/.gitconfig

        git config --system user.name 'wupeiq'
        git config --system user.name 'wupeiqi@xx.com'
        
        注意：需要有root权限
#### 2.免密码登录

##### 2.1URL中体现

    原来的地址：https://github.com/WuPeiqi/dbhot.git
    修改的地址：https://用户名:密码@github.com/WuPeiqi/dbhot.git
    
    git remote add origin https://用户名:密码@github.com/WuPeiqi/dbhot.git
    git push origin master 

##### 2.2SSH实现

    1. 生成公钥和私钥(默认放在 ~/.ssh目录下，id_rsa.pub公钥、id_rsa私钥）
      ssh-keygen
    2. 拷贝公钥的内容，并设置到github中。
    3. 在git本地中配置ssh地址
      git remote add origin git@github.com:WuPeiqi/dbhot.git
    4. 以后使用
      git push origin master  

-  git自动管理凭证

#### 3. git忽略文件

    让Git不再管理当前目录下的某些文件。
    .gitignore文件，可以指定忽略的文件。
    创建gitignore文件，放在.git目录下。

    *.h
    !a.h
    files/
    *.py[c|a|d]
  
    更多参考：<https://github.com/github/gitignore>

####  4.GitFlow工作流 `*`

    主干分支`master`  开发分支`develop`  修复分支`hotfix`   预发布分支`release`  功能分支`feature`
    在 GitFlow 基础上， 充分利用了 Git 的 Fork 和 pull request 的功能以达到代码审核的目的。 
    安全可靠地管理大团队的开发者

#### 5. github任务管理相关
      - issues，文档以及任务管理。
      - wiki，项目文档。

























































