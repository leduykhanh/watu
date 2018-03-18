import { Platform, Dimensions, PixelRatio } from "react-native"

const width = Dimensions.get("window").width
const iconSize = 26
const height = 56

export default {
	iconSize,
	iconColorActive: 'rgb(249,174,24)',
	iconColor: 'grey',
	container: {
		height
	}
}
