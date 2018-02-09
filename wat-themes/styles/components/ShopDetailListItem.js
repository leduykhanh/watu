import { Platform, Dimensions, PixelRatio } from "react-native"

const height = 110
const width = Dimensions.get("window").width

export default {
	container: {
		height, marginTop: 10, marginBottom: 10, marginLeft: 10, backgroundColor: 'white'
	},
	image: {
		width: height, height,
    },
	description: {
		width: width - height - 40, marginBottom: 10
	},
}
