import { Component } from 'react'
import { View, Text } from '@tarojs/components'
//import './index.less'

export default class Index extends Component {
  state = {
    time : ''
  }
  componentWillMount () { }

  componentDidMount () {
    let time = new Date().getTime();
    this.setState({
      time
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let {time} = this.state
    return (
      <View className='index'>
        <Text>我是详情页</Text>
        <View>{time}</View>
      </View>
    )
  }
}
