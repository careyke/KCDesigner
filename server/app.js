//node.js暂时不支持es6的模块规则:import
const path = require('path');
const express = require('express');

const app = express();
const staticPath = path.join(__dirname, 'public');

//将前端打包出来的文件当做静态资源，不走模板引擎
//将前端的静态资源挂载在一个虚拟的目录public下
//如果没有加上虚拟的目录，app.get('/')会因为去访问index.html页面而出现路由冲突
app.use('/public', express.static(staticPath));

app.get('/', (req, res) => {
    console.log('loaction is /'.green);
    res.redirect('/designer');
})

app.get('/designer', (req, res) => {
    console.log('loaction is /designer'.green);
    res.sendFile(path.join(staticPath, 'index.html'));
})

app.get('/runtime', (req, res) => {
    console.log('loaction is /runtime'.green);
    res.sendFile(path.join(staticPath, 'index.html'));
})

module.exports = app;