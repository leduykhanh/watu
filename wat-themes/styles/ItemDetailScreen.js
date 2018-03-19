import { Platform, Dimensions, PixelRatio } from "react-native"

const width = Dimensions.get("window").width
const size = 110

export default {
    image_container: {
		    width: size, height: size, marginTop: 10, marginBottom: 20, marginLeft: 10, borderRadius: 50
    },
    image: {
		    width: size, height: size, borderRadius: size/2
    },
    info_container: {
      width: '100%', paddingTop: 10, marginLeft: 10, 
    }
}
