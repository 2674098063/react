# react
|天数|打卡||
|:-:|:-:|:-:|
|day1|√|初试react|
|day2|√|组件、生命周期|
|day3|√|生命周期、高级技术|
|day4|√|react官方脚手架、dva脚手架|

## day1
初步认识React库,学习了:
1. 元素渲染
2. 事件处理
3. 条件渲染
4. 列表
5. 初识react组件
## day2
1. 组件&props
2. 生命周期&state
> 生命周期

|vue|react|
|-|-|
|beforeCreate|constructor|
|created|constructor|
|beforeMount|componentWillMount|
|mounted|componentDidMount|
|beforeUpdate|componentWillUpdate|
|updated|componentDidUpdate|
|beforeDestroy|componentWillUnmount|
|destroyed|无|
|**activated**|无|
|**deactivated**|无|
## day3
* **ract**独有的生命周期
    * shouldComponentUpdata
        > 当条件不满足的时候，拦截虚拟DOM对真实DOM的操作
* react高级技术
    * Refs  - > 操作节点，同时同步虚拟DOM和真实DOM
    * fragment  - > 子列表分组，而无需向 DOM 添加额外节点
    * Context - > 自动逐层构建props，不必手动层层构建
    * 高阶组件 - > 组件升格，可传递数据，redux仓库底层原理

## day4
|||
|:-:|:-:|
|create-react-app|dva|
|官方推荐的脚手架，功能功能较少,路由状态管理等都需要手动下载设置|阿里团队开发的脚手架，封装了大部分常用功能，如：路由，状态管理等等，基本上开箱即用|
> 个人感觉dva脚手架更符合大部分开发者开发习惯，并且封装的组件都是项目中常见的，更方便快捷；官方的脚手架更适合有自己独特风格的开发者



