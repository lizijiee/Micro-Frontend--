import * as singleSpa from 'single-spa'; //导入single-spa


/**
 * runScript 一个promise同步方法。可以代替创建一个script标签，然后加载服务
 * @param  {string}         url         请求文件地址
 */
const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};

// 注册微前端服务
singleSpa.registerApplication(
    'singleDemo',
    async () => {
            /* 
                注册所用函数;
                return 一个模块对象（singleSpa），模块对象来自于要加载的js导出（子项目）;
                如果这个函数不需要在线引入，只需要本地引入一块加载：
                () => import('xxx/main.js')
            */
            await runScript('http://11.11.78.240:9094/static/js/env.js');
            await runScript('http://11.11.78.240:9094/static/js/base64.min.js');
            await runScript('http://11.11.78.240:9094/static/libs/leaflet/leaflet-src.js');
            await runScript(' http://11.11.78.240:9094/static/manifest.js');
            await runScript(' http://11.11.78.240:9094/static/vendor.js');
            await runScript(' http://11.11.78.240:9094/static/app.js');
            // 引入后样式设置
            document.getElementById('single-vue').style.backgroundColor = '#161616';
            document.getElementById('single-vue').style.width = '1263px';
            document.getElementById('single-vue').style.display = 'inline-block';
            return window.singleVue
        },
        location => location.pathname.startsWith('/vue') // 配置微前端模块前缀
);

singleSpa.start(); // 启动


/*
    react 应用实例
 singleSpa.registerApplication(
    'reactApp',
    async () => {
            await runScript('http://localhost:3001/static/js/main.js');
            return window.reactApp;
        },
        location => location.pathname.startsWith('/react')
); 
*/
/* 
    angular 应用实例 
singleSpa.registerApplication(
    'angular-app',
    async () => {
            await runScript('http://localhost:3002/inline.bundle.js');
            await runScript('http://localhost:3002/polyfills.bundle.js');
            await runScript('http://localhost:3002/styles.bundle.js');
            await runScript('http://localhost:3002/vendor.bundle.js');
            await runScript('http://localhost:3002/main.bundle.js');
            return window.angularApp;
        },
        location => location.pathname.startsWith('/angular')
);
 */