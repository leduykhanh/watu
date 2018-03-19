import { Platform, Dimensions, PixelRatio } from "react-native"

const height = 80
const width = Dimensions.get("window").width

export default {
	container: {
    marginBottom: 10,
	},
	image_container: {
		borderRadius: height/2, overflow: 'hidden',
		width: height, height: height,
		marginTop: 10, marginBottom: 10, marginLeft: 10,
	},
	image: {
		width: height, height: height,
  },
  info_container: {
		flex: 1, height: height,
		marginTop: 10, marginLeft: 10,
	},
}
