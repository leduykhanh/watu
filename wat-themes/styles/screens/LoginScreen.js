import { Platform, Dimensions, PixelRatio } from "react-native"

const width = Dimensions.get("window").width

export default {
	container: {
	},
	buttons: {
		marginTop: 20,
	},
	forget_password: {
		display: 'flex', marginTop: 20, justifyContent: 'flex-end',
	},
	forget_password_text: {
		color: 'rgb(243,137,4)'
	},
	login_with_facebook: {
		marginBottom: 10, backgroundColor: 'rgb(67,72,77)'
	}
}
