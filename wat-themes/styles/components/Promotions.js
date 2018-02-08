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
	slideInfo: {
		backgroundColor: "rgba(0, 0, 0, 0.6)", top: 175, padding: 10,
		position:'absolute', alignSelf: 'stretch', width:'auto'
	},
	slideTopText: {
		position:'absolute', top: 2, right: 16, padding: 6,
		borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
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
