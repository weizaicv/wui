module.exports = {
    base:'/wui/',
    title: 'wui',
    description: 'A Vuejs Framework',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/install/' },
            { text: 'GitHub', link: 'https://github.com/weizaicv/wui/' }
        ],
        sidebar: [
            {
                title: '入门',   
                children: [
                    '/install/',
                    '/get-started/',
                ],
                collapsable: false, //是否展开
            },
            {
                title: '组件',  
                children: [
                  '/components/button',
                  '/components/grid',
                  '/components/input',
                  '/components/layout',
                  '/components/popover',
                  '/components/tabs',
                  '/components/toast',
                  '/components/collapse',
                  '/components/uploader'
                ],
                collapsable: false, //是否展开
            }
          ]
    }
    
  }