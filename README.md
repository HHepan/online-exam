# 概述
河北工业大学 2023年秋 软件工程实验 计算机专业课程在线考试管理系统<br>
随着考试类型的不断增加及考试要求的不断提高，传统的考试方式已经不能适应现代考试的需要。随着计算机应用的迅猛发展，网络应用不断扩大，人们迫切要求进行在线考试，以减轻教师的工作负担及提高工作效率，与此同时也提高了考试的质量，从而使考试更趋于公证、客观，更加激发学生的学习兴趣。计算机专业课程在线考试管理系统要求能够管理参加考试学生的相关信息，能够构件课程知识点、划分题型、建立题库、自动出卷，客观题自动评分及成绩汇总等功能。

# 环境
### 前端 web
node        v16.20.2<br>
angular     v16.2.5
### 网络中间件
nginx       v1.24.0
### 后端 api
Java        17<br>
Spring boot v3.2.0
### 数据库
mysql       v5.7

# 效果
### 登录界面
![c6b84f059a2fafb302cb0cb98f4ae07](https://github.com/user-attachments/assets/52e3a393-c2cc-42ae-a95a-7547ec9ccc30)

### 管理员端：管理教师、班级、学生、课程、题库信息
![e96f95842369056535aed8b2e38b410](https://github.com/user-attachments/assets/514c7ab4-1e45-424c-88e3-a7ffe9c8c3a8)
![70697e7bbbac3c5679e7065699ca0e5](https://github.com/user-attachments/assets/b825ccbc-dacb-43c8-b020-86572a5ab6bf)
![25abd99e8dadd32c35bad5862b3f9b9](https://github.com/user-attachments/assets/cf767503-4619-4b33-8480-b72ee14647df)

### 教师端：设置和发布考试、评分、查看考试情况
![59034bd21ba43f08a87d52620431870](https://github.com/user-attachments/assets/35f540d4-025b-4d5d-8f0a-a69a96cbe741)
![af68d6a59e73fbd8a8534b7280a66bb](https://github.com/user-attachments/assets/e0bb78c9-43b7-46fa-8183-e151b39a4d35)
![ec885d6f5f1a939eb736ed5a945b21f](https://github.com/user-attachments/assets/a9ab6ef4-297c-4a58-97c4-afa28017e6c2)


### 学生端：参加考试
![2336a41fb0b3f594d41590e58ab8ff8](https://github.com/user-attachments/assets/43cc4501-f7b4-4d37-be33-7a8629b5059d)
![6872d72c2f456227a01b2ded7ea2eac](https://github.com/user-attachments/assets/dbd57983-8d5a-4164-9d8c-6e057af16535)
![def257cf7ad2e05a34e8492c6627d97](https://github.com/user-attachments/assets/bfd7baec-2af7-4af8-a265-efa1c1a5df41)
![4df70a4b6a05953170b5279b5a57a01](https://github.com/user-attachments/assets/831b3c78-e0ce-41c0-8716-65e436185401)

# 启动
首先在本地准备好所需环境，将本项目克隆至本地。
### 启动前端 web
项目根目录下执行：
```
cd web //去到 web 目录
```
```
npm install //安装依赖
```
```
ng s //或者 ng serve 启动前端
```
此时应该可以通过 http://localhost:4200 访问到项目的登录界面。
### 启动 nginx
不同系统下启动 nginx 的方式有所差别，这里不作统一叙述。注意 nginx 配置文件应按 documents/nginx.conf 配置。（或者直接用该文件替换本地配置文件）<br>
nginx 启动成功后应该可以通过 http://localhost:8015 (此端口号在nginx.conf中配置)访问到项目的登录界面。
### 部署 docker (启动 mysql 数据库)
项目根目录下执行：
```
cd documents/docker //去到 docker 目录
```
```
docker compose up //根据配置文件构建并运行 mysql 镜像
```
### 启动后端 api
IDEA 打开 api 目录，会自动安装依赖，点击启动即可。（如图）
![413614f17c776b060af782e04d6f0d6](https://github.com/user-attachments/assets/7f4a32e6-e2e3-44d6-a53c-f54901ef90fc)
也可以通过在项目根目录下执行命令行：
```
cd api //去到 api 目录
```
```
mvn install //安装依赖
```
```
mvn spring-boot:run //启动项目
```
（请注意，命令行方式启动可能会存在版本对应问题）

# 访问
依照上述过程启动成功后，访问 http://localhost:8015 进入到登录界面，使用 [用户名 admin ，密码 admin] 即可以管理员身份登录系统。 
