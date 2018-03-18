import { Platform, Dimensions, PixelRatio } from "react-native"

const height = 180
const width = Dimensions.get("window").width

export default {
	slide: {
		flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
		width, height,
		marginBottom: 10
    },
	slideInfo: {
		backgroundColor: "rgba(0, 0, 0, 0.6)", top: 115, padding: 10,
		position: 'absolute', alignSelf: 'stretch', width:'auto'
	},
	slideTopText: {
		position: 'absolute', top: 2, right: 16, padding: 6,
		borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
	},
    image: {
		position: 'absolute', top: 0, left: 0,
		width, height,
    },
}
