import { Platform, Dimensions, PixelRatio } from "react-native"

const width = Dimensions.get("window").width
const size = 110

export default {
	input: {
		height: 32,
	},
	checkbox: {
		marginRight: 5 
	},
    profileImage: {
		width: size, height: size, marginTop: 10, marginBottom: 10, marginLeft: 10, borderRadius: 50
    },
	logoutIcon: {position: 'absolute', right: 10, top: 10, padding: 20},
}
