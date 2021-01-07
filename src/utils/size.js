import { Dimensions } from 'react-native'

export function px2Rpx(x = 0) {
  const w = Dimensions.get('window').width
  return x * w / 750
}