import { Platform, Dimensions, PixelRatio } from 'react-native'

const height = 110
const width = Dimensions.get("window").width

export default {
	container: {
		width, marginTop: 10, marginRight: 10, marginLeft: 10, backgroundColor: 'white', flex: 1
	},
    image: {
		height, width: height
    },
	info: {
		width: width - height - 20
	},
    statistic: {
    },
	featured_image: {
		height, width: width - 20
	},
	featured_info: {
		position: 'absolute',
		bottom: 0,
		width: width - 20,
		padding: 10,
		backgroundColor: 'rgba(104,54,5,.6)',
		display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start'
	},
}
