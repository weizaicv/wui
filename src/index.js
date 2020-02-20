export {default as WButton} from './button/button'
export {default as WButtonGroup} from './button/button-group'
export {default as WCascader} from './cascader/cascader'
export {default as WCascaderItems} from './cascader/cascader-items'
export {default as WCollapseItem} from './collapse/collapse-item'
export {default as WCollapse} from './collapse/collapse'
export {default as WCol} from './grid/col'
export {default as WRow} from './grid/row'
export {default as WAside} from './layout/aside'
export {default as WContent} from './layout/content'
export {default as WFooter} from './layout/footer'
export {default as WHeader} from './layout/header'
export {default as WLayout} from './layout/layout'
export {default as WNavItem} from './nav/nav-item'
export {default as WNav} from './nav/nav'
export {default as WSubNav} from './nav/sub-nav'
export {default as WSlidesItem} from './slides/slides-item'
export {default as WSlides} from './slides/slides'
export {default as WTableColumn} from './table/table-column'
export {default as WTable} from './table/table'
export {default as WTabsBody} from './tabs/tabs-body'
export {default as WTabsHead} from './tabs/tabs-head'
export {default as WTabsItem} from './tabs/tabs-item'
export {default as WTabsPane} from './tabs/tabs-pane'
export {default as WTabs} from './tabs/tabs'
export {default as ClickOutside} from './click-outside'
export {default as WInput} from './input'
export {default as WPager} from './pager'
export {default as Plugin} from './plugin'
export {default as WPopover} from './popover'
export {default as WSticky} from './sticky'
export {default as WToast} from './toast'
export {default as WUploader} from './uploader'
export {default as WDatePicker} from './datepicker/date-picker'
export {default as Validate} from './validate'
export {default as db} from './db'

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