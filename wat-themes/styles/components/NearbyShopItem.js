import { Platform, Dimensions, PixelRatio } from 'react-native'

const height = 110
const width = Dimensions.get("window").width

export default {
	container: {
		width: width - 20, marginTop: 10, marginRight: 10, marginLeft: 10, backgroundColor: 'white', flex: 1
	},
  image: {
		height, width: height
  },
	info: {
		flex: 1,
    paddingRight: 10,
	},
  statistic: {
  },
	featured_image: {
		height, flex: 1,
	},
	featured_info: {
		position: 'absolute',
		bottom: 0,
		flex: 1,
		padding: 10,
		backgroundColor: 'rgba(104,54,5,.6)',
		display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start'
	},
}
