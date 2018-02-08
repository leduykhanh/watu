import { Platform, Dimensions, PixelRatio } from "react-native"

const width = Dimensions.get("window").width
const fontSize = 30

export default {
	image: {
		width,
	    flex: 1,
	    height: 240
    },
	shop_image: {
		width: 100, height: 100, marginTop: 10, marginBottom: 10, marginLeft: 10, borderRadius: 50
	}
}
