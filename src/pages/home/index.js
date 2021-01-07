import React from 'react'
import { View, Text } from "react-native"
import http from "../../utils/request";

class HomePage extends React.Component {

  goDeug = _ => {
    let { navigation } = this.props
    navigation.navigate('Debug', {
      id: 10086
    })
    console.log('111')
  }

  componentDidMount() {
    let { navigation } = this.props
    navigation.addListener('focus', _ => {
      alert('show?')
      http.get('http://www.baidu.com')
    })
  }

  render() {
    const { toPre } = this.props.route?.params || {}
    return (
      <View>
        <Text onPress={this.goDeug}>homePage</Text>
        {
          false ? <Text>{toPre}</Text> : <View></View>
        }
      </View>
    )
  }
}

export default HomePage