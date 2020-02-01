module.exports = {
    base:'/wui/',
    title: 'wui',
    description: 'A Vuejs Framework',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: 'http://google.com' }
        ],
        sidebar: [
            {
                title: '入门',   
                children: [
                    '/install/',
                    '/get-started/',
                ]
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
                  '/components/toast'
                ]
            }
          ]
    }
    
  }