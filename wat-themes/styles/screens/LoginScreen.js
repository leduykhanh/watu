import { Platform, Dimensions, PixelRatio } from "react-native"

const height = 240
const width = Dimensions.get("window").width

export default {
	container: {
		width: width, backgroundColor: 'grey',
		flex: 1,
		alignItems: 'flex-start'
	},
    image: {
		width, height,
    },
	shop_image: {
		width: 80, height: 80, marginTop: 10, marginBottom: 10, marginLeft: 10, borderRadius: 40
	},
}
