import React from "react"
import { View, Text } from "react-native";

class DebugPage extends React.Component {

  render() {
    const { id='' } = this.props.route?.params || {}
    return (
      <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
        <Text>route.params---{id}</Text>
        <Text onPress={_ => this.props.navigation.navigate('Home', { toPre: 111})}>goBackWith</Text>
      </View>
    )
  }
}

export default DebugPage