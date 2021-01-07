import React from "react"
import { View, Text, Button, Modal, StyleSheet, ActivityIndicator} from "react-native";
import { px2Rpx } from '../../utils/size'

class DebugPage extends React.Component {

  state = {
    showModal: false,
  }

  render() {
    const { id='' } = this.props.route?.params || {}
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator color="red" size='large'/>
        <Text>route.params---{id}</Text>
        <Text onPress={_ => this.props.navigation.navigate('Home', { toPre: 111})}>goBackWith</Text>
        <Button onPress={_ => {this.setState({showModal: true})}} title="showModal"></Button>

        <Modal
          visible={this.state.showModal} 
          onRequestClose={_ => this.setState({showModal: false})}
          transparent={true}
          animationType='slide'
        >
          <View style={{backgroundColor: 'transparent', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={this.styles.modal}>
              <Text>
              央广网北京1月6日消息 中央广播电视总台中国之声联合全国广播电台共同推出特别报道《中国共产党百年瞬间》。本期推出：习近平总书记首提“中国梦”。2012年11月29日，习近平总书记在参观《复兴之路》展览发表讲话时，首次提出实现中华民族伟大复兴的中国梦。
              </Text>
              <Button title="close" onPress={_ => this.setState({showModal: false})}></Button>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  styles = StyleSheet.create({
    modal: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: px2Rpx(20),
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    }
  })
}

export default DebugPage