module.exports = {
    title: 'WUI',
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
                  '/components/button'
                ]
            }
          ]
    }
    
  }