import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>跳转测试页!</Text>
      </View>
    )
  }
}