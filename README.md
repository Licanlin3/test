# blogDesign

## 构建过程
### install dependencies
npm install or cnpm install
### serve with hot reload at localhost:6180
npm run dev
### build for production
npm run build
### serve for production
npm start

mongod 运行 mongo.exe
### 创建数据库 blog 和 角色 root ，账号密码均为 root
db.createUser({user:"root",pwd:"root",roles:["root"]})

分别在 front 和 admin 内运行
npm start

