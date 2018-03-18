import { Platform, Dimensions, PixelRatio } from "react-native"

const blockNumItem = 5
const width = Dimensions.get("window").width
const blockWidth = width/blockNumItem, blockHeight = 52, iconSize = 36

export default {
	blockNumItem,
	containerStyle: {
		width: width, height: blockHeight, marginTop: 12, marginBottom: 12
	},
	blockStyle: {
		width: width, height: blockHeight, justifyContent: 'center'
	},
	itemStyle: {
		width: blockWidth, height: blockHeight
	},
	iconStyle: {
		width: iconSize, height: iconSize, marginBottom: 4
	}
}
