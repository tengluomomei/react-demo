# react
    https://react.docschina.org/
    https://zh-hans.legacy.reactjs.org/（不更新）

# 安装
    1.
        全局安装：npm install -g create-react-app  create-react-app --version 查看版本
        创建项目：create-react-app xxx 
    2.npx create-react-app xxx    
    chrome:安装React Developer Tools

# 项目结构
    public ---- 静态资源文件夹
        favicon.icon ------ 网站页签图标
        index.html -------- 主页面
        logo192.png ------- logo图
        logo512.png ------- logo图
        manifest.json ----- 应用加壳的配置文件
        robots.txt -------- 爬虫协议文件
    src ---- 源码文件夹
        App.css -------- App组件的样式
        App.js --------- App组件
        App.test.js ---- 用于给App做测试
        index.css ------ 样式
        index.js ------- 入口文件
        logo.svg ------- logo图
        reportWebVitals.js
            --- 页面性能分析文件(需要web-vitals库的支持)
        setupTests.js
            ---- 组件单元测试的文件(需要jest-dom库的支持)


# 类组件
    类组件是有生命周期函数
    context: 上下文
    props: 父传子的属性
    refs: DOM操作
    state: 状态，状态组件不是响应式的
    updater:

# 函数组件
    以 use 开头的函数被称为 Hook，通过hookapi可以定义状态

# 路由
    最新： https://reactrouter.com/en/main
    v5: https://v5.reactrouter.com/web/guides/quick-start
    安装： npm install react-router-dom

    路由相关的有三个包：
        react-router 路由核心包
        react-router-dom 基于浏览器的路由包，专用于做web开发
        react-router-native 基于RN平台的路由包，专用于原生APP开发

    router组件（BrowserRouter 、 HashRouter）
    路由匹配组件（Routes 、 Route）:要配合使用，且必须要用<Routes>包裹<Route>

    path属性:用于定义路径
    element属性: 用于定义当前路径所对应的组件

# jsx
    jsx = javascript + xml，是facebooK发明的语法，浏览器是不认识这种语法的，需要利用babel编译成浏览器可以识别的语法

    vue配置jsx:
        npm i @vitejs/plugin-vue-jsx
        在vite.config.js加入jsx配置:
        import vueJsx from '@vitejs/plugin-vue-jsx'
        plugins: [vue(), vueJsx()],

        tsconfig.ts
        配置"jsx": "preserve"
    

    jsx元素写法有两种：
        jsx的语法糖
        React.createElement

    jsx元素不可逆：jsx元素最终需要被渲染成真实DOM元素，所以不能直接对"原材料"进行增删改

    jsx元素：jsx语法或React.createElement返回的结果叫jsx元素，jsx元素充当组件的视图模板
    组件： 由class或function定义出来的叫组件，组件名必须大写，组件中通常有一个jsx视图模板


    注意点：
        1.使用{}包裹
        2.jsx也可以做函数的形参，也就是在调用一个函数时，传递传递一个jsx元素，也可以做为函数的返回值
        3.原生属性的变化：  
            class 变成了 className
            for 变成了 htmlFor: <label for="abc"></label> <input id="abc">
        4.新增属性：
            key 用于列表渲染
            ref 方便DOM操作
            dangerouslySetInnerHTML 用来渲染一片html字符串
        5.只能有一个根元素： 可以使用<></>代替
        6.单标签：jsx元素，不仅组件可以使用单标签，任何html标签都可以使用单标签
        7.行间样式：style={ { key1:'value1', key2:'value2',... } } 属性值式对象，对象是js代码，需要放到{}中
        8.class类名:
        9.React组件（由class或function定义）的名称必须以大写字母开头
        10.支持点语法 
        11.在使用组件时，如果组件使用双标签，在双标签之间就可以写内容，在双标签之间写的内容是通过props.children来接收的
        12.使用JSX时，如果是数组，可以直接渲染，如果数组中有boolean值，有null，有und，会被直接忽略

# 状态
    // 
    state: this.state
    修改状态：
        this.setState({}, callback) 在修改状态时，当新值与旧值无关时，推荐使用这种写法，callback表示当状态修改后，有一些业务逻辑放到callback中。
        this.setState((state, props)=>({}), callback) 当新值与旧值有关时，新值由旧值计算而来，形参state永远表示旧值，建议使用这种写法。callback表示当状态修改后有一些业务逻辑放到callback中。

    状态在函数组件中的使用：

# 修改状态的同步和异步  16.8
    React18之前，setState写在宏任务中，或Promise.then中，它是同步的。
    React18之前，setSteate写在合成事件中，是异步的。
    React18中，不管setState写在哪里，永远都是异步的。
    this.setState会自动合并

# 事件绑定
    1.bind： this.addFun.bind(this)
    2.箭头函数 （）=>{this.addFun}
    3.constructor: this.addFun = this.addFun.bind(this)

