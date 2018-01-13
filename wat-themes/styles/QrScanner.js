import { Platform, Dimensions, PixelRatio } from "react-native"

const width = Dimensions.get("window").width

export default {
	container: {
		flex: 1,
		width: width,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	scanningFrame: {
		width: width - 2*24,
		height: width - 2*24
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'center'
	}
}
