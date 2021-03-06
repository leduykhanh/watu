import { Platform, Dimensions, PixelRatio } from "react-native"

const height = 80
const width = Dimensions.get("window").width
const slideImageH = 110

export default {
	container: {
	},
	slideImageContainer: {
		width, height: slideImageH,
	},
	slideImage: {
		width, height: slideImageH,
	},
	imageContainer: {
		borderRadius: height/2, overflow: 'hidden',
		width: height, height: height,
		marginTop: 10, marginBottom: 10, marginLeft: 10,
	},
	image: {
		width: height, height: height,
    },
	description: {
		width: width - height - 40, marginBottom: 10
	},
}
