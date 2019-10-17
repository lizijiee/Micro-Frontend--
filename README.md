## 微前端入门指南

## 0. 关于

最近一段时间，由于未来工作中涉及工业应用较多，最后项目的展示交互可能会由于开发技术栈不同产生冲突，单一前端框架可能不再能满足要求，避免技术栈的冲突，解决不同技术栈的开发后的项目融合问题，开始对微前端进行研究尝试，希望借助微前端可以解决技术栈冲突的问题。

在被微前端虐的体无完肤后，终于自己也有了自己的收获，在本文档中主要是自己在学习过程中的一些收获和在写例子中遇到的问题，希望对您也能有多帮助。

当然微前端的实现方式不只有一种，包括iframe、single-spa等，本文采用的主要是single-spa。如果您使用过iframe我可以告诉您，iframe和single-spa完全不是一个难度，如果把iframe比作是easy模式，那么single-spa便是地狱模式，相信也有很多人在想搞一下微前端的同学们，猝死在了single-spa的路上，single-spa主要难点在于需要搭设拆分后小型项目的框架，使其实现具有<font color="red">独立开发、独立运行、独立部署</font>的能力，并且将其整合成一个完成的应用。

在toB的前端
背景->排查->解决->防止，以解决某个事故为例来介绍。
如何从何而来，为什么采用，采用的优点缺点是什么，具体实施过程，实施过程中遇到的bug，
[(转)一位大牛对于写技术博客的一些建议](https://www.cnblogs.com/princepeng/p/11174085.html)
[技术博客文章的写作思路总结](https://my.oschina.net/FEEDFACF/blog/1610191)



## Contents

- [引言](#preface)

- [微前端是什么](#what)

- [参考文章](#title9)

- [参考代码](#title10)

  

## <a id="what"><font color="black">1. 微前端是什么</font></a>

微前端是什么？微前端是借鉴后端微服务的概念而来，将微服务的理念应用在浏览器端，即将一个完整的、庞大的，单一的前端工程项目拆分为多个小型的前端项目。

简单的来说，就是将一个巨无霸（Monolith）的前端工程拆分成一个个的小工程，但是每一个小的工程的功能却是完整的，可以独立成为一个项目，完全具备独立的开发、部署、运行的能力。整个项目将由这些个小项目整合而成。



## <a id="what"><font color="black">2. 为什么要用微前端</font></a>

目前随着企业工程项目体积原来越大，页面越来越多，项目变得十分臃肿，维护起来也十分困难，有时我们仅仅更改项目的简单样式，都需要对整个项目重新进行打包上线，给开发人员造成了不少的麻烦，也非常了很多浪费时间。

在协作上，随着项目越来越大，开发团队也在不断的壮大，有时我们希望不同地点不同团队对同一项目来进行开发维护，未使用微前端拆分前，团队间的沟通成本很高，并且不同团队成员在代码提交过程中容易产生冲突。

因此，前端在借鉴后端的微服务架构模式后，开发出了微前端架构，将一个功能繁多的单页面应用拆分成一个个小型单页面应用，这些小型单页应用具有和整体应用相同的能力。



## <a id="what"><font color="black">3. 微前端实现方式</font></a>

微前端实现方式有两种：

1.iframe嵌入 （难度：★）

2.single-spa合并类单页应用 （难度：★★★★★）



## <a id="what"><font color="black">4. iframe</font></a>

iframe嵌入方式比较容易实现，不再赘述。



## <a id="what"><font color="black">5. single-spa</font></a>



目前在前端开发工作中，

目前随着企业工程项目体积越来越大



实现原理：
实现不同项目嵌套当然可以使用ifame，但是微前端并没有用到ifame，而是单纯的使用JavaScript和MVVM等技术来实现页面的加载。
我们也把这种由多个微前端聚合出来的单页应用叫做“类单页应用”。











## <a id="title9"><font color="black">参考文章</font></a>

- [single-spa官网](https://single-spa.js.org/)

- [微前端实践](https://juejin.im/post/5cadd7835188251b2f3a4bb0)

- [用微前端的方式搭建类单页应用](https://www.cnblogs.com/meituantech/p/9604591.html)（以美团为例）

- [前端单页应用微服务化解决方案2 - Single-SPA](https://juejin.im/post/5ba057695188255c953821c6)

- [稍复杂例子single-spa-examples](https://github.com/CanopyTax/single-spa-examples.git)

- [微前端 single-spa（独立部署内附代码）](https://juejin.im/post/5d3925615188257f3850de5a)

- [微前端 —— 理论篇](https://segmentfault.com/a/1190000019957130)

- [微前端入门  —— 餐饮项目](https://juejin.im/post/5d8adb8ff265da5ba12cd173#heading-0)

- [微前端 single-spa —— 内附项目](https://juejin.im/post/5d3925615188257f3850de5a)

  

## <a id="title10"><font color="black">参考代码</font></a>

- [乾坤](https://github.com/umijs/qiankun)
- [微前端模块加载器](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2FFantasy9527%2Flotus-scaffold-micro-frontend-portal)
- [微前端Base App示例源码](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2FFantasy9527%2Fmicrofrontend-base-demo)
- [微前端子项目示例源码](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2FFantasy9527%2Fmicrofrontend-submodule-demo)
- [Single-SPA微前端框架的使用Demo汇总](https://alili.tech/archive/22975f44/)
- [migrating-to-single-spa-react-starter源自官网](https://github.com/alocke12992/migrating-to-single-spa-react-starter)