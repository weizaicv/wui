export {default as Button} from './button/button'
export {default as ButtonGroup} from './button/button-group'
export {default as Cascader} from './cascader/cascader'
export {default as CascaderItems} from './cascader/cascader-items'
export {default as CollapseItem} from './collapse/collapse-item'
export {default as Collapse} from './collapse/collapse'
// // src / index.js

// // 导入单个组件
// // import Vue from 'vue'
// import WButton from './button/button'
// import WButtonGroup from './button/button-group'
// import WIcon from './icon'
// import WInput from './input'
// import WRow from './grid/row'
// import WCol from './grid/col'
// import WLayout from './layout'
// import WHeader from './header'
// import WFooter from './footer'
// import WAside from './aside'
// import WContent from './content'
// import Wplugin from './plugin'
// import WTabs from './tabs'
// import WTabsHead from './tabs-head'
// import WTabsBody from './tabs-body'
// import WTabsItem from './tabs-item'
// import WTabsPane from './tabs-pane'
// import WPopover from './popover'
// import WCollapse from './collapse/collapse'
// import WCollapseItem from './collapse/collapse-item'
// import WNav from './nav/nav'
// import WNavItem from './nav/nav-item'
// import WSubNav from './nav/sub-nav'
// import WPager from './pager'
// import WSlides from './slides/slides' 
// import WSlidesItem from './slides/slides-item'
// import WTable from './table/table'
// import WTableColumn from './table/table-column'

// // 以数组的结构保存组件，便于遍历
// // ,WButtonGroup,WIcon,WInput,WRow,WCol,WLayout,WHeader,WFooter,
// //     WAside,WContent,Wplugin,WTabs,WTabsHead,WTabsBody,WTabsItem,WTabsPane,
// //     WPopover,WCollapse,WCollapseItem,WNav,WNavItem,WSubNav,WPager,WSlides,
// //     WSlidesItem,WTable,WTableColumn
// const components = [
//     WButton
// ]

// // 定义 install 方法
// const install = function (Vue) {
//     if (install.installed) return
//     install.installed = true
//     // 遍历并注册全局组件
//     components.map(component => {
//         Vue.component(component.name, component)
//     })
// }

// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue)
// }

// export default {
//     // 导出的对象必须具备一个 install 方法
//     install,
//     // 组件列表
//     ...components
// }