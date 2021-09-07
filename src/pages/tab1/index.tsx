import Taro from "@tarojs/taro";
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'


export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  changeToDetail(){
    Taro.navigateTo({url:"/pages/detail/index"})
  }
  render () {
    return (
      <View className='index'>
        <Text>跳转测试页1</Text>
        <View onClick={() => {
          this.changeToDetail()
        }}
        >点击我跳转到详情页</View>
      </View>
    )
  }
}
