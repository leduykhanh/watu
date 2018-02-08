import { Platform, Dimensions, PixelRatio } from "react-native"

const height = 240
const width = Dimensions.get("window").width

export default {
	container: {
		height: height,
	},
	slide: {
		flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
		color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
		width,
        height,
		backgroundColor: 'red'
    },
}
