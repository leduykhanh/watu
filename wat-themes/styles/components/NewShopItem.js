import { Platform, Dimensions, PixelRatio } from 'react-native'

const size = 160

export default {
	container: {
		width: size, height: size, marginLeft: 10, marginBottom: 10, backgroundColor: 'white',
	},
    addressContainer: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		bottom: 44, paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3,
		alignSelf: 'stretch', width: size, position: 'absolute'
    },
	infoContainer: {
		backgroundColor: 'white',
		bottom: 0, paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3,
		width: size, position: 'absolute',
		display: 'flex', alignItems: 'center', justifyContent: 'center'
	},
    image: {
		width: size, height: size
    },
}
