# 概述
河北工业大学-人工智能与数据科学学院-物联网工程-2023年秋-软件工程实验 

实验题目为《**计算机专业课程在线考试管理系统**》，题目描述如下：

随着考试类型的不断增加及考试要求的不断提高，传统的考试方式已经不能适应现代考试的需要。随着计算机应用的迅猛发展，网络应用不断扩大，人们迫切要求进行在线考试，以减轻教师的工作负担及提高工作效率，与此同时也提高了考试的质量，从而使考试更趋于公证、客观，更加激发学生的学习兴趣。计算机专业课程在线考试管理系统要求能够管理参加考试学生的相关信息，能够构件课程知识点、划分题型、建立题库、自动出卷，客观题自动评分及成绩汇总等功能。

包含内容：
1. 登录界面

2. 管理员端：管理教师、班级、学生、课程、题库信息

3. 教师端：设置和发布考试、评分、查看考试情况

4. 学生端：参加考试、查看得分

部分界面展示如图：
![屏幕截图 2025-06-04 132203](https://github.com/user-attachments/assets/5b953dca-480b-4dca-bc80-13d20f3bc139)
![屏幕截图 2025-06-04 132152](https://github.com/user-attachments/assets/9c10cd37-839b-461b-8327-5ed674fac67a)
![屏幕截图 2025-06-04 132239](https://github.com/user-attachments/assets/0631f61c-2095-4470-b025-6109c0492cb5)
![屏幕截图 2025-06-04 132221](https://github.com/user-attachments/assets/a54aad01-1136-455f-acac-577fa05ae06c)


# 环境
前端 web ：【node v16.20.2】【angular v16.2.5】

网络中间件 ：【nginx v1.24.0】

后端 api ：【Java 17】【Spring boot v3.2.0】

数据库 ：【mysql v5.7】

# 如何启动
首先在本地准备好所需环境，将本项目克隆至本地。

### 1.启动前端 web
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
启动成功后应该可以通过 http://localhost:4200 访问到项目的登录界面。

### 2.启动 nginx
不同系统下启动 nginx 的方式有所差别，这里不作统一叙述。注意 nginx 配置文件应按 documents/nginx.conf 配置。（或者直接用该文件替换本地配置文件）

nginx 启动成功后应该可以通过 http://localhost:8015 (此端口号在nginx.conf中配置)访问到项目的登录界面。

### 3.部署 docker (启动 mysql 镜像)
项目根目录下执行：
```
cd documents/docker //去到 docker 目录
```
```
docker compose up //根据配置文件构建并运行 mysql 镜像
```
### 4.构建数据库连接并创建 Schema
打开 **DataGrip** 新建 DataSource，选择 mysql，如图：
![屏幕截图 2025-06-04 133208](https://github.com/user-attachments/assets/c61e8eeb-cc38-49c0-8aed-cd668743fdf3)

**Port** 配置为 3310 （该端口号在 online-exam/documents/docker/docker-compose.yaml 文件中配置，且online-exam/api/src/main/resources/application.properties 文件中的端口号配置应与之一致，见此后图中的  spring.datasource.url 字段。该端口号可修改），**User** 和 **Password** 均配置为 root （此两项在 online-exam/api/src/main/resources/application.properties 文件中配置。此两项可修改） 如图：
![屏幕截图 2025-06-04 134441](https://github.com/user-attachments/assets/da476223-3784-4e25-8229-2ea77aa1114e)
![屏幕截图 2025-06-04 134147](https://github.com/user-attachments/assets/56f53ee7-cffe-436f-b4f5-1dff6f841e42)
![屏幕截图 2025-06-04 134227](https://github.com/user-attachments/assets/d25158c4-e8bb-46fe-9a3d-d4a0a3f47792)

点击确定后成功创建数据库连接 **@localhost** ，鼠标移至在该连接上点击右键，新建 Schema 。如图：
![屏幕截图 2025-06-04 134556](https://github.com/user-attachments/assets/5cef808d-81ee-4e5e-97e4-1688b89e9ff6)

将其命名为 online_exam （此名称在在 online-exam/api/src/main/resources/application.properties 文件中配置，见此前图第 1 行中的 spring.datasource.url 字段。该名称可修改），点击确定后即可创建成功。如图：
![屏幕截图 2025-06-04 135255](https://github.com/user-attachments/assets/0a6b7ebc-d73e-4eed-b55a-59f567d401c9)


### 5.启动后端 api
**IDEA** 打开 api 目录，会自动安装依赖，**点击启动**即可。如图：
![413614f17c776b060af782e04d6f0d6](https://github.com/user-attachments/assets/7f4a32e6-e2e3-44d6-a53c-f54901ef90fc)

也可以通过在项目根目录下执行命令行启动：
```
cd api //去到 api 目录
```
```
mvn install //安装依赖
```
```
mvn spring-boot:run //启动项目（请注意，命令行方式启动可能会存在版本对应问题）
```

# 访问
依照上述过程启动成功后，访问 http://localhost:8015 进入到登录界面。

使用 【用户名 admin ，密码 admin】 即可以管理员身份登录系统。 
