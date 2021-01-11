import React from 'react'
import { View, Text, Alert } from "react-native"
import http, { httpGet } from "../../utils/request";

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
      Alert.alert(
        '温馨提示',
        'focus',
        [
          {
            text: '取消',
            onPress: _ => console.log('1')
          },
          {
            text: '确定',
            onPress: _ => {
              httpGet('/v1/home/banner')
                .then(r => {
                  console.log(r)
                })
            }
          }
        ]
      )
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