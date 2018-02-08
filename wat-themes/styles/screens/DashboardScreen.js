import { Platform, Dimensions, PixelRatio } from "react-native"

const width = Dimensions.get("window").width
const fontSize = 30

export default {
	container: {
      paddingBottom: 100
    },

    text: {
      color: '#fff',
      fontSize: fontSize,
      fontWeight: 'bold'
    },

	new_shops_text: {
		fontSize: 16, fontWeight: 'bold', margin: 10
    },
	new_shops: {
		backgroundColor: 'rgb(233,233,233)',
	},
	nearby_shops: {
		container: {
			width: 142, height: 542, flex:1, backgroundColor: 'grey'
		}
	},
}
