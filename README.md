# react
|天数|打卡||
|:-:|:-:|:-:|
|day1|√|初试react|
|day2|√|组件、生命周期|
|day3|√|生命周期、高级技术|

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





