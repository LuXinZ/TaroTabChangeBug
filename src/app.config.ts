export default {
  pages: [
    'pages/index/index',
    "pages/tab1/index"
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
    ]

  }
}
