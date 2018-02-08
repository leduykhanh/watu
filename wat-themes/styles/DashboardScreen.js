import { Platform, Dimensions, PixelRatio } from "react-native"

const width = Dimensions.get("window").width
const highratingH = 240
const fontSize = 30

export default {
	container: {
      paddingBottom: 100
    },

    new_shops_text: {
		fontSize: 16, marginTop: 4, marginLeft: 10
    },

    text: {
      color: '#fff',
      fontSize: fontSize,
      fontWeight: 'bold'
    },

	new_shops: {
		width: 142, height: 542, flex:1, backgroundColor: 'grey'
	},
	highrating_shops: {
		container: {height: highratingH},
		slide: {
			flex: 1,
			justifyContent: 'center',
			backgroundColor: 'red',
			height: highratingH
	    },
		image: {
			width,
			flex: 1,
			height: highratingH
	  	},
		info: {
			backgroundColor: "rgba(0, 0, 0, 0.6)", top: 170, padding: 10,
			position:'absolute', alignSelf: 'stretch', width
		},
	},
	nearby_shops: {
		container: {
			width: 142, height: 542, flex:1, backgroundColor: 'grey'
		}
	},
}
