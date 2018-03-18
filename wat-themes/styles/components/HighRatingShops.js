import { Platform, Dimensions, PixelRatio } from "react-native"

const height = 180
const width = Dimensions.get("window").width

export default {
	container: {height: height},
	slide: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'red',
		height,
	},
	image: {
		position: 'absolute', top: 0, left: 0,
		width, height,
	},
	info: {
		backgroundColor: "rgba(0, 0, 0, 0.6)", top: 110, padding: 10,
		position: 'absolute', alignSelf: 'stretch', width
	},
}
