(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{324:function(t,a,v){"use strict";v.r(a);var e=v(14),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"虚拟dom为什么快"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom为什么快"}},[t._v("#")]),t._v(" 虚拟dom为什么快")]),t._v(" "),a("p",[t._v("虚拟DOM的性能提升主要有以下几个方面：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("最小化DOM操作：虚拟DOM可以通过差异对比算法找出需要更新的部分，只对这些部分进行操作，而不是整个DOM树。相比直接操作真实DOM，这样可以大幅度减少DOM操作的次数，提高性能。")])]),t._v(" "),a("li",[a("p",[t._v("批量更新：虚拟DOM可以将多次DOM操作合并为一次，通过批量更新的方式减少浏览器的重绘和回流次数，提高渲染性能。")])]),t._v(" "),a("li",[a("p",[t._v("跨平台兼容性：虚拟DOM是基于JavaScript对象树，因此可以在不同平台上使用相同的代码逻辑。这意味着可以在服务器端生成虚拟DOM，然后将其发送给客户端，减少了网络传输的数据量，提高了页面加载速度。")])]),t._v(" "),a("li",[a("p",[t._v("开发效率提升：虚拟DOM可以将视图和状态分离，通过声明式的方式描述用户界面，提供了更高级别的抽象。这样可以使得开发者更专注于业务逻辑，减少了手动操作DOM的复杂性，提高开发效率。")])])]),t._v(" "),a("h2",{attrs:{id:"vue和react的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue和react的区别"}},[t._v("#")]),t._v(" Vue和React的区别")]),t._v(" "),a("p",[t._v("l 同：1.数据驱动视图，2.组件化，3.都使用Virtual dom+Diff算法")]),t._v(" "),a("p",[t._v("l 异：1.核心思想不同（Vue:灵活易用的渐进式框架，进行数据拦截，对数据变化更敏感精确；React：函数式编程，单向数据流）；2.组件写法差异（Vue:template单文件组件写法;React:JSX+inline style写法，主打all in js）;3.Diff算法实现不同（React:遍历新VD集合，通过唯一key值判断有无相同节点，没有则新建，有则比较位置，不同则移动，对老集合中存在新集合不存在的节点删除。Vue:核心是updateChildren,在新老集合中进行首尾指针的双端比较，借助key寻找可复用节点，性能更佳。）4.响应式原理不同（Vue:依赖收集，自动优化，数据可变，递归监听data的所有属性，直接修改，当数据改变时，自动找到引用的组件重新渲染；React基于状态机，手动优化，状态不可变，通过setState用新状态覆盖旧状态，以组件为根目录默认全部重新渲染。）")]),t._v(" "),a("h2",{attrs:{id:"单向数据流和双向数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流和双向数据流"}},[t._v("#")]),t._v(" 单向数据流和双向数据流")]),t._v(" "),a("h3",{attrs:{id:"单向数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流"}},[t._v("#")]),t._v(" 单向数据流")]),t._v(" "),a("p",[t._v("数据改变视图，视图改变不会引起数据模型更新")]),t._v(" "),a("p",[a("strong",[t._v("优点")]),t._v("\n1、所有状态的改变可记录、可跟踪，源头易追溯。\n2、所有"),a("strong",[t._v("数据只有一份")]),t._v("，组件数据只有唯一的入口和出口，使得程序更直观更容易理解，有利于应用的可维护性。\n3、一旦数据变化，就去更新页面（data-页面），但是没有（页面-data）\n4、如果用户在页面上做了变动，那么就手动收集起来（双向是自动），合并到原有的数据中。")]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("\n1、HTML代码渲染完成，无法改变，有新数据，就需把旧HTML代码去掉，整合新数据和模板重新渲染。\n2、代码量上升，数据流转过程变长，出现很多类似的样板代码。\n3、同时由于对应状态独立管理的严格要求（单一的全局store），在处理"),a("strong",[t._v("局部状态较多的场景")]),t._v("时（如用户输入交互较多的“富表单型”应用），会显得啰嗦及"),a("strong",[t._v("繁琐")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"双向数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向数据流"}},[t._v("#")]),t._v(" 双向数据流")]),t._v(" "),a("p",[t._v("数据改变视图，视图改变引起数据模型更新")]),t._v(" "),a("p",[a("strong",[t._v("优点")]),t._v("\n1、用户在视图上的修改会自动同步到数据模型中去，数据模型中值的变化也会立刻同步到视图中去。\n2、无需进行和单向数据绑定的那些相关操作。\n3、在表单交互较多的场景下，会简化大量业务无关的代码。")]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("\n1、无法追踪局部状态的变化。\n2、“暗箱操作”，增加了出错时debug的难度。\n3、由于组件数据变化来源入口变得可能不止一个，数据流转方向易紊乱，若在缺乏“管制”手段，血崩。")])])}),[],!1,null,null,null);a.default=_.exports}}]);