# 条件渲染
    1.类组件中实现条件渲染
        1.if: 逻辑 &&
        2.if-else: 三目运算
        2.if else-if else
        3.显示隐藏
    2.函数组件中实现条件渲染

# 表单绑定
    value
# 列表渲染
    for循环、数组map() 函数
    注意：key属性，在其兄弟节点中唯一标识该元素

# 生命周期(非常重要) https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    装载阶段（3个）：constructor, render, componentDidMount
    更新阶段（2个）：render，componentDidUpdate
    卸载阶段（1个）：componentWillUnmount
    生命周期图谱：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    constructor： 定义状态、绑定方法的this。
        注意： state数据流不要和props数据流交叉使用
               不能调用接口，不能进行DOM操作，不能开定时器... 业务相关的代码都不能写在constructor钩子函数中
               不能setState

    render(装载):render是一个函数，这个函数返回一个jsx，jsx叫jsx元素，本质是一个对象，创建jsx元素有2种方法，一种是直接使用jsx，另外一种是React.creeateEleement。
    调用render函数，会生成棵Fiber树，类似于Vue中的虚拟DOM，这个Fiber树是双向链表结构.生成Fiber树的过程是异步的，生成的过程是可以中断，能不能中断是看浏览器忙不忙。忙，就可能中断，等待浏览器不忙时，会继续生成，直到Fiber树创建完成。然后会进行协调运算，这个协调运算类似于Vue中的Diff运算，也就是一棵老的Fiber树和一棵新的Fiber树进行对比运算。运算对比后，就会进入到commmit提交阶段，一次性提交Fiber更新DOM。
        注意：在render函数中，不能调用setState，会进入死循环。

    componentDidMount：相当于vue中的mounted，表示页面第一次渲染完成.
        可以：调用接口、获取DOM进行操作、业务代码功能

    componentDidUpdate(更新)：相当于Vue中的updated，表示页面再次渲染成功。
       在react中是没有监听器的概念，使用compoentDidUpdate钩子函数。
       如果不使用componentDidUpdate，可以使用this.setState({}/fn, callback) 利用callback感知数据变化了，不推荐。
       注意：componentDidUpdate中不能调用setState，会爆栈。
            如果一定要使用，需要给出一个出口。

    componentWillUnmount(卸载)：相当于vue中的beforeDestroy，表示组件即将销毁。
        可以：清缓存、销毁DOM元素

    shouldComponentUpdate:控制是否更新，当返回true就正常更新，当返回false时就不更新。后续用PureCompoent代替
        当执行forceUpdate时(强制更新时)，会绕过shouldComponentUpdate方法，一定会进入到更新阶段。

    React组件渲染（更新）流程的两个阶段：
        render阶段：生成Fiber树，这个过程是异步的，是可中断，并且不会执行任何副作用。到底中断与否，看的是浏览器主线程的忙不忙。
        commit阶段：把协调运算的结果，一次性提交渲染或更新真实DOM。

# 状态提升
    一个父组件，下面有两个子组件，这两个子组件，需要通信。所谓的状态提升，就是把一个状态提升到父组件中，实现父传子，实现子传父
    React中，没有自定义属性或自定义事件的概念，写在组件上的都叫props。props的值可以是基本数据，对象，数组，函数，jsx
    如果是函数，函数分两类，一类叫事件函数(on)，另一类叫渲染函数,不要使用on开头。


# 封装组件
    UI组件库：https://ant.design/index-cn
    prop-types:给组件传递非常多的数据，需要对数据进行校验
    Modal.propTypes = {
        title: PropTypes.number, // 期待传递的title是一个number类型
        title: PropTypes.string, // 期待传递的title是一个string类型
        title: PropsTypes.bool, // 期待传递的title是一个bool类型
        title: PropsTypes.elementType, // React元素类型 = jsx, string, null, und
        title: PropsTypes.string.isRequired, // 期待传递的title是一个string类型,并且是必传项
        title: PropTypes.number.isRequired, // 期待传递的title是一个number类型,并且是必传项
        title: PropTypes.func, // 期待传递的title是一个函数类型
        title: PropTypes.array, // 期待传递的title是一个数组类型
        title: PropTypes.oneOf(['primary', 'danger', 'info']), // 期待传递的title是数组中其中一个
        // 期待传递的title是number或bool
        title: PropTypes.oneOfType([PropTypes.number, PropsTypes.bool]),
        title: PropTypes.node, // 期待传递的title是jsx, string, number, und, null, bool
    }

    // 非必传项，需要提供默认值
    Modal.defaultProps = {
        title: "默认小标题",
        closable: true
    }

    什么是组合？
        组合是React组件化的设计模式,研究如何封装一个组件，步骤如下：
        第一步：根据UI设计图拆解组件。
        第二步：把这个独立的组件单独进行封装。
        第三步：利用props把组件串联起来。

    {...props}: props穿透











