export default {
  pages: [
    'pages/index/index',
    "pages/tab1/index",
    "pages/tab2/index",
    "pages/tab3/index",
    "pages/detail/index"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    position: 'bottom',
    list:[
      { pagePath: 'pages/index/index',
        text: '首页',},
      { pagePath: 'pages/tab1/index',
        text: '跳1',},
      { pagePath: 'pages/tab2/index',
        text: '跳2',},
      { pagePath: 'pages/tab3/index',
        text: '跳3',},
    ]

  }
}
