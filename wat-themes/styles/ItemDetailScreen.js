import { Platform, Dimensions, PixelRatio } from "react-native"

const width = Dimensions.get("window").width
const size = 110

export default {
    itemImage: {
		width: size, height: size, marginTop: 10, marginBottom: 10, marginLeft: 10, borderRadius: 50
    }
}
